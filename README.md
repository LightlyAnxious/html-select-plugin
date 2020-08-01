# html-select-plugin
Dependency free, vanilla js plugin, emulating styled html select element

Install =========

Put select.js from /select folder to your project.

Initialisation =========

Create instance of Select class with this options:

1. Selector of container element

2. Options object that contains:

== placeholder - default placeholder // String

== selectedId - default value that shows after initialisation // String

== data - array of objects that contain id & value of select options

    Example
      data: [
        { id: '1', value: 'Text1' },
        { id: '2', value: 'Text2' },
        { id: '3', value: 'Text3' },
      ]

3. onSelect() - optionable callback, by default returns selected option value

Customization =========

All styles used by default are stored in /select folder

Demo =========

This plugin uses parcel to bundle demo.
To start, type in terminal:
'parcel index.html'


