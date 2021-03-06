import GuessingGame from "./GuessingGame";

function About() {
  return (
    <div style={{ backgroundColor: "whitesmoke" }} className="p-8">
      <h1
        className="text-center m-4 font-size-lg md:pt-4 font-bold section-header text-xl"
        id="AboutMe"
        style={{ ScrollMarginTop: "75px" }}
      >
        About
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-20 mx-4">
        <GuessingGame></GuessingGame>
        <div className="w-72 sm:w-96">
          <h1 className="text-center text-purple-500 mb-4">About This Website </h1>
          <div className="italic text-center">I believe function comes before form - this is why I chose a simple sans font. I wanted to balance aesthetics with useability.</div>
            <div className="mt-6 md:text-center"> Here are two of my favorite parts of this website: 
                <ol>
                <li className="mt-4">1. The retractable navigation bar: To create the retractable navigation bar I added an event listener to the top level app component which calls a method when the user scrolls, causing a state change. That state change is used with the conditional ternary operator and Tailwind CSS to pass a prop to the navigation bar component which changes its height as the page is scrolled. </li>
                <li className="mt-2 mb-10">2. The 'about me' quiz: The about me quiz draws on a JS object of questions, answers, and correct answers, and uses it to populate the quiz body. The quiz component has multiple state arrays, and when the user enters an answer it gets saved in the array, and is compared to the correct answers at the end to calculate the score. </li>

                </ol>   
         </div>
        </div>
      </div>
    </div>
  );
}

export default About;
