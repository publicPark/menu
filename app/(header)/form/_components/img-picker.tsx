'use client';
import { useRef } from 'react';
import style from './img-picker.module.scss';

export default function ImagePicker({ label = '', name = 'image' }) {
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (imageInput?.current) {
      imageInput.current.click();
    }
  }

  return (
    <>
      <div className={style.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={style.controls}>
          <input
            className="hidden"
            type="file"
            id={name}
            accept="image/*"
            name={name}
            ref={imageInput}
          />
          <button type="button" onClick={handlePickClick}>
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}
