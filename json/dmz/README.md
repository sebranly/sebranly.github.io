JSON data to be consumed by the project living at [https://github.com/sebranly/dmz](https://github.com/sebranly/dmz)

The timestamps, expressed in seconds, are obtained with the following syntax:
- `Math.floor((new Date("2023-03-06T05:00:00.000Z")).getTime() / 1000)`

When paired with a correct frequency (either `daily` or `weekly`), these are reset times set as **examples** (hence, they can be in the past). Thanks to the frequency, the closest future timestamp can be calculated.

However, if not paired with a frequency (frequency is `none`), they have to be accurate one-off timestamps (for instance for representing the precise release date of a new season).
