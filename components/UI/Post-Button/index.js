import { PostButton } from './style';

const AddPostButton = ({ openModel }) => {
  return (
    <PostButton aria-label="share post" onClick={openModel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </PostButton>
  );
};

export default AddPostButton;
