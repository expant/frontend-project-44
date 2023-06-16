### Hexlet tests and linter status:

[![Maintainability](https://api.codeclimate.com/v1/badges/dfc50c2d88cd46d069c1/maintainability)](https://codeclimate.com/github/expant/frontend-project-44)
[![Actions Status](https://github.com/expant/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/expant/frontend-project-44/actions)

# Brain-games

Brain-games - a set of five console games based on popular mobile brain training apps. Each game asks questions that need to be answered. After three correct answers, the game is considered to be completed. Wrong answers end the game and offer to play it again. Games:

* Calculator. Arithmetic expressions to be evaluated.
* Progression. Search for missing numbers in a sequence of numbers.
* Definition of an even number.
* Finding the Greatest Common Divisor.
* Definition of a prime number.

## Minimal requirements

* installed latest(fresh) Node.js version
* installed 'make' utility. 
    Setup example:
    `sudo apt install make`

## Installation

1.  Install dependencies: 
    ```sh
    make install
    ```
1.  Install game packages: 
    ```sh
    npm link
    ``` 
    or 
    ```sh
    sudo npm link
    ```

## Usage

#### Use the following commands to launch games:
`brain-games` `brain-even` `brain-gcd` `brain-progression` `brain-prime`

### Here you can see the execution of a programs in the terminal


#### brain-even
[![brain-even](https://asciinema.org/a/gICEWsdfxkpr4yx5S71gT21Mk.svg)](https://asciinema.org/a/gICEWsdfxkpr4yx5S71gT21Mk)

#### brain-calc
[![brain-calc](https://asciinema.org/a/UJ4C9U51zqGFC45HSfs3dwvOO.svg)](https://asciinema.org/a/UJ4C9U51zqGFC45HSfs3dwvOO)

#### brain-gcd
[![brain-gcd](https://asciinema.org/a/IiMdTkjmVuo9RstVJNMStykPT.svg)](https://asciinema.org/a/IiMdTkjmVuo9RstVJNMStykPT)

#### brain-progression
[![brain-progression](https://asciinema.org/a/vcQk47ejOx5NiLwFgkwrBeq9F.svg)](https://asciinema.org/a/vcQk47ejOx5NiLwFgkwrBeq9F)

#### brain-prime
[![brain-prime](https://asciinema.org/a/5jfcRddoSc15vOVzw5toEUhaB.svg)](https://asciinema.org/a/5jfcRddoSc15vOVzw5toEUhaB)
