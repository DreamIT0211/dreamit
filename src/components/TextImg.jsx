import React from "react";

const TextImg = () => {
  return (
    <div
      className="relative h-screen bg-purple-200"
      //   style={{
      //     backgroundImage: `url('https://images.unsplash.com/photo-1459478309853-2c33a60058e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      //     backgroundSize: 'cover',
      //     backgroundPosition: 'center',
      //   }}
    >
      <h1
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold"
        style={{
          WebkitTextFillColor: `url('https://images.unsplash.com/photo-1459478309853-2c33a60058e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          textFillColor: `url('https://images.unsplash.com/photo-1459478309853-2c33a60058e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          WebkitTextStroke: "2px white",
          textStroke: "2px white",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)",
        }}
      >
        DreamIT Infotech Pvt Ltd.
      </h1>
    </div>
  );
};

export default TextImg;
