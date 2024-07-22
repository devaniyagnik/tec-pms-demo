import { Button } from 'antd'
import React, { useState } from 'react'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import TaskTable from '../../components/table';
import AddTaskModal from './components/AddTaskModal';

const Dashboard = () => {
   const [isModalVisible, setIsModalVisible] = useState(false);

   const closeModal = () => {
      setIsModalVisible(false);
    };

   return (
      <>
         <div>
            <div className='d-flex flex-wrap justify-content-between'>
               <h2 className='' style={{ fontSize: "30px" }}>Acne Inc. Project ✨</h2>
               <div className='d-flex align-items-center'>
                  <div className='position-relative me-3'><input placeholder='Search tasks…' type="text" className='form-control' style={{ width: '240px', paddingLeft: '30px' }} />
                     <SearchOutlined className='position-absolute' style={{ top: '12px', left: '10px', color: '#94A3B8' }} />
                  </div>
                  <div>
                     <Button icon={<PlusOutlined />} style={{ background: "#E1296F", color: "#ffffff" }} iconPosition="left" onClick={() => setIsModalVisible(true)}>
                        Add Task
                     </Button>
                  </div>
               </div>
            </div>
            <div className='d-flex flex-wrap justify-content-between mt-4' style={{ borderBottom: '1px solid #E2E8F0' }}>
               <div className='d-flex'>
                  <p className='px-3 ps-0 text-pink'>View All</p>
                  <p className='px-3 text-gray'>Web Sprint</p>
                  <p className='px-3 text-gray'>Marketing</p>
                  <p className='px-3 text-gray'>Development</p>
               </div>
               <div className='d-flex'>
                  <p className='px-3 text-gray'>Automation</p>
                  <p className='px-3 pe-0 text-gray'>Customize</p>
               </div>
            </div>
            <div className='d-flex mt-3'>
               <button className='btn d-flex align-items-center text-gray text-14 me-3' style={{ border: '1px solid #E2E8F0' }}>
                  <svg id="Shapes" className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
                     <path id="Path" d="M3,2H1A1,1,0,0,1,0,1H0A1,1,0,0,1,1,0H3A1,1,0,0,1,4,1H4A1,1,0,0,1,3,2Z" transform="translate(6 12)" fill="#64748b" />
                     <path id="Path-2" data-name="Path" d="M7,2H1A1,1,0,0,1,0,1H0A1,1,0,0,1,1,0H7A1,1,0,0,1,8,1H8A1,1,0,0,1,7,2Z" transform="translate(4 8)" fill="#64748b" />
                     <path id="Path-3" data-name="Path" d="M11,2H1A1,1,0,0,1,0,1H0A1,1,0,0,1,1,0H11a1,1,0,0,1,1,1h0A1,1,0,0,1,11,2Z" transform="translate(2 4)" fill="#64748b" />
                     <path id="Path-4" data-name="Path" d="M15,2H1A1,1,0,0,1,0,1H0A1,1,0,0,1,1,0H15a1,1,0,0,1,1,1h0A1,1,0,0,1,15,2Z" fill="#64748b" />
                  </svg>

                  Filters
               </button>
               <button className='btn d-flex align-items-center text-gray text-14 me-3' style={{ border: '1px solid #E2E8F0' }}>
                  <svg id="Group_162" className='me-2' data-name="Group 162" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <path id="Path_226" data-name="Path 226" d="M0,0H24V24H0Z" fill="none" />
                     <path id="Path_227" data-name="Path 227" d="M12,4,4,8l8,4,8-4L12,4" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                     <path id="Path_228" data-name="Path 228" d="M4,12l8,4,8-4" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                     <path id="Path_229" data-name="Path 229" d="M4,16l8,4,8-4" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                  </svg>


                  Group
               </button>
               <button className='btn d-flex align-items-center text-gray text-14 me-3' style={{ border: '1px solid #E2E8F0' }}>
                  <svg id="Group_12" className='me-2' data-name="Group 12" xmlns="http://www.w3.org/2000/svg" width="21.356" height="21.356" viewBox="0 0 21.356 21.356">
                     <path id="Path_49" data-name="Path 49" d="M0,0H21.356V21.356H0Z" fill="none" />
                     <path id="Path_50" data-name="Path 50" d="M6,9h5.339" transform="translate(-0.661 -0.991)" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                     <path id="Path_51" data-name="Path 51" d="M4,5H7.559" transform="translate(-0.441 -0.551)" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                     <path id="Path_52" data-name="Path 52" d="M6,5v9.788a.89.89,0,0,0,.89.89h4.449" transform="translate(-0.661 -0.551)" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                     <path id="Path_53" data-name="Path 53" d="M12,7m0,.89A.89.89,0,0,1,12.89,7h5.339a.89.89,0,0,1,.89.89V9.67a.89.89,0,0,1-.89.89H12.89A.89.89,0,0,1,12,9.67Z" transform="translate(-1.322 -0.771)" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                     <path id="Path_54" data-name="Path 54" d="M12,15m0,.89a.89.89,0,0,1,.89-.89h5.339a.89.89,0,0,1,.89.89v1.78a.89.89,0,0,1-.89.89H12.89a.89.89,0,0,1-.89-.89Z" transform="translate(-1.322 -1.652)" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                  </svg>


                  Subtask
               </button>
            </div>
            <div style={{ padding: "18px 0px" }}>
               <TaskTable name="To Do"/>
            </div>
            <div style={{ padding: "18px 0px" }}>
               <TaskTable name="In Progress"/>
            </div>
         </div>
         <AddTaskModal visible={isModalVisible} onClose={closeModal} />
      </>
   )
}

export default Dashboard