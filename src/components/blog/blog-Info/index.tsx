import React from "react";
import { useParams } from "react-router-dom";

function BlogInfo() {
  const { slug } = useParams();
  //   console.log(slug);
  return (
    <div className="bg-white mx-44 ">
      <div className="font-sans mx-28 my-7 selection:bg-green-200 flex  flex-col items-center">
        <h1 className="font-extrabold text-4xl text-gray-900 ">
          Things they didn't teach you about Software Engineering
        </h1>
        <div className="mx-44 mt-7 text-left px-9 ">
          <h2 className="text-2xl text-gray-800 font-semibold">
            Important, Read This First
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mt-3 tracking-wide">
            You’re about to read a blog post with a lot of advice. Learning from
            those who came before us is instrumental to success, but we often
            forget an important caveat. Almost all advice is contextual, yet it
            is rarely delivered with any context. “You just need to charge
            more!” says the company who has been in business for 20 years and
            spent years charging “too little” to gain customers and become
            successful. “You need to build everything as microservices!” says
            the company who built a quick monolith, gained thousands of
            customers, and then pivoted into microservices as they started
          </p>
        </div>
        <div className="mx-44 mt-7 text-left px-9 ">
          <h2 className="text-2xl text-gray-800 font-semibold">
            1. I still don’t know very much
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mt-3 tracking-wide">
            “How can you not know what BGP is?” “You’ve never heard of Rust?”
            Most of us have heard these kinds of statements, probably too often.
            The reason many of us love software is because we are lifelong
            learners, and in software no matter which direction you look, there
            are wide vistas of knowledge going off in every direction and
            expanding by the day. This means that you can spend decades in your
            career, and still have a huge knowledge gap compared to someone who
            has also spent decades in a seemingly similar role. The sooner you
            realize this, the sooner you can start to shed your imposter
            syndrome and instead delight in learning from and teaching others.
          </p>
        </div>
        <div className="mx-44 mt-7 text-left px-9 ">
          <h2 className="text-2xl text-gray-800 font-semibold">
            2. The hardest part of software is building the right thing
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mt-3 tracking-wide">
            I know this is cliche at this point, but the reason most software
            engineers don’t believe it is because they think it devalues their
            work. Personally I think that is nonsense. Instead it highlights the
            complexity and irrationality of the environments in which we have to
            work, which compounds our challenges. You can design the most
            technically impressive thing in the world, and then have nobody want
            to use it. Happens all the time. Designing software is mostly a
            listening activity, and we often have to be part software engineer,
            part psychic, and part anthropologist. Investing in this design
            process, whether through dedicated UX team members or by simply
            educating yourself, will deliver enormous dividends. Because how do
            you really calculate the cost of building the wrong software? It
            amounts to a lot more than just lost engineering time.
          </p>
        </div>
        <div className="mx-44 mt-7 text-left px-9 ">
          <h2 className="text-2xl text-gray-800 font-semibold">
            3. The best software engineers think like designers
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mt-3 tracking-wide">
            Great software engineers think deeply about the user experience of
            their code. They might not think about it in those terms, but
            whether it is an external API, programmatic API, user interface,
            protocol, or any other interface; great engineers consider who will
            be using it, why it will be used, how it will be used, and what is
            important to those users. Keeping the user’s needs in mind is really
            the heart of good user experience.
          </p>
        </div>
        <div className="mx-44 mt-7 text-left px-9 ">
          <h2 className="text-2xl text-gray-800 font-semibold">
            4. The best code is no code, or code you don’t have to maintain
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mt-3 tracking-wide">
            All I have to say is “coders gonna code.” You ask someone in any
            profession how to solve a problem, and they are going to err on the
            side of what they are good at. It is just human nature. Most
            software engineers are always going to err on the side of writing
            code, especially when a non-technical solution isn’t obvious. The
            same goes for code you don’t have to maintain. Engineering teams are
            apt to want to reinvent the wheel, when lots of wheels already
            exist. This is a balancing act, there are lots of reasons to grow
            your own, but beware of toxic “Not Invented Here” syndrome.
          </p>
        </div>
        <div className="mx-44 mt-7 text-left px-9 ">
          <h2 className="text-2xl text-gray-800 font-semibold">
            5. Software is a means to an end
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mt-3 tracking-wide">
            The primary job of any software engineer is delivering value. Very
            few software developers understand this, even fewer internalize it.
            Truly internalizing this leads to a different way of solving
            problems, and a different way of viewing your tools. If you really
            believe that software is subservient to the outcome, you’ll be ready
            to really find “the right tool for the job” which might not be
            software at all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogInfo;
