function Comp4() {
  const technologies: string[] = [
    "React",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Node.js",
  ];

  return (
    <>
      <h1>Technologies</h1>

      <ol>
        {
          // Flower braces used to use typescript in html
          technologies.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })
        }
      </ol>
    </>
  );
}

export default Comp4;
