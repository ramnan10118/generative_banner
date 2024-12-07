import dynamic from 'next/dynamic';
import PromptInput from '../components/PromptInput';
import styles from '../styles/Home.module.css';

// Import BannerWorkspace dynamically to avoid SSR issues with canvas
const BannerWorkspace = dynamic(() => import('../components/BannerWorkspace'), {
  ssr: false
});

export default function Home() {
  const handleGenerate = (prompt) => {
    console.log('Generating banners for prompt:', prompt);
    // TODO: Implement banner generation logic
  };

  return (
    <div className={styles.container}>
      <BannerWorkspace />
      <PromptInput onGenerate={handleGenerate} />
    </div>
  );
} 