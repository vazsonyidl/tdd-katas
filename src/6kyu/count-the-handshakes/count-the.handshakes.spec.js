/**
 * @task: https://www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript
 */

const allHandshakes = number => (number * (number - 1)) / 2;

const getParticipants = (numberOfHandshakes) => {
  let minimumParticipants = 1;
  while (allHandshakes(minimumParticipants) < numberOfHandshakes) ++minimumParticipants;

  return minimumParticipants;
};

fdescribe('Find the people by handshakes', () => {
  //
  it('0 handshake requires 1 people', () => expect(getParticipants(0)).toEqual(1));

  it('1 handshake requires 2 people', () => expect(getParticipants(1)).toEqual(2));

  it('3 handshake requires 3 people', () => expect(getParticipants(3)).toEqual(3));

  it('6 handshake requires 4 people', () => expect(getParticipants(6)).toEqual(4));
  it('7 handshake requires 5 people', () => expect(getParticipants(7)).toEqual(5));
});
