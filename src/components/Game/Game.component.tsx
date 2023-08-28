"use client";

import { ChangeEvent, FormEvent, useState, useRef, useEffect } from "react";

import { Input } from "@/elements/Input/Input.element";

import styles from "./Game.module.scss";

export const Game = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [disableInput, setDisableInput] = useState<boolean>(false);
  const [texts, setTexts] = useState<Array<string>>([]);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const addText = (newText: string) => {
    setTexts((prevTexts) => [...prevTexts, newText]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addText(userInput);
    setUserInput("");
  };

  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.scrollTop =
        textContainerRef.current.scrollHeight;
    }
  }, [texts]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.content}>
          <div className={styles.textContainer} ref={textContainerRef}>
            <div className={styles.textItems}>
              {texts.map((text, index) => (
                <div key={index} className={styles.textItem}>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Input
          className={styles.inputContainer}
          value={userInput}
          onChange={handleChange}
          disabled={disableInput}
        />
      </form>
    </div>
  );
};
