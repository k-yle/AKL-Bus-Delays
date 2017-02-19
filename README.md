# AKL-Bus-Delays
:bus: :train: :ferry: :tram: Auckland Bus-delay data. Started recording on 6th Feb 2017

## About
This app was made for my NCEA Geography Internal.   

It compares all the realtime data from AT with the sheduled data, to determine how late each bus 🚌 is.
The time shown for each stop is an all time average. 
You can click on the "x minutes early" text to view the individual measurements.


This project has been recording the bus delays every 15 minutes from the 7th of Febuary 2017 to the 18th of Febuary 2017.

You can download the raw data from [here](https://github.com/k-yle/AKL-Bus-Delays/blob/master/database.json) (*warning:* large file).


While there are some busses 🚌 which are extreemly late, most outliers will be beacuse of issues with the data.
This can be caused by bus 🚌 drivers mistaking which route they're on, or by cancled busses 🚌.

There is no data for trains 🚊 or ferries ⛴ at this stage, beacuse AT has a differnt system for trains 🚊, and no data for ferries ⛴.

## Example CSV data for `813` Route

| Stop # | Station Name                     | Stop Name                        | Avg Delay @ Arrival | Avg Delay @ Departure | 
|--------|----------------------------------|----------------------------------|---------------------|-----------------------| 
| 3383   | Lake Rd and Bracken              | 443 Lake Rd                      | -0.0233             | 0.726125              | 
| 3387   | Lake Rd and Harley               | 373 Lake Rd                      | -3.386              | 0.327272727           | 
| 3389   | Lake Rd and Hauraki              | 296 Lake Rd                      | 11.9                | 6.2835                | 
| 3391   | Lake Rd and Hororata             | 293 Lake Rd                      | -2.560375           | -1.229461538          | 
| 3393   | Lake Rd and Eversleigh           | 257 Lake Rd                      | -0.1368             | 0.586363636           | 
| 3395   | Lake Rd and Winscombe            | 191 Lake Rd                      | 2.785714286         | 1.3646                | 
| 3397   | Lake Rd and Corrella Rd          | 163 Lake Rd                      | 4.11396             | 2.72604               | 
| 3399   | Lake Rd Bayswater and Montgomery | 109 Lake Rd Bayswater            | 5.105076923         | 4.312178571           | 
| 3405   | Victoria Rd and Ewen Alison      | 159 Victoria Rd                  | 11.517              | 0                     | 
| 3407   | Victoria Rd and Hastings         | 141 Victoria Rd                  | 0.417               | 0                     | 
| 3416   | Lake Rd and Cameron              | 366 Lake Rd                      | 2.7                 | 3.425                 | 
| 3418   | Lake Rd and Hauraki              | 319 Lake Rd                      | -1.198              | -2.500842105          | 
| 3420   | Lake Rd and Hororata             | 226 Lake Rd                      |                     |                       | 
| 3422   | Lake Rd and Eversleigh           | Opp 253 Lake Rd                  | 8.59175             | 7.475                 | 
| 3424   | Lake Rd near Westwell            | 174 Lake Rd                      |                     | 8.555666667           | 
| 3426   | Lake Rd Bayswater and Montgomery | 116 Lake Rd                      | 4.916666667         | 5.327285714           | 
| 3434   | Victoria Rd and Ewen Alison      | 100 Victoria Rd                  |                     | -1.4668               | 
| 3436   | Victoria Rd and Hastings         | 88 Victoria Rd                   | -1.0298             | -5.608375             | 
| 3447   | Lake Rd and Cameron              | 397 Lake Rd                      | 0.025727273         | -3.184818182          | 
| 3449   | Victoria Rd and Fleet            | 81 Victoria Rd                   |                     | 13.567                | 
| 3461   | Vauxhall Rd and Morrison         | 151 Vauxhall Rd                  |                     | 0                     | 
| 3462   | Devonport Wharf Entrance         | Devonport by Wharf Entrance      | 0.515602151         | -0.19626087           | 
| 3463   | Vauxhall Rd and Turnbull         | 175 Vauxhall Rd                  | 8.0165              | 0                     | 
| 3465   | Vauxhall Rd and Albert           | 87 Albert Rd                     | 4.9835              | 4.925                 | 
| 3467   | Albert Rd and Church             | 51 Albert Rd                     | 11.283              | 0                     | 
| 3469   | Albert Rd and Lake               | 27 Albert Rd                     | 0                   |                       | 
| 3478   | Vauxhall Rd and Tanui            | 64 Vauxhall Rd                   | -3.166666667        | -3.589454545          | 
| 3481   | Old Lake Rd and Lake             | 91 Old Lake Rd                   | 5.0484              | 5.13272               | 
| 3483   | Old Lake Rd and Wicklow          | 59 Old Lake Rd                   | 4.95                | 4.133                 | 
| 3487   | Old Lake Rd and Merani           | 35 Old Lake Rd                   |                     |                       | 
| 3488   | Lake Rd and Williamson           | 152 Lake Rd                      | 6.839272727         | 5.200090909           | 
| 3489   | Old Lake Rd By Woodall Park      | Old Lake Rd by Woodall Park      | 0                   |                       | 
| 3490   | Victoria Rd and Fleet            | 10 Victoria Rd                   |                     | -3.7934               | 
| 3494   | Vauxhall Rd and Ascot            | 124 Vauxhall Rd                  | -0.9333             | -2.95425              | 
| 3496   | Vauxhall Rd and Morrison         | Opp 145 Vauxhall Rd              | -1.496333333        | -2.06675              | 
| 3498   | Vauxhall Rd and Turnbull         | 130 Vauxhall Rd                  | 0.3375              | -1.025                | 
| 3500   | Albert Rd and Cambria            | 58 Albert Rd                     | -3.508333333        | -3.2366               | 
| 3502   | Albert Rd and Church             | 26 Albert Rd                     | -5.691625           | -4.1734               | 
| 3512   | Old Lake Rd and Lake             | 58 Old Lake Rd                   | 4.861538462         |                       | 
| 3514   | Old Lake Rd and Wicklow          | 36 Old Lake Rd                   | 4.29                | 4.12525               | 
| 3516   | Old Lake Rd and Hemi             | 22 Old Lake Rd                   | 1.578571429         | 3.7536                | 
| 3518   | Old Lake Rd and Merani           | 14 Old Lake Rd                   | 0.766666667         | 2.197166667           | 
| 3520   | Old Lake Rd and Seabreeze        | Old Lake Rd opp Seabreeze Rd     | 0.4901              | 0.822478261           | 
| 3551   | Takapuna Transport Centre        | Takapuna Platform 1              | 15.72994737         | -0.065384615          | 
| 3568   | Takapuna Transport Centre        | Takapuna Platform 2              | 2.953383178         | 0                     | 
| 3652   | Lake Road near Takapuna Grammar  | Lake Rd outside Takapuna Grammar | 6.972333333         | 8.290571429           | 

donload  [example.csv](example.csv)
