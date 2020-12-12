import React, {useRef} from "react";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = ({cards, onAdd}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid 
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value || "",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
    };

    formRef.current.reset(); //입력받는 곳 초기화
    onAdd(card);
    
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placeholde='Name'
      />
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        name='company'
        placeholde='Company'
      />
      <select className={styles.select} name='theme' ref={themeRef}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        placeholder='title'
      />
      <input
        ref={emailRef}
        className={styles.input}
        type='text'
        name='email'
        placeholder='email'
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placeholder='message'
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
