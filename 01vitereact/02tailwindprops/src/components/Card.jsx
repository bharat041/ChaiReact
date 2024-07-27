import React  from "react";

function Card({username,btnText = "visit me"}) {
    // console.log("Props:",props)
    // console.log(props.username);
    console.log({username});
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://tse1.mm.bing.net/th?id=OIP.JK_QQz98CRWJKxGz07H7jAHaH0&pid=Api&rs=1&c=1&qlt=95&w=112&h=118" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption >
            <div>
              {username}
            </div>
            <div>
                {btnText}
            </div>
          </figcaption>
        </div>
      </figure>
    )
}

export default Card;