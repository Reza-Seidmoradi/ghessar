import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Spinner } from 'native-base';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TwitComments from '../../components/TwitComments';
import { makeSelectAllComments } from '../App/selectors';
import { getCommentsAction } from '../App/actions';

function Comment({ twit, getComments, comments }) {
  const [allComments, setComments] = useState(null);

  useEffect(() => {
    getComments(twit.id);
    return undefined;
  }, []);
  useEffect(() => {
    if (comments.data && comments.data.comments) setComments(comments.data.comments.data);
    return undefined;
  }, [comments.data]);

  return (
    <Container>
      <Content>{allComments === null ? <Spinner /> : <TwitComments twit={twit} comments={allComments} />}</Content>
    </Container>
  );
}

Comment.propTypes = {
  dispatch: PropTypes.func,
  twit: PropTypes.object.isRequired,
  getComments: PropTypes.func,
  comments: PropTypes.object,
};

const mapStateToPorps = createStructuredSelector({
  comments: makeSelectAllComments(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getComments: (id) => dispatch(getCommentsAction(id)),
  };
}

const withConnect = connect(mapStateToPorps, mapDispatchToProps);

export default compose(withConnect)(Comment);
