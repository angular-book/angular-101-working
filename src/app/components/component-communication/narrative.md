# Component Communication 

## Simple Stuff

The `app-cc-display` has a `text` input.

Show passing raw text in.

Show passing a variable from the component (without the square brackets, fail, and with, win.)

Simple output `(hovered)`

Note: Since these are simple "display" components I opted for *not* exporting them from the barrel.

## Object

The `app-cc-display-obj` component has an input of an object (friend). I'm not using types here yet, just using inference. 

Want to show that the types are checked anyhow, so when recording this, change a property name or type or something and see the error.

The `locationChanged` output started off as a local mutation in the `app-cc-display-obj` component.

This is setting us up for a one-way data flow thing.

Made it an output so that the parent component can display a message.

The output has a parameter (boolean).


Introduced `*ngIf`

Used a `setTimeout(...)` in the toggle to set up for discussion of `zone.js` and change detection.

