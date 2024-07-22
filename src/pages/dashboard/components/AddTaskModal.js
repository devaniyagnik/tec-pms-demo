import React from 'react';
import { Modal, Input, Select, DatePicker, Avatar, Typography, Divider, Button, List, Row, Col, Tabs } from 'antd';
import { PlusOutlined, UserOutlined, TagsOutlined, CalendarOutlined, StarOutlined, ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import modelround from '../../../assest/images/modelround.svg';
import './addTaskModel.css'
const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Title, Text } = Typography;

const AddTaskModal = ({ visible, onClose }) => {
   const comments = [
      {
         author: 'Dominik Lamkani',
         content: 'It\'s more likely that people reading your blog will opt in with their email addresses if you give them something highly relevant in return. Ditch that too-general lead magnet and create "content upgrades" for your highest-traffic articles.',
         datetime: 'Yesterday at 10:48 AM',
      },
      {
         author: 'Sophie Wenner',
         content: 'That\'s great advice, @ekulp89 👍',
         datetime: '4min ago',
      },
   ];

   return (
      <Modal
         // visible={visible}
         open={visible}
         onCancel={onClose}
         footer={null}
         width={1300}
         centered
      >
         <div className='d-flex flex-wrap' style={{ height: '100%' }}>
            <div className="col-12 col-lg-6" style={{ padding: '20px', borderRight : '1px solid #E2E8F0' }}>
               <Title level={2} className='mb-2'>Acne Inc. Tasks ✨</Title>
               <Text>In → Acne Inc. Project</Text>
               <TextArea placeholder="Write a description..." rows={5} style={{ marginTop: 20 }} />


               <div className='d-flex align-items-center my-3'>
                  <div className="col-4 d-flex align-items-center">
                     <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="16" height="16" viewBox="0 0 16 16">
                           <path id="Shape" d="M0,8a8,8,0,1,1,8,8A8.024,8.024,0,0,1,0,8Z" fill="#94a3b8" />
                        </svg>

                     </Col>
                     <Col>
                        <Text style={{ color: '#475569' }}>Status</Text>
                     </Col>
                  </div>
                  <div className="col-8">
                     <Col>
                        <Select className='status-css w-100' defaultValue="Completed">
                           <Option value="Completed"> Completed</Option>
                           <Option value="In Progress">In Progress</Option>
                           <Option value="Pending">Pending</Option>
                        </Select>
                     </Col>
                  </div>
               </div>

               <div className='d-flex align-items-center my-3'>
                  <div className="col-4 d-flex align-items-center">
                     <Col>
                        <svg id="Group_112" className='me-2' data-name="Group 112" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path id="Path_170" data-name="Path 170" d="M0,0H24V24H0Z" fill="none" />
                           <path id="Path_171" data-name="Path 171" d="M9,7,5,7A4,4,0,1,0,9,3,4,4,0,0,0,5,7" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                           <path id="Path_172" data-name="Path 172" d="M3,21V19a4,4,0,0,1,4-4h4a4,4,0,0,1,4,4v2" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                           <path id="Path_173" data-name="Path 173" d="M16,3.13a4,4,0,0,1,0,7.75" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                           <path id="Path_174" data-name="Path 174" d="M21,21V19a4,4,0,0,0-3-3.85" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                        </svg>

                     </Col>
                     <Col>
                        <Text style={{ color: '#475569' }}>Members</Text>
                     </Col>
                  </div>
                  <div className="col-8">
                     <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px',
                        border: '1px solid #d9d9d9',
                        borderRadius: '4px'
                     }}>
                        <Avatar.Group maxCount={5} size={'small'}>
                           <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
                           <Avatar src="https://randomuser.me/api/portraits/women/2.jpg" />
                           <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" />
                           <Avatar src="https://randomuser.me/api/portraits/women/4.jpg" />
                        </Avatar.Group>
                        <svg xmlns="http://www.w3.org/2000/svg" className='ms-auto' width="16" height="16" viewBox="0 0 16 16">
                           <path id="Path" d="M15,7H9V1A.945.945,0,0,0,8,0,.945.945,0,0,0,7,1V7H1A.945.945,0,0,0,0,8,.945.945,0,0,0,1,9H7v6a.945.945,0,0,0,1,1,.945.945,0,0,0,1-1V9h6a.945.945,0,0,0,1-1A.945.945,0,0,0,15,7Z" fill="#6366f1" />
                        </svg>

                     </div>
                  </div>
               </div>

               <div className='d-flex align-items-center my-3'>
                  <div className="col-4 d-flex align-items-center">
                     <Col>
                        <svg id="Group_113" data-name="Group 113" className='me-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path id="Path_175" data-name="Path 175" d="M0,0H24V24H0Z" fill="none" />
                           <path id="Path_176" data-name="Path 176" d="M18,7V21l-6-4L6,21V7a4,4,0,0,1,4-4h4A4,4,0,0,1,18,7Z" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                        </svg>

                     </Col>
                     <Col>
                        <Text style={{ color: '#475569' }}>Tags</Text>
                     </Col>
                  </div>
                  <div className="col-8">
                     <Col>
                        <Select mode="multiple" className='tag-css' style={{ width: '100%' }} defaultValue={['Option 1', 'Option 2']}>
                           <Option value="Option 1">Option 1</Option>
                           <Option value="Option 2">Option 2</Option>
                        </Select>
                     </Col>
                  </div>
               </div>
               <div className='d-flex align-items-center my-3'>
                  <div className="col-4 d-flex align-items-center">
                     <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="25.5" height="25.5" viewBox="0 0 25.5 25.5">
                           <g id="roadmap-timeline-svgrepo-com" transform="translate(-2.25 -2.25)">
                              <rect id="Rectangle_19" data-name="Rectangle 19" width="8" height="5" rx="2" transform="translate(3 3)" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                              <rect id="Rectangle_20" data-name="Rectangle 20" width="11" height="5" rx="2" transform="translate(3 22)" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                              <rect id="Rectangle_21" data-name="Rectangle 21" width="19" height="6" rx="2" transform="translate(8 12)" fill="none" stroke="#64748b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                           </g>
                        </svg>

                     </Col>
                     <Col>
                        <Text style={{ color: '#475569' }}>Timeline</Text>
                     </Col>
                  </div>
                  <div className="col-8">
                     <RangePicker style={{ width: '100%' }} />
                  </div>
               </div>
               <div className='d-flex align-items-center my-3'>
                  <div className="col-4 d-flex align-items-center">
                     <Col>
                        <svg id="Group_115" className='me-2' data-name="Group 115" xmlns="http://www.w3.org/2000/svg" width="19.483" height="29.74" viewBox="0 0 19.483 29.74">
                           <path id="Path_180" data-name="Path 180" d="M0,0H19.483V29.74H0Z" fill="none" />
                           <path id="Path_184" data-name="Path 184" d="M11,6H25.527" transform="translate(-7.658 3.475)" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                           <path id="Path_185" data-name="Path 185" d="M11,12H25.527" transform="translate(-7.658 2.87)" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                           <path id="Path_186" data-name="Path 186" d="M11,18H25.527" transform="translate(-7.658 2.265)" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                        </svg>

                     </Col>
                     <Col>
                        <Text style={{ color: '#475569' }}>Priority</Text>
                     </Col>
                  </div>
                  <div className="col-8">
                     <Select defaultValue="Medium" className='priority-css' style={{ width: '100%' }}>
                        <Option value="High">High</Option>
                        <Option value="Medium">Medium</Option>
                        <Option value="Low">Low</Option>
                     </Select>
                  </div>
               </div>
               <div className='d-flex align-items-center my-3'>
                  <div className="col-4 d-flex align-items-center">
                     <Col>
                        <svg id="Group_114" className='me-2' data-name="Group 114" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                           <path id="Path_177" data-name="Path 177" d="M0,0H24V24H0Z" fill="none" />
                           <path id="Path_178" data-name="Path 178" d="M19.933,13.041A7.975,7.975,0,1,1,19.433,9" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                           <path id="Path_179" data-name="Path 179" d="M20,4V9H15" fill="none" stroke="#597e8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                        </svg>

                     </Col>
                     <Col>
                        <Text style={{ color: '#475569' }}>Last Update</Text>
                     </Col>
                  </div>
                  <div className="col-8">
                     <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px',
                        border: '1px solid #d9d9d9',
                        borderRadius: '4px',
                        backgroundColor: '#E8EDF3'
                     }}>
                        <Avatar.Group maxCount={5} size={'small'} className='me-2'>
                           <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
                        </Avatar.Group>


                        <Text style={{ display: 'block' }}>1 hour ago</Text>
                     </div>
                  </div>
               </div>
            </div>

            {/* <Divider type="vertical" style={{ height: 'auto' }} /> */}

            <div className="col-12 col-lg-6" style={{ flex: 1, padding: '20px' }}>
               <Tabs activeKey="1" items={[
                  {
                     key: '1',
                     label: (<p className='px-3 text-pink d-flex mb-0'>
                        <svg id="Icon" xmlns="http://www.w3.org/2000/svg" className='me-2' width="20" height="20" viewBox="0 0 20 20">
                           <g id="Bg">
                              <rect id="Rectangle" width="20" height="20" fill="none" />
                           </g>
                           <g id="single-04" transform="translate(3 2)">
                              <path id="Shape" d="M0,16V13.26A3.941,3.941,0,0,1,2.69,9.527,5.015,5.015,0,0,0,4.832,8.352,3.991,3.991,0,0,1,3,5V4a4,4,0,0,1,8,0V5A3.99,3.99,0,0,1,9.168,8.352a5.02,5.02,0,0,0,2.143,1.175A3.943,3.943,0,0,1,14,13.26V16Z" fill="#eb6a9b" />
                           </g>
                        </svg>
                        Web Sprint</p>),
                  },
                  {
                     key: '2',
                     label: (<p className='px-3 text-gray d-flex mb-0'>
                        <svg id="Icon" xmlns="http://www.w3.org/2000/svg" className='me-2' width="20" height="20" viewBox="0 0 20 20">
                           <g id="Bg">
                              <rect id="Rectangle" width="20" height="20" fill="none" />
                           </g>
                           <g id="edit-78" transform="translate(2 2)">
                              <path id="Path" d="M8.3.3l-8,8a.967.967,0,0,0,0,1.4A.908.908,0,0,0,1,10a.908.908,0,0,0,.7-.3l8-8A.967.967,0,0,0,9.7.3.967.967,0,0,0,8.3.3Z" transform="translate(6)" fill="#94a3b8" />
                              <path id="Path-2" data-name="Path" d="M15,7a.945.945,0,0,0-1,1A6,6,0,1,1,8,2,.945.945,0,0,0,9,1,.945.945,0,0,0,8,0a8,8,0,1,0,8,8A.945.945,0,0,0,15,7Z" fill="#94a3b8" />
                           </g>
                        </svg>

                        Web Sprint</p>),
                  },
                  {
                     key: '3',
                     label: (<p className='px-3 text-gray d-flex mb-0'>
                        <svg id="Icon" xmlns="http://www.w3.org/2000/svg" className='me-2' width="20" height="20" viewBox="0 0 20 20">
                           <g id="Bg">
                              <rect id="Rectangle" width="20" height="20" fill="none" />
                           </g>
                           <g id="split-37" transform="translate(2 2)">
                              <path id="Path" d="M3.414,2H6V0H1A1,1,0,0,0,0,1V6H2V3.414l5,5V16H9V7.586Z" fill="#94a3b8" />
                              <path id="Path-2" data-name="Path" d="M5.586,0h-5V2H3.172L0,5.172,1.414,6.586,4.586,3.414V6h2V1A1,1,0,0,0,5.586,0Z" transform="translate(9.414)" fill="#94a3b8" />
                           </g>
                        </svg>

                        Web Sprint</p>),
                  },]} />

               <div className='p-3' style={{ border: '1px solid #E2E8F0' }}>
                  <div className='d-flex align-items-center'>
                     <Avatar size={'large'} src="https://randomuser.me/api/portraits/men/1.jpg" className='me-2' />
                     <input placeholder='Write an update...' type="text" className='form-control' style={{ width: '100%', backgroundColor: '#F1F5F9', paddingLeft: '30px' }} />
                  </div>
                  <div className='d-flex justify-content-between mt-3'>
                     <div className='d-flex align-items-center'>
                        <p className='px-3 ps-0 align-items-center d-flex mb-0'>
                           <svg id="movie-2" xmlns="http://www.w3.org/2000/svg" className='me-2' width="16" height="16" viewBox="0 0 16 16">
                              <rect id="Rectangle" width="2" height="16" fill="#eb6a9b" />
                              <rect id="Rectangle-2" data-name="Rectangle" width="2" height="16" transform="translate(14)" fill="#eb6a9b" />
                              <path id="Shape" d="M1,7A.945.945,0,0,1,0,6V1A.944.944,0,0,1,1,0H7A.945.945,0,0,1,8,1V6A.945.945,0,0,1,7,7Z" transform="translate(4)" fill="#eb6a9b" />
                              <path id="Shape-2" data-name="Shape" d="M1,7A.945.945,0,0,1,0,6V1A.944.944,0,0,1,1,0H7A.945.945,0,0,1,8,1V6A.945.945,0,0,1,7,7Z" transform="translate(4 9)" fill="#eb6a9b" />
                           </svg>

                           Media</p>
                        <p className='px-3 align-items-center d-flex mb-0'>
                           <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="15.953" height="12" viewBox="0 0 15.953 12">
                              <path id="Path" d="M6.974,12a1.193,1.193,0,0,1-.9-.5l-2.2-3.7-2.1,2.8a1.075,1.075,0,0,1-1.4.2,1.075,1.075,0,0,1-.2-1.4l3-4a.975.975,0,0,1,.9-.4,1.02,1.02,0,0,1,.8.5l2,3.3,3.3-8.1a.773.773,0,0,1,.8-.7.875.875,0,0,1,.9.6l4,8a1.053,1.053,0,0,1-.4,1.3,1.053,1.053,0,0,1-1.3-.4l-3-6-3.2,7.9A1.1,1.1,0,0,1,6.974,12Z" transform="translate(0)" fill="#eb6a9b" />
                           </svg>

                           GIF</p>
                        <p className='px-3 align-items-center d-flex mb-0'>
                           <svg id="panda" xmlns="http://www.w3.org/2000/svg" className='me-2' width="16" height="16.002" viewBox="0 0 16 16.002">
                              <path id="Path" d="M4.087,0H.5A.5.5,0,0,0,.147.854L1.94,2.646a.5.5,0,0,0,.707,0L4.44.854A.5.5,0,0,0,4.087,0Z" transform="translate(5.706 10.002)" fill="#eb6a9b" />
                              <path id="Shape" d="M.934,13.3C-.64,11.02.015,7.869,1.192,5.373A2.963,2.963,0,0,1,0,3,3,3,0,0,1,3,0,2.956,2.956,0,0,1,5.028.808a5.865,5.865,0,0,1,5.943,0A2.959,2.959,0,0,1,13,0a3,3,0,0,1,3,3,2.965,2.965,0,0,1-1.193,2.372c1.177,2.5,1.832,5.646.257,7.926C13.828,15.092,11.45,16,8,16S2.173,15.092.934,13.3Z" fill="#eb6a9b" />
                              <path id="Path-2" data-name="Path" d="M3.161,1.05A1.191,1.191,0,0,0,2,0C.916,0,.01,1.6,0,2.306S.474,3.789,1.071,3.789s1.122-.535,1.658-1.3S3.274,1.493,3.161,1.05Z" transform="translate(3.509 5.569)" fill="#eb6a9b" />
                              <path id="Path-3" data-name="Path" d="M1.221,0A1.191,1.191,0,0,0,.058,1.05c-.113.443-.1.68.432,1.441s1.06,1.3,1.658,1.3,1.081-.772,1.071-1.483S2.3,0,1.221,0Z" transform="translate(9.273 5.569)" fill="#eb6a9b" />
                           </svg>

                           Emoji</p>
                     </div>
                     <Button style={{ background: "#E1296F", color: "#ffffff" }} iconPosition="left" >
                        Update
                     </Button>
                  </div>

               </div>

               <div className='p-3 mt-3' style={{ border: '1px solid #E2E8F0' }}>
                  <div>
                     <div className='d-flex align-items-center mb-2'>
                        <Avatar size={'large'} src="https://randomuser.me/api/portraits/men/1.jpg" className='me-2' />
                        <div>
                           <Text strong>Dominik Lamakani</Text>
                           <p className='m-0 text-gray'>Yesterday at 10:48 AM</p>
                        </div>
                     </div>
                     <Text>It's more likely that people reading your blog will opt in with their email addresses if you give them something highly relevant in return. Ditch that too-general lead magnet and create "content upgrades" for your highest-traffic articles.</Text>
                     <div className='d-flex align-items-center mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="16" height="14.001" viewBox="0 0 16 14.001">
                           <path id="Shape" d="M1.318,7.683A4.5,4.5,0,0,1,4.5,0,4.383,4.383,0,0,1,8,1.707,4.376,4.376,0,0,1,11.5,0a4.5,4.5,0,0,1,3.182,7.682L8,14Z" fill="#94a3b8" />
                        </svg>
                        <p className='m-0 text-gray me-3'>4</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="16" height="16" viewBox="0 0 16 16">
                           <path id="Shape" d="M8.6,14H8c-4.4,0-8-3.1-8-7S3.6,0,8,0s8,3.1,8,7a6.511,6.511,0,0,1-2,4.6V16Z" fill="#eb6a9b" />
                        </svg>
                        <p className='m-0 text-pink'>Reply</p>
                     </div>
                  </div>
                  <div className='mt-3 ps-5'>
                     <div className='d-flex align-items-center mb-2'>
                        <Avatar size={'large'} src="https://randomuser.me/api/portraits/men/1.jpg" className='me-2' />
                        <div>
                           <p className='m-0'>Sophie Wenner <span className='text-gray ms-3'>44min</span></p>
                           <Text strong>That’s great advice, <a href="#">@ekuplu89</a> 👏</Text>
                        </div>
                     </div>
                     <div className='d-flex align-items-center mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="16" height="14.001" viewBox="0 0 16 14.001">
                           <path id="Shape" d="M1.318,7.683A4.5,4.5,0,0,1,4.5,0,4.383,4.383,0,0,1,8,1.707,4.376,4.376,0,0,1,11.5,0a4.5,4.5,0,0,1,3.182,7.682L8,14Z" fill="#eb6a9b" />
                        </svg>
                        <p className='m-0 text-gray me-3'>1</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="16" height="16" viewBox="0 0 16 16">
                           <path id="Shape" d="M8.6,14H8c-4.4,0-8-3.1-8-7S3.6,0,8,0s8,3.1,8,7a6.511,6.511,0,0,1-2,4.6V16Z" fill="#94a3b8" />
                        </svg>
                        <p className='m-0 text-gray'>Reply</p>
                     </div>
                  </div>
                  <div className='d-flex align-items-center mt-3'>
                     <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" className='me-2' />
                     <input placeholder='Reply...' type="text" className='form-control' style={{ width: '100%', backgroundColor: '#F1F5F9', paddingLeft: '30px' }} />
                  </div>
               </div>
            </div>
         </div>
      </Modal>
   );
};

export default AddTaskModal;
