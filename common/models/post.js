module.exports = function (Post) {

  /**
   * Gets list of posts with no bodies
   * @returns {array}
   */
  Post.getPostsList = () => {
    return Post.find({ fields: { id: true, header: true, body: false } });
  };

  /**
   * Gets list of posts with no bodies
   */
  Post.remoteMethod('getPostsList', {
    accepts: [],
    returns: { type: 'array', root: true },
    http: { path: '/getPostsList', verb: 'get' }
  });

  /**
   * Gets body of post by it's ID
   * @param id of the post
   * @returns {Object|*}
   */
  Post.getBody = (id) => {
    return Post.findOne({
      where: { id: id },
      fields: { id: false, header: false, body: true }
    });
  };

  /**
   * Gets body of post by it's ID
   */
  Post.remoteMethod('getBody', {
    accepts: [
      { arg: 'id', type: 'string', required: true, http: { source: 'path' } }
    ],
    returns: { type: 'array', root: true },
    http: { path: '/:id/getBody', verb: 'get' }
  });


  /* Disabling standard remote methods*/
  Post.disableRemoteMethod('createChangeStream', true);
  Post.disableRemoteMethod('updateAll', true);
};
