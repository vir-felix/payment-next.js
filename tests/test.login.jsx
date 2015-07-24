import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import Login from 'views/login';


describe('Login', function() {

  var accessToken = 'some-oauth-access-token';
  var signInSpy = sinon.spy();

  function mountView() {
    return TestUtils.renderIntoDocument(
      <Login accessToken={accessToken} signIn={signInSpy} />
    );
  }

  it('should sign in on mount', function() {
    mountView();
    assert.equal(signInSpy.firstCall.args[0], accessToken);
  });

});
