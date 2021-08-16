module App

open Browser.Dom
open Fable.Core
open Fable.Core.JsInterop

let [<Global>] console: JS.Console = jsNative

let mauriciosHouse = """.
 ________________________________________________
|                                                |
|                         ((~~~~~~~~~~~~~~~~~~~~~|
|           ______       (~~~~~~~~~~~~~~   ~~~~~~|
|      ____/======\        (~~~~~~~~~~~  |>  ~~~~|
|     /-       _  |      (((~~~~~~~~  ___|___  ~~|
|     |   --  |_| |     (~(~~~~~~~~~  \_____/  ~~|
|     |__| -|_____|      (~~(~~~~~~~~  -  -   ~~~|
|                       (((~~~~~~~~~~~~~~~~~~~~~~|
|                                                |
|             Maurício's Beach House             |
|________________________________________________|
."""  

let pad = document.querySelector("textarea") :?> Browser.Types.HTMLTextAreaElement

pad.value <- mauriciosHouse

pad.onkeypress <- fun _ ->
    console.log(pad.value)
