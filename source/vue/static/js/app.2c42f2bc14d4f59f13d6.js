webpackJsonp([1],{"1sJe":function(n,e){},GHGh:function(n,e,t){var r=t("z/+d");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t("rjj0")("d50ce41e",r,!1)},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("u1/p"),i=(t("1sJe"),t("7+uW")),a=t("69U5"),o="graphcool-user-id",s="graphcool-auth-token",l={name:"AppHeader",computed:{userId:function(){return this.$root.$data.userId}},methods:{logout:function(){localStorage.removeItem(o),localStorage.removeItem(s),this.$root.$data.userId=localStorage.getItem(o)}}},u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"flex pa1 justify-between nowrap orange"},[t("div",{staticClass:"flex flex-fixed black"},[t("router-link",{staticClass:"fw7 mr1 no-underline black",attrs:{to:"/"}},[n._v("Hacker News")]),n._v(" "),t("router-link",{staticClass:"ml1 no-underline black",attrs:{to:"/"}},[n._v("new")]),n._v(" "),t("div",{staticClass:"ml1"},[n._v("|")]),n._v(" "),t("router-link",{staticClass:"ml1 no-underline black",attrs:{to:"/top"}},[n._v("top")]),n._v(" "),t("div",{staticClass:"ml1"},[n._v("|")]),n._v(" "),t("router-link",{staticClass:"ml1 no-underline black",attrs:{to:"/search"}},[n._v("search")]),n._v(" "),n.userId?t("div",{staticClass:"flex"},[t("div",{staticClass:"ml1"},[n._v("|")]),n._v(" "),t("router-link",{staticClass:"ml1 no-underline black",attrs:{to:"/create"}},[n._v("submit")])],1):n._e()],1),n._v(" "),t("div",{staticClass:"flex flex-fixed"},[n.userId?t("div",{staticClass:"ml1 pointer black",on:{click:function(e){n.logout()}}},[n._v("logout")]):t("router-link",{staticClass:"ml1 no-underline black",attrs:{to:"/login"}},[n._v("login")])],1)])};u._withStripped=!0;var d={render:u,staticRenderFns:[]},c=d;var p=t("VU/8")(l,c,!1,null,null,null);p.options.__file="src/components/AppHeader.vue";var m={name:"app",components:{AppHeader:p.exports}},v=function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"center w85"},[e("app-header"),this._v(" "),e("div",{staticClass:"ph3 pv1 background-gray"},[e("router-view")],1)],1)])};v._withStripped=!0;var A={render:v,staticRenderFns:[]},f=A;var h=!1,k=t("VU/8")(m,f,!1,function(n){h||t("GHGh")},null,null);k.options.__file="src/App.vue";var g=k.exports,_=t("/ocq"),y=t("2R8v"),w=t.n(y),$=t("tlQw"),C=t.n($),x=w()(["\n  query AllLinksQuery($first: Int, $skip: Int, $orderBy: LinkOrderBy) {\n    allLinks(first: $first, skip: $skip, orderBy: $orderBy) {\n      id \n      createdAt\n      url \n      description\n      postedBy {\n        id \n        name \n      }\n      votes {\n        id \n        user {\n          id \n        }\n      }\n    }\n    _allLinksMeta {\n      count\n    }\n  }\n"],["\n  query AllLinksQuery($first: Int, $skip: Int, $orderBy: LinkOrderBy) {\n    allLinks(first: $first, skip: $skip, orderBy: $orderBy) {\n      id \n      createdAt\n      url \n      description\n      postedBy {\n        id \n        name \n      }\n      votes {\n        id \n        user {\n          id \n        }\n      }\n    }\n    _allLinksMeta {\n      count\n    }\n  }\n"]),I=w()(["\n  mutation CreateLinkMutation($description: String!, $url: String!, $postedById: ID!) {\n    createLink(\n      description: $description,\n      url: $url,\n      postedById: $postedById\n    ) {\n      id\n      createdAt\n      url\n      description\n      postedBy {\n        id\n        name\n      }\n    }\n  }\n"],["\n  mutation CreateLinkMutation($description: String!, $url: String!, $postedById: ID!) {\n    createLink(\n      description: $description,\n      url: $url,\n      postedById: $postedById\n    ) {\n      id\n      createdAt\n      url\n      description\n      postedBy {\n        id\n        name\n      }\n    }\n  }\n"]),b=w()(["\n  mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {\n    signupUser(\n      name: $name,\n      email: $email,\n      password: $password\n    ) {\n      id\n      token\n    }\n\n    authenticateUser(\n      email: $email,\n      password: $password\n    ) {\n      token\n      id\n    }\n  }\n"],["\n  mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {\n    signupUser(\n      name: $name,\n      email: $email,\n      password: $password\n    ) {\n      id\n      token\n    }\n\n    authenticateUser(\n      email: $email,\n      password: $password\n    ) {\n      token\n      id\n    }\n  }\n"]),L=w()(["\n  mutation SigninUserMutation($email: String!, $password: String!) {\n    authenticateUser(\n      email: $email,\n      password: $password\n    ) {\n      token\n      id\n    }\n  }\n"],["\n  mutation SigninUserMutation($email: String!, $password: String!) {\n    authenticateUser(\n      email: $email,\n      password: $password\n    ) {\n      token\n      id\n    }\n  }\n"]),E=w()(["\n  mutation CreateVoteMotation($userId: ID!, $linkId: ID!) {\n    createVote(userId: $userId, linkId: $linkId) {\n      id\n      link {\n        votes {\n          id\n          user {\n            id\n          }\n        }\n      }\n      user {\n        id \n      }\n    }\n  }\n"],["\n  mutation CreateVoteMotation($userId: ID!, $linkId: ID!) {\n    createVote(userId: $userId, linkId: $linkId) {\n      id\n      link {\n        votes {\n          id\n          user {\n            id\n          }\n        }\n      }\n      user {\n        id \n      }\n    }\n  }\n"]),S=w()(["\n  query AllLinksSearchQuery($searchText: String!) {\n    allLinks(filter: {\n      OR: [{\n        url_contains: $searchText\n      }, {\n        description_contains: $searchText\n      }]\n    }) {\n      id\n      url\n      description\n      createdAt\n      postedBy {\n        id\n        name\n      }\n      votes {\n        id\n        user {\n          id\n        }\n      }\n    }\n  }\n"],["\n  query AllLinksSearchQuery($searchText: String!) {\n    allLinks(filter: {\n      OR: [{\n        url_contains: $searchText\n      }, {\n        description_contains: $searchText\n      }]\n    }) {\n      id\n      url\n      description\n      createdAt\n      postedBy {\n        id\n        name\n      }\n      votes {\n        id\n        user {\n          id\n        }\n      }\n    }\n  }\n"]),B=w()(["\n  subscription {\n    Link(filter: {\n      mutation_in: [CREATED]\n    }) {\n      node {\n        id \n        url \n        description\n        createdAt\n        postedBy {\n          id \n          name\n        }\n        votes {\n          id \n          user {\n            id\n          }\n        }\n      }\n    }\n  }\n"],["\n  subscription {\n    Link(filter: {\n      mutation_in: [CREATED]\n    }) {\n      node {\n        id \n        url \n        description\n        createdAt\n        postedBy {\n          id \n          name\n        }\n        votes {\n          id \n          user {\n            id\n          }\n        }\n      }\n    }\n  }\n"]),U=w()(["\n  subscription {\n    Vote(filter: {\n      mutation_in: [CREATED]\n    }) {\n      node {\n        id \n        link {\n          id \n          url\n          description\n          createdAt\n          postedBy {\n            id\n            name\n          }\n          votes {\n            id \n            user {\n              id\n            }\n          }\n        }\n        user {\n          id\n        }\n      }\n    }\n  }\n"],["\n  subscription {\n    Vote(filter: {\n      mutation_in: [CREATED]\n    }) {\n      node {\n        id \n        link {\n          id \n          url\n          description\n          createdAt\n          postedBy {\n            id\n            name\n          }\n          votes {\n            id \n            user {\n              id\n            }\n          }\n        }\n        user {\n          id\n        }\n      }\n    }\n  }\n"]),D=C()(x),T=C()(I),P=C()(b),N=C()(L),R=C()(E),V=C()(S),F=C()(B),q=C()(U),M={name:"createLink",data:function(){return{description:"",url:""}},methods:{createLink:function(){var n=this,e=localStorage.getItem(o);e||console.error("No user logged in");var t=this.description,r=this.url;this.description="",this.url="",this.$apollo.mutate({mutation:T,variables:{description:t,url:r,postedById:e},update:function(n,e){var t=e.data.createLink,r=n.readQuery({query:D,variables:{first:5,skip:0,orderBy:"createdAt_DESC"}});r.allLinks.push(t),n.writeQuery({query:D,variables:{first:5,skip:0,orderBy:"createdAt_DESC"},data:r})}}).then(function(e){n.$router.push({path:"/"})}).catch(function(e){console.error(e),n.newDesciption=t,n.newURl=r})}}},Q=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"flex flex-column mt3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.description,expression:"description"}],staticClass:"mb2",attrs:{type:"text",placeholder:"A description for the link"},domProps:{value:n.description},on:{input:function(e){e.target.composing||(n.description=e.target.value)}}}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.url,expression:"url"}],staticClass:"mb2",attrs:{type:"text",placeholder:"The URL for the link"},domProps:{value:n.url},on:{input:function(e){e.target.composing||(n.url=e.target.value)}}})]),n._v(" "),t("button",{on:{click:function(e){n.createLink()}}},[n._v("Submit")])])};Q._withStripped=!0;var j={render:Q,staticRenderFns:[]},O=j;var H=t("VU/8")(M,O,!1,null,null,null);H.options.__file="src/components/CreateLink.vue";var z=H.exports,G=t("Dd8w"),K=t.n(G),W=t("Gu7T"),Y=t.n(W),J={name:"LinkItem",computed:{userId:function(){return this.$root.$data.userId},linkNumber:function(){return this.$route.path.includes("new")?(this.pageNumber-1)*this.linksPerPage+(this.index+1):this.index+1}},data:function(){return{linksPerPage:5}},props:["link","index","pageNumber"],methods:{voteForLink:function(){var n=this,e=localStorage.getItem(o);if(this.link.votes.map(function(n){return n.user.id}).includes(e))console.error("User ("+e+") already voted for this link.");else{var t=this.link.id;this.$apollo.mutate({mutation:R,variables:{userId:e,linkId:t},update:function(e,r){var i=r.data.createVote;n.updateStoreAfterVote(e,i,t)}})}},updateStoreAfterVote:function(n,e,t){var r=n.readQuery({query:D});r.allLinks.find(function(n){return n.id===t}).votes=e.link.votes,n.writeQuery({query:D,data:r})},timeDifferenceForDate:function(n){return function(n,e){var t=n-e;return t<2e4?"just now":t<6e4?"less than 1 min ago":t<36e5?Math.round(t/6e4)+" min ago":t<864e5?Math.round(t/36e5)+" h ago":t<2592e6?Math.round(t/864e5)+" days ago":t<31536e6?Math.round(t/2592e6)+" mo ago":Math.round(t/31536e6)+" years ago"}((new Date).getTime(),new Date(n).getTime())}}},Z=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"flex mt2 items-start"},[t("div",{staticClass:"flex items-center"},[t("span",{staticClass:"gray"},[n._v(n._s(n.linkNumber)+".")]),n._v(" "),n.userId?t("div",{staticClass:"ml1 gray f11 upvote",on:{click:function(e){n.voteForLink()}}},[n._v("▲")]):n._e()]),n._v(" "),t("div",{staticClass:"ml1"},[t("a",{staticClass:"link",attrs:{href:n.link.url}},[n._v(n._s(n.link.description)+" ("+n._s(n.link.url)+")")]),n._v(" "),t("div",{staticClass:"f6 lh-copy gray"},[n._v("\n      "+n._s(n.link.votes.length)+" votes | by "+n._s(n.link.postedBy?n.link.postedBy.name:"Unknown")+" "+n._s(n.timeDifferenceForDate(n.link.createdAt))+"\n    ")])])])};Z._withStripped=!0;var X={render:Z,staticRenderFns:[]},nn=X;var en=!1,tn=t("VU/8")(J,nn,!1,function(n){en||t("nyjD")},"data-v-9a7b5846",null);tn.options.__file="src/components/LinkItem.vue";var rn=tn.exports,an=t("M4fF"),on=t.n(an),sn={name:"LinkList",data:function(){return{allLinks:[],loading:0,count:0}},components:{LinkItem:rn},apollo:{allLinks:{query:D,subscribeToMore:[{document:F,updateQuery:function(n,e){var t=[e.subscriptionData.data.Link.node].concat(Y()(n.allLinks));return K()({},n,{allLinks:t.slice(0,5)})}},{document:q,updateQuery:function(n,e){var t=e.subscriptionData,r=n.allLinks.findIndex(function(n){return n.id===t.data.Vote.node.link.id}),i=t.data.Vote.node.link,a=n.allLinks.slice();a[r]=i;return K()({},n,{allLinks:a})}}],variables:function(){var n=parseInt(this.$route.params.page,10),e=this.$route.path.includes("new");return{first:e?5:100,skip:e?5*(n-1):0,orderBy:e?"createdAt_DESC":null}},update:function(n){return this.count=n._allLinksMeta.count,n.allLinks}}},methods:{getLinksToRender:function(n){if(n)return this.$apollo.queries.allLinks;var e=this.$apollo.queries.allLinks.slice();return e.sort(function(n,e){return e.votes.length-n.votes.length}),e},nextPage:function(){var n=parseInt(this.$route.params.page,10);if(n<this.count/5){var e=n+1;this.$router.push({path:"/new/"+e})}},previousPage:function(){var n=parseInt(this.$route.params.page,10);if(n>1){var e=n-1;this.$router.push({path:"/new/"+e})}}},computed:{orderedLinks:function(){return this.$route.path.includes("top")?on.a.orderBy(this.allLinks,"votes.length").reverse():this.allLinks},isFirstPage:function(){return"1"===this.$route.params.page},isNewPage:function(){return this.$route.path.includes("new")},pageNumber:function(n){return parseInt(this.$route.params.page,10)},morePages:function(){return parseInt(this.$route.params.page,10)<this.count/5}}},ln=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",[n.loading?t("h4",[n._v("Loading ...")]):n._e(),n._v(" "),n._l(n.orderedLinks,function(e,r){return t("link-item",{key:e.id,attrs:{link:e,index:r,pageNumber:n.pageNumber}})})],2),n._v(" "),n.isNewPage?t("div",[t("button",{directives:[{name:"show",rawName:"v-show",value:!n.isFirstPage,expression:"!isFirstPage"}],on:{click:function(e){n.previousPage()}}},[n._v("Previous")]),n._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:n.morePages,expression:"morePages"}],on:{click:function(e){n.nextPage()}}},[n._v("Next")])]):n._e()])};ln._withStripped=!0;var un={render:ln,staticRenderFns:[]},dn=un;var cn=t("VU/8")(sn,dn,!1,null,null,null);cn.options.__file="src/components/LinkList.vue";var pn=cn.exports,mn={name:"AppLogin",data:function(){return{email:"",login:!0,name:"",password:""}},methods:{confirm:function(){var n=this,e=this.$data,t=e.name,r=e.email,i=e.password;this.login?this.$apollo.mutate({mutation:N,variables:{email:r,password:i}}).then(function(e){var t=e.data.authenticateUser.id,r=e.data.authenticateUser.token;n.saveUserData(t,r)}).catch(function(n){console.error("login error: ",n)}):this.$apollo.mutate({mutation:P,variables:{name:t,email:r,password:i}}).then(function(e){console.log("create user result: ",e);var t=e.data.signupUser.id,r=e.data.signupUser.token;n.saveUserData(t,r)}).catch(function(n){console.error("create user error: ",n)}),this.$router.push({path:"/"})},saveUserData:function(n,e){localStorage.setItem(o,n),localStorage.setItem(s,e),this.$root.$data.userId=localStorage.getItem(o)}}},vn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h4",{staticClass:"mv3"},[n._v(n._s(n.login?"Login":" Signup"))]),n._v(" "),t("div",{staticClass:"flex flex-column"},[t("input",{directives:[{name:"show",rawName:"v-show",value:!n.login,expression:"!login"},{name:"model",rawName:"v-model",value:n.name,expression:"name"}],attrs:{type:"text",placeholder:"Your Name"},domProps:{value:n.name},on:{input:function(e){e.target.composing||(n.name=e.target.value)}}}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.email,expression:"email"}],attrs:{type:"text",placeholder:"Your email address"},domProps:{value:n.email},on:{input:function(e){e.target.composing||(n.email=e.target.value)}}}),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:n.password},on:{input:function(e){e.target.composing||(n.password=e.target.value)}}})]),n._v(" "),t("div",{staticClass:"flex mt3"},[t("div",{staticClass:"pointer mr2 button",on:{click:function(e){n.confirm()}}},[n._v("\n      "+n._s(n.login?"login":"create account")+"\n    ")]),n._v(" "),t("div",{staticClass:"pointer button",on:{click:function(e){n.login=!n.login}}},[n._v("\n      "+n._s(n.login?"need to create an account?":"already have an account?")+"\n    ")])])])};vn._withStripped=!0;var An={render:vn,staticRenderFns:[]},fn=An;var hn=t("VU/8")(mn,fn,!1,null,null,null);hn.options.__file="src/components/AppLogin.vue";var kn=hn.exports,gn={name:"Search",data:function(){return{allLinks:[],searchText:""}},apollo:{allLinks:{query:V,variables:function(){return{searchText:this.searchText}},skip:function(){return!this.searchText}}},components:{LinkItem:rn}},_n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",[n._v("\n    Search\n    "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.searchText,expression:"searchText"}],attrs:{type:"text"},domProps:{value:n.searchText},on:{input:function(e){e.target.composing||(n.searchText=e.target.value)}}})]),n._v(" "),n._l(n.allLinks,function(n,e){return t("link-item",{key:n.id,attrs:{link:n,index:e}})})],2)};_n._withStripped=!0;var yn={render:_n,staticRenderFns:[]},wn=yn;var $n=t("VU/8")(gn,wn,!1,null,null,null);$n.options.__file="src/components/Search.vue";var Cn=$n.exports;i.a.use(_.a);var xn=new _.a({routes:[{path:"/",redirect:"/new/1"},{path:"/create",component:z},{path:"/login",component:kn},{path:"/new/:page",component:pn},{path:"/search",component:Cn},{path:"/top",component:pn}]}),In=t("rp1p"),bn=t("+dIz"),Ln=(t("fRwX"),t("uiq3")),En=t("Z6Fn"),Sn=t("+zi7");i.a.config.productionTip=!1;var Bn=new In.HttpLink({uri:"https://api.graph.cool/simple/v1/cjaq2lk9p3obh0170gwl9ugsb"}),Un=new Ln.ApolloLink(function(n,e){var t=localStorage.getItem(s);return t=t?"Bearer "+t:null,n.setContext({headers:{authorization:t}}),e(n)}),Dn=new En.a({uri:"wss://subscriptions.us-west-2.graph.cool/v1/cjaq2lk9p3obh0170gwl9ugsb",options:{reconnect:!0,connectionParams:{authToken:localStorage.getItem(s)}}}),Tn=Ln.ApolloLink.split(function(n){var e=n.query,t=Object(Sn.i)(e),r=t.kind,i=t.operation;return"OperationDefinition"===r&&"subscription"===i},Dn,Un.concat(Bn)),Pn=new r.a({link:Tn,cache:(new bn.InMemoryCache).restore(window.__APOLLO_STATE__),connectToDevTools:!0});i.a.use(a.a);var Nn=new a.a({defaultClient:Pn,defaultOptions:{$loadingKey:"loading"}}),Rn=localStorage.getItem(o);new i.a({el:"#app",apolloProvider:Nn,router:xn,data:{userId:Rn},render:function(n){return n(g)}})},gsQW:function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"\n.upvote[data-v-9a7b5846] {\n  cursor: pointer;\n}\n.link[data-v-9a7b5846] {\n  text-decoration: none;\n  color: black;\n}\n","",{version:3,sources:["/Users/janzheng/Desktop/projects/_lessons/vue-apollo/hackernews-vue-apollo/src/components/src/components/LinkItem.vue"],names:[],mappings:";AAgFA;EACA,gBAAA;CACA;AAEA;EACA,sBAAA;EACA,aAAA;CACA",file:"LinkItem.vue",sourcesContent:["<template>\n  <div class='flex mt2 items-start'>\n    <div class='flex items-center'>\n      <span class='gray'>{{linkNumber}}.</span>\n      <div v-if='userId' class='ml1 gray f11 upvote' @click='voteForLink()'>▲</div>\n    </div>\n    <div class='ml1'>\n      <a :href='link.url' class='link'>{{link.description}} ({{link.url}})</a>\n      <div class='f6 lh-copy gray'>\n        {{link.votes.length}} votes | by {{link.postedBy ? link.postedBy.name : 'Unknown'}} {{timeDifferenceForDate(link.createdAt)}}\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  import { timeDifferenceForDate } from '../utils'\n  import { ALL_LINKS_QUERY, CREATE_VOTE_MUTATION } from '../constants/graphql'\n  import { GC_USER_ID, LINKS_PER_PAGE } from '../constants/settings'\n\n  export default {\n    name: 'LinkItem',\n    computed: {\n      userId () {\n        return this.$root.$data.userId\n      },\n      linkNumber () {\n        if (this.$route.path.includes('new')) {\n          return (this.pageNumber - 1) * this.linksPerPage + (this.index + 1)\n        } else {\n          return this.index + 1\n        }\n      }\n    },\n    data() {\n      return {\n        linksPerPage: LINKS_PER_PAGE\n      }\n    },\n    props: ['link', 'index', 'pageNumber'],\n    methods: {\n      voteForLink () {\n        const userId = localStorage.getItem(GC_USER_ID)\n        const voterIds = this.link.votes.map(vote => vote.user.id)\n        if (voterIds.includes(userId)) {\n          console.error(`User (${userId}) already voted for this link.`)\n          return\n        }\n        const linkId = this.link.id\n        this.$apollo.mutate({\n          mutation: CREATE_VOTE_MUTATION,\n          variables: {\n            userId,\n            linkId \n          },\n          update: (store, { data: {createVote } }) => {\n              this.updateStoreAfterVote(store, createVote, linkId)\n          }\n        })\n      },\n      updateStoreAfterVote (store, createVote, linkId) {\n        const data = store.readQuery({\n          query: ALL_LINKS_QUERY\n        })\n        const votedLink = data.allLinks.find(link => link.id === linkId)\n        votedLink.votes = createVote.link.votes \n\n        store.writeQuery({ query: ALL_LINKS_QUERY, data})\n      },\n      timeDifferenceForDate\n    }\n  }\n<\/script>\n\n\n\n\n\n\n\n<style scoped>\n  .upvote {\n    cursor: pointer;\n  }\n\n  .link {\n    text-decoration: none;\n    color: black;\n  }\n</style>\n\n\n"],sourceRoot:""}])},nyjD:function(n,e,t){var r=t("gsQW");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t("rjj0")("05e44e56",r,!1)},"z/+d":function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: Verdana, Geneva, sans-serif;\n}\ninput {\n  max-width: 500px;\n}\n.gray {\n  color: #828282;\n}\n.orange {\n  background-color: #ff6600;\n}\n.background-gray {\n  background-color: rgb(246,246,239);\n}\n.f11 {\n  font-size: 11px;\n}\n.w85 {\n  width: 85%;\n}\n.button {\n  font-family: monospace;\n  font-size: 10pt;\n  color: black;\n  background-color: buttonface;\n  text-align: center;\n  padding: 2px 6px 3px;\n  border-width: 2px;\n  border-style: outset;\n  border-color: buttonface;\n  cursor: pointer;\n  max-width: 250px;\n}\n","",{version:3,sources:["/Users/janzheng/Desktop/projects/_lessons/vue-apollo/hackernews-vue-apollo/src/src/App.vue"],names:[],mappings:";AA0BA;EACA,UAAA;EACA,WAAA;EACA,yCAAA;CACA;AAEA;EACA,iBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,0BAAA;CACA;AAEA;EACA,mCAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,uBAAA;EACA,gBAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;CACA",file:"App.vue",sourcesContent:['\n<template>\n  <div id="app">\n    <div class="center w85">\n      <app-header></app-header>\n      <div class="ph3 pv1 background-gray">\n        <router-view></router-view>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  import AppHeader from \'./components/AppHeader\'\n\n  export default {\n    name: \'app\',\n    components: {\n      AppHeader\n    }\n  }\n<\/script>\n\n\n\n\n<style>\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Verdana, Geneva, sans-serif;\n  }\n\n  input {\n    max-width: 500px;\n  }\n\n  .gray {\n    color: #828282;\n  }\n\n  .orange {\n    background-color: #ff6600;\n  }\n\n  .background-gray {\n    background-color: rgb(246,246,239);\n  }\n\n  .f11 {\n    font-size: 11px;\n  }\n\n  .w85 {\n    width: 85%;\n  }\n\n  .button {\n    font-family: monospace;\n    font-size: 10pt;\n    color: black;\n    background-color: buttonface;\n    text-align: center;\n    padding: 2px 6px 3px;\n    border-width: 2px;\n    border-style: outset;\n    border-color: buttonface;\n    cursor: pointer;\n    max-width: 250px;\n  }\n</style>'],sourceRoot:""}])}},["NHnr"]);
//# sourceMappingURL=app.2c42f2bc14d4f59f13d6.js.map