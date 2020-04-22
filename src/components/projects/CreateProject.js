import React,{useState} from 'react';
const CreateProject = () => {
  // title,content,email,password
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const onSubmitHandler = e => {
    e.preventDefault();
    // data capture
    const newData = {title,content};
    console.log(newData);
    //reset form field
    setTitle('');
    setContent('');
  }
  return (
    <div className="container">
      <form className="white" onSubmit={onSubmitHandler}>
        <h5 className="grey-text text-darken-3">
          Create New Project
        </h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" 
                  value={title} 
                  onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea className="materialize-textarea"
                    name="content" 
                    id="content"
                    value={content} 
                    onChange={e=>setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateProject;