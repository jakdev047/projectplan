const init = {
  projects:[
    {
      id:1,title:'Project One',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione deleniti corporis laboriosam aspernatur quo laborum libero. Amet accusamus eius ut facilis optio tempore error nulla. Reiciendis laboriosam officia aperiam numquam ipsum, quos unde distinctio eaque tempora sunt enim sit assumenda earum, praesentium voluptates nam ea ipsam aliquid esse! Nesciunt.'
    },
    {
      id:2,title:'Project Two',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione deleniti corporis laboriosam aspernatur quo laborum libero. Amet accusamus eius ut facilis optio tempore error nulla. Reiciendis laboriosam officia aperiam numquam ipsum, quos unde distinctio eaque tempora sunt enim sit assumenda earum, praesentium voluptates nam ea ipsam aliquid esse! Nesciunt.'
    }
  ]
}

const projectReducer = (state=init,action) => {
  switch (action.type) {
    case '':
      return state;
  
    default:
      return state;
  }
}

export default projectReducer;