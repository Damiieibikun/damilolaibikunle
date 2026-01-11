import React, { useEffect, useState } from 'react';
import Projectoptions from './Projectoptions';
import projects from './projectOverview'
import { IoMdArrowDropdown } from "react-icons/io";
import useScreenSize from './Screen';
import Linkto from './Linkto';


const Projects = () => {
  const [selected_project_cat, setSelectedProjectCat] = useState('');
  const [selected_project, setSelectedProject] = useState('');
  const [selected_Index, setSelectedIndex] = useState(null);
  const { isMobile, isNotMobile } = useScreenSize();

  const toggleProject = (projectId) => {
    if (selected_project_cat === projectId) {
      setSelectedProjectCat(''); 
    } else {
      setSelectedProjectCat(projectId); 
    }
  };
  const toggleIndex = (projectIndex) => {
    if (selected_Index === projectIndex) {
      setSelectedIndex(null); 
    } else {
      setSelectedIndex(projectIndex); 
    }
  };

  useEffect(() => { 
    if (isMobile) { isMobile
      setSelectedProject('');
    }
    if (isNotMobile) { isNotMobile
      setSelectedProject('');
    }
  }, [isMobile, isNotMobile]);

  return (
    <div
      id="projects"
      data-aos="fade-in"
      data-aos-duration="700"
      className="mt-10 min-h-screen  w-[90%] mx-auto dark:text-white"
    >
      <div className="hidden lg:flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl tracking-widest text-center">Projects</h1>
          <div className="mt-[40px] flex flex-row justify-center mx-auto text-sm">
          {[
            { id: "1", title: "Front End", category: "frontend" },
            { id: "2", title: "Full Stack", category: "fullstack" },
            { id: "3", title: "Data Science", category: "datascience" },
          ].map(({ id, title, category }) => (
    <div key={id} className="hover:cursor-pointer w-[300px]">
      <div className="flex items-center gap-2">
        <p
          onClick={() => {
            setSelectedProject("");
            toggleProject(id);
          }}
          className={`opacity-50 hover:opacity-100 text-xl p-2 ${selected_project_cat === id ? "opacity-100 border-[3px] border-t-0 border-l-0 border-r-0 border-[#1456ab]" : ""}`}
        >
          {title}
        </p>
        {selected_project_cat === id ? <IoMdArrowDropdown size={30} /> : null}
      </div>

      <ul
        id={id}
        className={`p-2 border-[#1456ab] border-r-0 border-b-0 border-t-0 max-h-0 overflow-hidden transition-all duration-700 ease-in-out text-[17px] leading-10
          ${selected_project_cat === id ? "max-h-[500px] border-[3px]" : ""}`}
      >
        {projects?.filter((project) => project.category === category).map(({ name }, idx) => (
          <li key={idx} className="relative group mb-1" onClick={() => setSelectedProject(name)}>
            {name}
            <span className={`${selected_project === name ? "h-[4px]" : ""} absolute bottom-[-1px] left-0 h-0 w-full bg-[#1456ab] group-hover:h-[4px] transition-all duration-200`}></span>
          </li>
        ))}
      </ul>
    </div>
  ))}
  <div>
    <ul className="justify-items-start justify-self-start">
      <li className="relative group text-xl p-2">
        <a href="https://github.com/Damiieibikun?tab=repositories" target="_blank">
          View All projects on GitHub
        </a>
        <span className="absolute bottom-[-1px] left-0 h-0 w-full bg-[#1456ab] group-hover:h-[4px] transition-all duration-200"></span>
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>
      <div className='lg:hidden flex flex-col justify-center'>
        <h1 className="pt-[100px] text-6xl tracking-widest text-center">
          Projects
        </h1>

        <select onChange={(e)=> {setSelectedProject(e.target.value); setSelectedIndex(null)}} name="" id="" className='text-center mt-[50px] p-3 dark:bg-[#10141E] dark:text-white border rounded-sm'>
          <option value="">All Projects</option>
          <option value="frontend">Front End Projects</option>
          <option value="fullstack">Full Stack Projects</option>
          <option value="datascience">Data Science Projects</option>         
        </select>
        </div>
      <div data-aos="flip-right" 
    data-aos-duration="700"
    className='grid-cols-3 gap-4 justify-items-center hidden lg:grid'>
      {
               selected_project !== '' ? projects?.filter((project)=>project.name === selected_project)
               .map(({technologies, applications})=> applications.map((app, idx)=>
              { 
                return (
                <Projectoptions
                key={idx}       
                title={app?.title}
                technologies={technologies}
                images={app?.images}
                sitelink={app?.sitelink}
                descp={app?.descp}
                linktitle={app?.linktitle}
                originalsite={app?.originalsite}
                originallinktitle={app?.originallinktitle}
                allImages={app?.allImages}
                video={app?.video}
                /> 
              )}
            )) :      
                  projects?.map(({technologies, applications}, ix)=> applications.map((app, idx)=>
                  { 
                    return ( <Projectoptions
                    key={`${ix}${idx}`}
                    title={app?.title}
                    technologies={technologies}
                    images={app?.images}
                    sitelink={app?.sitelink}
                    descp={app.descp}
                    linktitle={app?.linktitle}
                    originalsite={app?.originalsite}
                    originallinktitle={app?.originallinktitle}
                    allImages={app?.allImages}
                    video={app?.video}
                    /> )
                   
                  }        
                ))   
      }
      </div>
      <div className='lg:hidden'>
      <div data-aos="flip-right" 
    data-aos-duration="700"
    className='grid grid-cols-1 sm:grid-cols-2 gap-1.5 justify-items-center'>
      {
                selected_project !== '' ? projects?.filter((project)=>project.category === selected_project)
                .map(({technologies, applications})=> applications.map((app, idx)=>
               { 
                 return (
                 <Projectoptions
                 key={idx}       
                 title={app?.title}
                 technologies={technologies}
                 images={app?.images}
                 sitelink={app?.sitelink}
                 descp={app?.descp}
                 linktitle={app?.linktitle}
                 originalsite={app?.originalsite}
                 originallinktitle={app?.originallinktitle}
                 allImages={app?.allImages}
                 video={app?.video}
                 /> 
               )}
             )) :      
                  projects?.map(({technologies, applications}, ix)=> applications.map((app, idx)=>
                  { 
                    return ( <Projectoptions
                    key={`${ix}${idx}`}
                    title={app?.title}
                    technologies={technologies}
                    images={app?.images}
                    sitelink={app?.sitelink}
                    descp={app.descp}
                    linktitle={app?.linktitle}
                    originalsite={app?.originalsite}
                    originallinktitle={app?.originallinktitle}
                    allImages={app?.allImages}
                    video={app?.video}
                    /> )
                   
                  }        
                ))   
      }
      </div>
        <div className='flex justify-center mt-3.5 mb-14'>
        <Linkto
            address={'https://github.com/Damiieibikun?tab=repositories'}
            action={'_blank'}
            caption={'View all projects on github'}
            styles={'text-xl font-bold'}
           />
           
        
        </div>
      
      </div>
     
    </div>
  );
};

export default Projects;