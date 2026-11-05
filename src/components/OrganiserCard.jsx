import {
  IconBrandLinkedin,
  IconMail,
  IconBrandTwitter,
} from "@tabler/icons-react";

const OrganiserCard = ({ name, position, image, linkedin, email, twitter }) => (
  <div
    className="bg-white rounded-2xl p-4 max-w-xs mx-auto shadow-md flex flex-col items-center"
    style={{ boxShadow: "0px 4px 28px rgba(0,0,0,0.10)" }}
  >
    <img
      src={image}
      alt={name}
      className="w-[120px] h-[120px] object-cover rounded-xl mb-4"
      style={{ borderRadius: "1.2rem" }}
    />
    <div className="w-full px-2">
      <div className="font-semibold text-base text-gray-900 text-center mb-1">
        {name}
      </div>
      <div className="text-xs text-gray-600 text-center mb-3">{position}</div>
    </div>
    <div className="flex items-center gap-4 justify-center mt-2">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin className="h-5 w-5 text-blue-600" />
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`}>
          <IconMail className="h-5 w-5 text-orange-500" />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <IconBrandTwitter className="h-5 w-5 text-blue-400" />
        </a>
      )}
    </div>
  </div>
);

export default OrganiserCard;
