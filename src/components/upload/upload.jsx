import React, { useRef, useState } from 'react';
import styles from './upload.module.css';

const Upload = ({imageUploader, name, onFileChange}) => {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  
  const onButtonClick = e => {
    e.preventDefault();
    inputRef.current.click();
  }

  const onChange = async e => {
    setIsLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setIsLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url
    });
  }

  return (
    <div className={styles.file}>
      <input ref={inputRef} className={styles.input} type="file" accept="images/*" name="file" onChange={onChange} />
      {isLoading ? 
        <span className={styles.sppiner}></span> :
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
          {name || 'No file'}
        </button>
      }
    </div>
  )
};

export default Upload;
