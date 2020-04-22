import React,{useState} from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectAction';
import { v4 as uuidv4 } from 'uuid';

const CreateProject = ({createProject}) => {
  // title,content,email,password
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    // data capture
    const newData = {id: uuidv4(),title,content};
    if(newData.title === '' && newData.content === '') {
      alert('Please enter Title & Content value')
    }
    else {
      createProject(newData);
      console.log(newData);

      //reset form field
      setTitle('');
      setContent('');
    }
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

export default connect(null,{createProject})(CreateProject);