import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('link');
  },

  filter: Ember.inject.service("voyagesSearch"),
  // setupController() {
  //   this.controllerFor("databases.voyages.search").set(fromYear, SEARCH_MIN_YEAR);
  //   this.controllerFor("databases.voyages.search").set(toYear, SEARCH_MAX_YEAR);
  // },

  // automatically load results tab when navigated to voyages database search
  redirect: function () {
    this.transitionTo('databases.voyages.search.results');
  },

  actions: {
    alert(message){
      alert(message);
    },

    saveSearch(){
      var filter = this.get("filter");
      var searchJSON = filter.get("currentSearchObj");
      var searchString = JSON.stringify(searchJSON);

      // generate a random string for now; will replace later
      var searchName = "";
      var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for(var i = 0; i < 5; i++)
          searchName += charSet.charAt(Math.floor(Math.random() * charSet.length));
      var link = `http://localhost:4200/databases/voyages/search/${searchName}`;

      // create new object
      var newSearch = this.store.createRecord("link", {
        url: link,
        search: searchString,
        name: searchName
      })

      newSearch.save().then((response) => {
        alert(`Your search is saved with unique identifier: ${searchName} and link as: ${link}`);
      })
    },

    deleteLink(link) {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        link.destroyRecord();
      }
    },

    getURL(link) {
      alert (`${link.get("url")}`);
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      // this.controller.get('model').rollbackAttributes();
      // can design this in different ways
      // let confirmation = confirm("Leaving this page will reset your search filters. Would you like to leave?");
      // if (confirmation) {
      //   var filter = this.get("filter");
      //   filter.resetAll();
      // } else {
      //   transition.abort();
      // }
    },

  }
});
