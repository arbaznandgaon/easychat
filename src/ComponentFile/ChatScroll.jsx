import React from "react";

function Message(props) {
  return (
    <div>
      {props.me ? (
        <div className="px-2 py-1 rounded-br-lg bg-slate-800 text-gray-200 w-max">
          {" "}
          <p>{props.text}</p>
        </div>
      ) : (
        <div className="flex justify-end w-full">
          <div className="rounded-bl-lg px-2 py-1 bg-white text-gray-800 ">
            <p>{props.text}</p>
          </div>
        </div>
      )} 
    </div>
  );
}

function ChatScroll() {
  return (
    <div className=" h-full w-full space-y-4 px-3">
      <Message text="Hi There" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321" me={true} />
      <Message text="Hi" me={true} />
      <Message text="Hello" me={false} />
      <Message text="How are you" me={true} />
      <Message text="Im Good, wbu" me={false} />
      <Message text="Im fine too" me={true} />
      <Message text="123" me={false} />
      <Message text="321000" me={true} />
      <div className="h-16"></div>
    </div>
  );
}

export default ChatScroll;
