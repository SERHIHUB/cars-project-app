import { useState, useRef } from "react";
import { Button } from "../shared/components/Button/Button";

export const Picture = ({ register }) => {
  const hiddenInputRef = useRef();

  const [preview, setPreview] = useState();

  const { ref: registerRef, ...rest } = register("profilePicture");

  const handleUploadedFile = (event) => {
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };

  const onUpload = () => {
    hiddenInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        name="profilePicture"
        {...rest}
        onChange={handleUploadedFile}
        ref={(e) => {
          registerRef(e);
          hiddenInputRef.current = e;
        }}
      />

      {/* <Avatar src={preview} sx={{ width: 80, height: 80 }} /> */}
      <div></div>

      <Button onClick={onUpload}>Download</Button>
    </div>
  );
};
