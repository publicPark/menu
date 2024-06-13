'use client';
import { ChangeEvent, useRef, useState } from 'react';
import style from './img-picker.module.scss';
import Image from 'next/image';

export default function ImagePicker({ label = '', name = 'image' }) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (imageInput?.current) {
      imageInput.current.click();
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const file = event.target.files[0];
      if (!file) return;

      const fileReader = new FileReader();

      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setPickedImage(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return;
  }

  return (
    <>
      <div className={style.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={style.controls}>
          <div className={style.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && (
              <Image
                src={pickedImage}
                alt="The image selected by the user"
                style={{ objectFit: 'cover' }}
                fill
              />
            )}
          </div>
          <input
            className="hidden"
            type="file"
            id={name}
            accept="image/*"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
          />
          <button type="button" onClick={handlePickClick}>
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}
