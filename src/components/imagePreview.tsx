type imagePreviewProps = {
  userInput: string;
};

export default function ImagePreview({ userInput }: imagePreviewProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img height={320} width={640} src={userInput} alt="blood sample" />;
}
