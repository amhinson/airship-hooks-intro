import React from 'react';

export const MyAPI = {
  count: 0,
  fakeFetch() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.count += 1;
        resolve(this.count);
      }, 1000);
    });
  },
  subscribe(cb) {
    this.intervalId = setInterval(() => {
      this.count += 1;
      cb(this.count);
    }, 1000);
  },
  unsubscribe() {
    clearInterval(this.intervalId);
    this.reset();
  },
  reset() {
    this.count = 0;
  }
};

export const Star = ({ filledIn }) => (
  <i class={`nes-icon star ${!filledIn && 'is-transparent'} is-large`} />
);
