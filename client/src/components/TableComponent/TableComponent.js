import { Table, Space } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Guests",
    dataIndex: "guests",
    key: "guests",
  },

  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Theme",
    dataIndex: "theme",
    key: "theme",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Delete </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    date: "22/5/2022",
    guests: 32,
    theme: "New York No. 1 Lake Park",
    time: "8:00 pm",
  },
  {
    key: "2",
    name: "Jim Green",
    date: "22/5/2022",
    guests: 42,
    theme: "London No. 1 Lake Park",
    time: "8:00 pm",
  },
  {
    key: "3",
    name: "Joe Black",
    date: "22/5/2022",
    guests: 32,
    theme: "Sidney No. 1 Lake Park",
    time: "8:00 pm",
  },
];

export default () => <Table columns={columns} dataSource={data} />;
