import type React from 'react';
import type { InputHTMLAttributes } from 'react';

type ImageInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: InputHTMLAttributes<HTMLInputElement>['id'];
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const ImageInput: React.FC<ImageInputProps> = ({ onChange, id, fileInputRef, ...rest }) => {
  return (
    <input
      ref={fileInputRef}
      id={id}
      type='file'
      accept='image/*'
      onChange={onChange}
      hidden
      {...rest}
    />
  );
};
