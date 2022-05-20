# MMM-ShutdownTimer
Module for shutting down MagicMirror after specified time using ESP32.

## Installation
Navigate into MagicMirror's Module folder using termial:
```
cd ~/MagicMirror/modules
```
Clone this repository using following command: 
```
git clone https://github.com/richardfous/MMM-ShutdownTimer.git
```
Add the following text to ```MagicMirror/config/config.js``` to activate the module.
```
{
    module: "MMM-ShutdownTimer",
    position: "top_left", // You can change this to your desired position.
    config: {
        //Here you can insert options listed below.
    }
},
```
## Configuration Options
| Option                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```url```              | Url used to turn off the ESP32.<br/> **Type:**```string```<br/> This option is **REQUIRED**|                                                                                                                                                                                                                                                                                                                                           
| ```hoursLeft```        | Specify number of hours left until the ESP32 turns off.<br/> **Type:**```integer```<br/> **Default:**```"0"```<br/>**Possible values:** ```1```-```255```.<br/> This option is **NOT REQUIRED**|
| ```minutesLeft```      | Specify number of minutes left until the ESP32 turns off.<br/> **Type:**```integer```<br/> **Default:**```"1"```<br/>**Possible values:** ```1```-```60```.<br/> This option is **REQUIRED**|
| ```secondsLeft```      | Specify number of seconds left until the ESP32 turns off.<br/> **Type:**```integer```<br/> **Default:**```"1"```<br/>**Possible values:** ```1```-```60```.<br/> This option is **REQUIRED**|
| ```updateInterval```   | Specify how often is the remaining time updated on the screen (in miliseconds)<br/> **Type:**```integer```<br/> **Default:**```"1000"```<br/>**Possible values:** ```1000```-```60000```.<br/> This option is **NOT REQUIRED**|
| ```timerText```        | Specify a text, that will be shown over the remaining time. Default is in Czech language.<br/> **Type:**```string```<br/> **Default:**```"Zbývající čas do vypnutí"```.<br/> This option is **EQUIRED**|

## Issues
If you find any issues with this module, feel free to open a GitHub issue in this repository. 
