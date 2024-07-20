// import React, { useState } from 'react';
// import { Table, Tag, Space, Avatar, Badge, Collapse } from 'antd';
// import { CaretRightOutlined, CaretDownOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
// import './table.css';
// import DownAero from '../../assest/images/downaero.svg';
// import BlackDownAero from '../../assest/images/downblackaero.svg';
// import BlackUpAero from '../../assest/images/upblackaero.svg';
// const { Column } = Table;
// const { Panel } = Collapse;

// const TaskTable = () => {
//    const [expandedRowKeys, setExpandedRowKeys] = useState([]);
//    const [showTable, setShowTable] = useState(true);

//    const data = [
//       {
//          key: '1',
//          taskName: 'Senior Software Engineer Backend task',
//          status: 'To Do',
//          dueDate: 'Mar 27',
//          priority: 'High',
//          updated: '1 hour ago',
//          comments: 7,
//          assignedTo: [<Avatar key="1" src="https://randomuser.me/api/portraits/men/1.jpg" />, <Avatar key="2" src="https://randomuser.me/api/portraits/women/1.jpg" />],
//          subtasks: [
//             {
//                key: '1-1',
//                taskName: 'Sub task 1',
//                status: 'Complete',
//                dueDate: 'Mar 27',
//                priority: 'High',
//                updated: '1 hour ago',
//                comments: 2,
//                assignedTo: [<Avatar key="3" src="https://randomuser.me/api/portraits/men/2.jpg" />],
//             },
//             {
//                key: '1-2',
//                taskName: 'Sub task 2',
//                status: 'To Do',
//                dueDate: 'Mar 27',
//                priority: 'High',
//                updated: '1 hour ago',
//                comments: 1,
//                assignedTo: [<Avatar key="4" src="https://randomuser.me/api/portraits/women/2.jpg" />],
//             },
//          ],
//       },
//       {
//          key: '2',
//          taskName: 'Main Software task',
//          status: 'To Do',
//          dueDate: 'Mar 10',
//          priority: 'Low',
//          updated: '2 days ago',
//          comments: 4,
//          assignedTo: [<Avatar key="5" src="https://randomuser.me/api/portraits/men/3.jpg" />, <Avatar key="6" src="https://randomuser.me/api/portraits/women/3.jpg" />],
//       },
//       {
//          key: '3',
//          taskName: 'Main Software task',
//          status: 'To Do',
//          dueDate: 'Mar 10',
//          priority: 'Low',
//          updated: '2 days ago',
//          comments: 4,
//          assignedTo: [<Avatar key="7" src="https://randomuser.me/api/portraits/men/4.jpg" />, <Avatar key="8" src="https://randomuser.me/api/portraits/women/4.jpg" />],
//       },
//    ];

//    const onExpand = (expanded, record) => {
//       setExpandedRowKeys(expanded ? [record.key] : []);
//    };

//    const toggleTableVisibility = () => {
//       setShowTable(!showTable);
//    };

//    return (
//       <>
//          <div style={{ display: 'flex', color: "#ffffff", padding: "8px", alignItems: 'center', height: "53px", background: "#E1296F", borderRadius: "10px 10px 0px 0px" }}>
//             <div onClick={toggleTableVisibility} style={{ cursor: 'pointer',marginRight: "8px", }}>
//                {showTable ? <img src={DownAero} /> : <UpOutlined /> }
//             </div>
//             <h4 style={{ fontSize: "16px" }}>To Do &nbsp; <Badge count={data.length} offset={[0, 0]} style={{ backgroundColor: '#FFFFFF',color:'#000000' }} /></h4>
//          </div>
//          <Collapse activeKey={showTable ? '1' : '0'} ghost>
//             <Panel key="1" showArrow={false}>
//                <Table
//                   dataSource={data}
//                   expandable={{
//                      expandedRowRender: record => (
//                         <Table
//                            dataSource={record.subtasks}
//                            pagination={false}
//                            showHeader={false}
//                         >
//                            <Column title="Task Name" dataIndex="taskName" key="taskName" />
//                            <Column title="Assigned To" dataIndex="assignedTo" key="assignedTo" />
//                            <Column title="Status" dataIndex="status" key="status" />
//                            <Column title="Due Date" dataIndex="dueDate" key="dueDate" />
//                            <Column title="Priority" dataIndex="priority" key="priority" />
//                            <Column title="Date Updated" dataIndex="updated" key="updated" />
//                            <Column title="Comment" dataIndex="comments" key="comments" />
//                         </Table>
//                      ),
//                      expandIcon: ({ expanded, onExpand, record }) =>
//                         expanded ? (
//                            // <CaretDownOutlined onClick={e => onExpand(record, e)} />
//                            <img src={BlackDownAero} onClick={e => onExpand(record, e)}/>
//                         ) : (
//                            // <CaretRightOutlined onClick={e => onExpand(record, e)} />
//                            <img src={BlackUpAero} onClick={e => onExpand(record, e)}/>
//                         ),
//                      expandedRowKeys: expandedRowKeys,
//                      onExpand: onExpand,
//                   }}
//                   pagination={false}
//                   style={{ marginTop: '-8px' }}
//                >
//                   <Column title="Task Name" dataIndex="taskName" key="taskName" />
//                   <Column title="Assigned To" dataIndex="assignedTo" key="assignedTo" />
//                   <Column title="Status" dataIndex="status" key="status" />
//                   <Column title="Due Date" dataIndex="dueDate" key="dueDate" />
//                   <Column title="Priority" dataIndex="priority" key="priority" />
//                   <Column title="Date Updated" dataIndex="updated" key="updated" />
//                   <Column title="Comment" dataIndex="comments" key="comments" />
//                </Table>
//             </Panel>
//          </Collapse>
//       </>
//    );
// };

// export default TaskTable;

import React, { useState } from 'react';
import { Table, Badge, Avatar, Tag, Collapse, Button } from 'antd';
import { CheckCircleOutlined, MenuOutlined, UpOutlined, CalendarOutlined, CommentOutlined } from '@ant-design/icons';
import './table.css';
import DownAero from '../../assest/images/downaero.svg';
import BlackDownAero from '../../assest/images/downblackaero.svg';
import BlackUpAero from '../../assest/images/upblackaero.svg';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

const { Column } = Table;
const { Panel } = Collapse;

const TaskTable = ({name}) => {
   const [expandedRowKeys, setExpandedRowKeys] = useState([]);
   const [showTable, setShowTable] = useState(true);

   const data = [
      {
         key: '1',
         taskName: 'Senior Software Engineer Backend task',
         status: 'To Do',
         dueDate: 'Mar 27',
         priority: 'High',
         updated: '1 hour ago',
         comments: 7,
         assignedTo: [<Avatar key="1" src="https://randomuser.me/api/portraits/men/1.jpg" />, <Avatar key="2" src="https://randomuser.me/api/portraits/women/1.jpg" />],
         subtasks: [
            {
               key: '1-1',
               taskName: 'Sub task 1',
               status: 'Complete',
               dueDate: 'Mar 27',
               priority: 'High',
               updated: '1 hour ago',
               comments: 2,
               assignedTo: [<Avatar key="3" src="https://randomuser.me/api/portraits/men/2.jpg" />],
            },
            {
               key: '1-2',
               taskName: 'Sub task 2',
               status: 'To Do',
               dueDate: 'Mar 27',
               priority: 'High',
               updated: '1 hour ago',
               comments: 1,
               assignedTo: [<Avatar key="4" src="https://randomuser.me/api/portraits/women/2.jpg" />],
            },
         ],
      },
      {
         key: '2',
         taskName: 'Main Software task',
         status: 'Complete',
         dueDate: 'Mar 10',
         priority: 'Low',
         updated: '2 days ago',
         comments: 4,
         assignedTo: [<Avatar key="5" src="https://randomuser.me/api/portraits/men/3.jpg" />, <Avatar key="6" src="https://randomuser.me/api/portraits/women/3.jpg" />],
      },
      {
         key: '3',
         taskName: 'Main Software task',
         status: 'To Do',
         dueDate: 'Mar 10',
         priority: 'Low',
         updated: '2 days ago',
         comments: 4,
         assignedTo: [<Avatar key="7" src="https://randomuser.me/api/portraits/men/4.jpg" />, <Avatar key="8" src="https://randomuser.me/api/portraits/women/4.jpg" />],
      },
   ];

   const onExpand = (expanded, record) => {
      setExpandedRowKeys(expanded ? [record.key] : []);
   };

   const toggleTableVisibility = () => {
      setShowTable(!showTable);
   };

   const renderStatus = (status) => {
      let color = status === 'Complete' ? 'green' : 'magenta';
      // return <Tag color={color}>{status}</Tag>;
      return <Button style={{ width: '100px', background: status === "To Do" ? "#E1296F" : "#00C483", color: "#ffffff" }}>
         {status}
      </Button>;
   };

   const renderDueDate = (dueDate) => {
      let color = dueDate.includes('Mar 27') ? 'green' : 'gold';
      return <span style={{ color }}><CalendarOutlined style={{ color }} /> {dueDate}</span>;
   };

   const renderPriority = (priority) => {
      let color = priority === 'High' ? 'red' : 'green';
      return <MenuOutlined style={{color : color}} />;
   };

   const renderComments = (comments) => {
      return <span><CommentOutlined /> {comments}</span>;
   };

   return (
      <>
         {/* <div style={{ display: 'flex', color: "#ffffff", padding: "8px", alignItems: 'center', height: "53px", background: "#E1296F", borderRadius: "10px 10px 0px 0px" }}>
            <div onClick={toggleTableVisibility} style={{ cursor: 'pointer', marginRight: "8px", }}>
               {showTable ? <img src={DownAero} /> : <UpOutlined />}
            </div>
            <h4 style={{ fontSize: "16px" }}>To Do &nbsp; <Badge count={data.length} offset={[0, 0]} style={{ backgroundColor: '#FFFFFF', color: '#000000' }} /></h4>
         </div> */}
         <Collapse defaultActiveKey={"1"}>
            <Panel header={(
               <div onClick={toggleTableVisibility} style={{ display: 'flex', color: "#ffffff", padding: "8px", alignItems: 'center', height: "53px", background: `${name == "To Do" ? "#E1296F" : "#FFB400"}`, border: `1px solid ${name == "To Do" ? "#E1296F" : "#FFB400"}`, borderRadius: showTable ? '10px 10px 0 0' : '10px' }}>
                  <div style={{ cursor: 'pointer', marginRight: "8px", }}>
                     {showTable ? <img src={DownAero} /> : <img src={DownAero} style={{ transform: 'rotate(180deg)' }} />}
                  </div>
                  <h4 className='mb-0' style={{ fontSize: "16px" }}>{name} &nbsp; <Badge count={data.length} offset={[0, 0]} style={{ backgroundColor: '#FFFFFF', color: '#000000' }} /></h4>
               </div>
            )} key="1" showArrow={false}>
               <Table
                  dataSource={data}
                  expandable={{
                     expandedRowRender: record => (
                        <Table
                           dataSource={record.subtasks}
                           pagination={false}
                           showHeader={false}
                        >
                           <Column width={350} title="Task Name" dataIndex="taskName" key="taskName" render={(name) => {
                              return (
                                 <div className='d-flex align-items-center ps-3'>
                                    <input class="form-check-input me-2 mt-0" type="radio" />
                                    <p className='m-0'>{name}</p>
                                 </div>
                              )
                           }} />
                           <Column width={150} title="Assigned To" dataIndex="assignedTo" key="assignedTo" render={(Avatars) => {
                              return (
                                 <Avatar.Group>
                                    {Avatars.map((avatar, index) => avatar)}
                                 </Avatar.Group>
                              )
                           }} />
                           <Column width={180} title="Status" dataIndex="status" key="status" render={renderStatus} />
                           <Column width={140} title="Due Date" dataIndex="dueDate" key="dueDate" render={renderDueDate} />
                           <Column width={125} title="Priority" dataIndex="priority" key="priority" render={renderPriority} />
                           <Column width={190} title="Date Updated" dataIndex="updated" key="updated" />
                           <Column width={130} title="Comment" dataIndex="comments" key="comments" render={renderComments} />
                           <Column title={(<div className='p-2 rounded-5 text-white d-flex' style={{ backgroundColor: '#E1296F', width : 'fit-content' }}><PlusOutlined /></div>)} dataIndex="other" key="other" render={() => <>
                              <svg id="Icon" xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4">
                                 <g id="menu-dots">
                                    <circle id="Oval" cx="2" cy="2" r="2" transform="translate(6)" fill="#94a3b8" />
                                    <circle id="Oval-2" data-name="Oval" cx="2" cy="2" r="2" fill="#94a3b8" />
                                    <circle id="Oval-3" data-name="Oval" cx="2" cy="2" r="2" transform="translate(12)" fill="#94a3b8" />
                                 </g>
                              </svg>

                           </>} />
                        </Table>
                     ),
                     expandIcon: ({ expanded, onExpand, record }) =>
                        expanded ? (
                           <img src={BlackDownAero} alt="collapse" onClick={e => onExpand(record, e)} />
                        ) : (
                           <img src={BlackUpAero} alt="expand" onClick={e => onExpand(record, e)} />
                        ),
                     expandedRowKeys: expandedRowKeys,
                     onExpand: onExpand,
                  }}
                  pagination={false}
               >
                  <Column width={350} title="Task Name" dataIndex="taskName" key="taskName" render={(name) => {
                     return (
                        <div className='d-flex align-items-center'>
                           <input class="form-check-input me-2 mt-0" type="radio" />
                           <p className='m-0'>{name}</p>
                        </div>
                     )
                  }} />
                  <Column width={150} title="Assigned To" dataIndex="assignedTo" key="assignedTo" render={(Avatars) => {
                     return (
                        <Avatar.Group>
                           {Avatars.map((avatar, index) => avatar)}
                        </Avatar.Group>
                     )
                  }} />
                  <Column width={180} title="Status" dataIndex="status" key="status" render={renderStatus} />
                  <Column width={140} title="Due Date" dataIndex="dueDate" key="dueDate" render={renderDueDate} />
                  <Column width={125} title="Priority" dataIndex="priority" key="priority" render={renderPriority} />
                  <Column width={190} title="Date Updated" dataIndex="updated" key="updated" />
                  <Column width={130} title="Comment" dataIndex="comments" key="comments" render={renderComments} />
                  <Column title={(<div className='p-2 rounded-5 text-white d-flex' style={{ backgroundColor: '#E1296F', width : 'fit-content' }}><PlusOutlined /></div>)} dataIndex="other" key="other" render={() => <>
                     <svg id="Icon" xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4">
                        <g id="menu-dots">
                           <circle id="Oval" cx="2" cy="2" r="2" transform="translate(6)" fill="#94a3b8" />
                           <circle id="Oval-2" data-name="Oval" cx="2" cy="2" r="2" fill="#94a3b8" />
                           <circle id="Oval-3" data-name="Oval" cx="2" cy="2" r="2" transform="translate(12)" fill="#94a3b8" />
                        </g>
                     </svg>

                  </>} />
               </Table>
            </Panel>
         </Collapse>
      </>
   );
};

export default TaskTable;
