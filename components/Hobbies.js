import React from "react";

function Hobbies() {
  return (
    <div>
      <h2 className="text-[2.3rem] font-mono font-medium text-h2">Hobbies</h2>
      <div className="text-lg pl-[1.115rem]">
        <ul>
          <li className="list-disc">Dance😊</li>
          <li className="list-disc">
          🎤 singing (love dancing 💃🏻, it&apos;s like it owns me 😂)
          </li>
          <li className="list-disc">Art</li>
          <li className="list-disc">Love sketching</li>
          <li className="list-disc">Embroidery 🪡</li>
          <li className="list-disc">Calligraphy (I do it in my spare time)</li>
          <li className="list-disc">
            <span>I listen to</span>
            <img
              src="/spotify.png"
              alt="Spotify picture"
              className="w-6 h-6 list-disc inline-block pl-1 pr-1"
            />
            and enjoy the music when I&apos;m off from work: (<strong>Arijit Singh</strong>)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hobbies;
