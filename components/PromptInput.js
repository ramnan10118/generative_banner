import { useState } from 'react';
import styles from '../styles/PromptInput.module.css';

const PromptInput = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your banner description..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Generate
      </button>
    </form>
  );
};

export default PromptInput; 