import React, { useRef } from 'react';
import styles from './upload.module.css';

const Upload = ({imageUploader, name, onFileChange}) => {
  const inputRef = useRef();
  const onButtonClick = e => {
    e.preventDefault();
    inputRef.current.click();
  }
  const onChange = async e => {
    const uploaded = await imageUploader.upload(e.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url
    });
  }
  return (
    <div className={styles.file}>
      <input ref={inputRef} className={styles.input} type="file" accept="images/*" name="file" onChange={onChange} />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  )
};

export default Upload;
