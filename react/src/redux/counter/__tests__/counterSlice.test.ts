import counterSlice from '../counterSlice';

const counter = counterSlice.reducer;
const { increment, decrement } = counterSlice.actions;

describe('counter reducer', () => {
  it('Should handle initial state', () => {
    const dummyAction = { type: 'dummy_action' };
    expect(counter(undefined, dummyAction)).toBe(0);
  });

  it('Should handle increment', () => {
    expect(counter(0, increment)).toBe(1);
  });

  it('Should handle decrement', () => {
    expect(counter(0, decrement)).toBe(-1);
  });
});
