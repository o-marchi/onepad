import { some } from "./.fable/fable-library.3.2.9/Option.js";

export const mauriciosHouse = ".\r\n ________________________________________________\r\n|                                                |\r\n|                         ((~~~~~~~~~~~~~~~~~~~~~|\r\n|           ______       (~~~~~~~~~~~~~~   ~~~~~~|\r\n|      ____/======\\        (~~~~~~~~~~~  |\u003e  ~~~~|\r\n|     /-       _  |      (((~~~~~~~~  ___|___  ~~|\r\n|     |   --  |_| |     (~(~~~~~~~~~  \\_____/  ~~|\r\n|     |__| -|_____|      (~~(~~~~~~~~  -  -   ~~~|\r\n|                       (((~~~~~~~~~~~~~~~~~~~~~~|\r\n|                                                |\r\n|             Maurício\u0027s Beach House             |\r\n|________________________________________________|\r\n.";

export const pad = document.querySelector("textarea");

pad.value = mauriciosHouse;

pad.onkeypress = ((_arg1) => {
    console.log(some(pad.value));
});

