import os

# 1. Update FloatingNav in floating-navbar.jsx
nav_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\ui\floating-navbar.jsx'
with open(nav_path, 'r', encoding='utf-8') as f:
    nav_text = f.read()

nav_t = nav_text.replace('\r\n', '\n')

# Add useEffect to imports if not present
if 'import React, { useState } from "react";' in nav_t:
    nav_t = nav_t.replace(
        'import React, { useState } from "react";',
        'import React, { useState, useEffect } from "react";'
    )
elif 'import React, { useState' in nav_t and 'useEffect' not in nav_t:
    nav_t = nav_t.replace('useState', 'useState, useEffect')

# Add modalOpen state and listener
old_nav_body = '''export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  // State for mobile menu dropdown
  const [open, setOpen] = useState(false);'''

new_nav_body = '''export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // State for mobile menu dropdown
  const [open, setOpen] = useState(false);

  // Hide navbar completely whenever gallery modal or lightbox is opened
  useEffect(() => {
    const handleModal = (e) => {
      setModalOpen(Boolean(e?.detail?.open));
    };
    window.addEventListener("gallery-modal-change", handleModal);
    return () => window.removeEventListener("gallery-modal-change", handleModal);
  }, []);'''

if old_nav_body in nav_t:
    nav_t = nav_t.replace(old_nav_body, new_nav_body)
    print("Added modal listener to FloatingNav!")
else:
    print("Warning: old_nav_body not matched exactly")

# Add if (modalOpen) return null; before return (
old_ret = '''  return (
    <AnimatePresence mode="wait">'''

new_ret = '''  if (modalOpen) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">'''

if old_ret in nav_t:
    nav_t = nav_t.replace(old_ret, new_ret)
    print("Added early return when modalOpen is true!")
else:
    print("Warning: old_ret not matched")

# Also add floating-nav and data-floating-nav to class / props
nav_t = nav_t.replace(
    '"flex max-w-fit fixed top-6 inset-x-0 mx-auto',
    '"floating-nav flex max-w-fit fixed top-6 inset-x-0 mx-auto'
)

with open(nav_path, 'w', encoding='utf-8') as f:
    f.write(nav_t)
print("Saved floating-navbar.jsx successfully!")

# 2. Update PastEventsGalleryBox.jsx
box_path = r'CIH4.0FINAL\CIH-3.0-main\src\components\PastEventsGalleryBox.jsx'
with open(box_path, 'r', encoding='utf-8') as f:
    box_text = f.read()

box_t = box_text.replace('\r\n', '\n')

# Update useEffect for isOpen to dispatch custom event
old_box_effect = '''  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);'''

new_box_effect = '''  // Prevent background scroll & hide floating navbar when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("gallery-modal-open");
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("gallery-modal-change", { detail: { open: true } })
        );
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("gallery-modal-open");
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("gallery-modal-change", { detail: { open: false } })
        );
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("gallery-modal-open");
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("gallery-modal-change", { detail: { open: false } })
        );
      }
    };
  }, [isOpen]);'''

if old_box_effect in box_t:
    box_t = box_t.replace(old_box_effect, new_box_effect)
    print("Updated PastEventsGalleryBox useEffect to dispatch gallery-modal-change!")
else:
    print("Warning: old_box_effect not matched")

# Update z-indices to explicit brackets z-[99999]
box_t = box_t.replace('className="fixed inset-0 z-5000', 'className="fixed inset-0 z-[99999]')
box_t = box_t.replace('className="fixed inset-0 z-6000', 'className="fixed inset-0 z-[999999]')

with open(box_path, 'w', encoding='utf-8') as f:
    f.write(box_t)
print("Saved PastEventsGalleryBox.jsx successfully!")

# 3. Update globals.css
css_path = r'CIH4.0FINAL\CIH-3.0-main\src\app\globals.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_text = f.read()

css_rule = '''
/* Hide floating navbar when gallery modal is open */
body.gallery-modal-open .floating-nav,
body.gallery-modal-open [data-floating-nav],
body.gallery-modal-open .fixed.top-6 {
  display: none !important;
  opacity: 0 !important;
  pointer-events: none !important;
  visibility: hidden !important;
}
'''

if 'body.gallery-modal-open' not in css_text:
    css_text += css_rule
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css_text)
    print("Added CSS rule to globals.css!")
else:
    print("CSS rule already exists in globals.css")

