import React, { useState } from 'react';
import axios from 'axios';
import { useHistory ,Link} from 'react-router-dom';
export default function Register() {
	let i;
	const [name, setname] = useState('');
	const [uname, setuname] = useState('');
	const [pwd1, setpwd1] = useState('');
	const [pwd2, setpwd2] = useState('');
	const [pwd3, setpwd3] = useState('');
	const [cpwd, setcpwd] = useState('');
	const [email, setemail] = useState('');
	const [nameErr, setNameErr] = useState(false);
	const [unameErr, setunameErr] = useState(false);
	const [pwdErr1, setpwdErr1] = useState(false);
	const [pwdErr2, setpwdErr2] = useState(false);
	const [pwdErr3, setpwdErr3] = useState(false);
	const [cpwdErr, setcpwdErr] = useState(false);
	const [emailErr, setemailErr] = useState(false);

	function RegisterHandle(e) {
		if (
			!name ||
			uname.length < 6 ||
			pwd1.length < 6 ||
			(cpwd !== pwd1 && !email)
		) {
			alert('enter correct values');
		}
		e.preventDefault();
	}
	function nameHandler(e) {
		let item = e.target.value;
		if (item.length < 1) {
			setNameErr(true);
		} else {
			setNameErr(false);
		}
		setname(item);
	}
	function unameHandler(e) {
		let item = e.target.value;

		if (item.length < 6) {
			setunameErr(true);
		} else {
			setunameErr(false);
		}
		setuname(item);
	}
	function pwdHandler(e) {
		let item = e.target.value;
		const n = /[0-9]/;
		i = e.target.value;
		if (item.length < 6) {
			setpwdErr1(true);
		} else {
			setpwdErr1(false);
		}
		if (!item.includes('@') && !item.includes('_')) {
			setpwdErr2(true);
		} else {
			setpwdErr2(false);
		}
		if (!n.test(pwd1)) {
			setpwdErr3(true);
		} else {
			setpwdErr3(false);
		}
		setpwd1(item);
		setpwd2(item);
		setpwd3(item);
	}
	function cpwdHandler(e) {
		let item = e.target.value;
		if (item !== pwd1) {
			setcpwdErr(true);
		} else {
			setcpwdErr(false);
		}
		setcpwd(item);
	}
	function emailHandler(e) {
		let item = e.target.value;
		const k = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
		if (!k.test(email)) {
			setemailErr(true);
		} else {
			setemailErr(false);
		}
		setemail(item);
	}

	const history = useHistory();
	const [user, manageUser] = useState({
		name: '',
		email: '',
		username: '',
		password: '',
		rePassword: '',
	});

	const manageData = (e) => {
		const { name, value } = e.target;
		manageUser({
			...user,
			[name]: value,
		});
	};
  
  function nameOnClick(e) {
		nameHandler(e);
		manageData(e);
	}

  function emailOnClick(e) {
		emailHandler(e);
		manageData(e);
	}

  function unameOnClick(e) {
		unameHandler(e);
		manageData(e);
	}

	function pwdOnClick(e) {
		pwdHandler(e);
		manageData(e);
	}

  function cpwdOnClick(e) {
		cpwdHandler(e);
		manageData(e);
	}


	const SignUp = () => {
		const { name, email, username, password, rePassword } = user;
		if (name && email && password && username && password === rePassword) {
			axios.post('http://localhost:5000/User/Register', user).then((res) => {
				alert(res.data.message);
				history.push('/login');
			});
		} else {
			alert('invlid input');
		}
	};

	return (
		<div className="login-page">
			<div className="form">
				<form
					className="register-form"
					method="post"
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						type="text"
						name="name"
						value={user.name}
						placeholder="Enter name"
						onChange={nameOnClick}
					/>
					{nameErr ? (
						<p style={{ color: 'red', fontSize: '14px' }}> Required </p>
					) : (
						''
					)}
					<input
						type="email"
						name="email"
						value={user.email}
						placeholder="Email"
						onChange={emailOnClick}
					/>
					{emailErr ? (
						<p style={{ color: 'red', fontSize: '14px' }}>
							{' '}
							Not valid(Use format abc213@xyz.com){' '}
						</p>
					) : (
						''
					)}
					<input
						type="text"
						name="username"
						value={user.username}
						placeholder="Enter Username"
						onChange={unameOnClick}
					/>
					{unameErr ? (
						<p style={{ color: 'red', fontSize: '14px' }}>
							{' '}
							User name must be greater then 6{' '}
						</p>
					) : (
						''
					)}
					<input
						type="password"
						name="password"
						value={user.password}
						placeholder="Enter Password"
						onChange={pwdOnClick}
					/>
					{pwdErr1 ? (
						<p style={{ color: 'red', fontSize: '14px' }}>
							{' '}
							Password must be greater then 6{' '}
						</p>
					) : (
						''
					)}
					{pwdErr2 ? (
						<p style={{ color: 'red', fontSize: '14px' }}>
							{' '}
							Password must contains special character(@ or _){' '}
						</p>
					) : (
						''
					)}
					{pwdErr3 ? (
						<p style={{ color: 'red', fontSize: '14px' }}>
							{' '}
							Password must contains numeric value{' '}
						</p>
					) : (
						''
					)}
					<input
						type="password"
						name="rePassword"
						value={user.rePassword}
						placeholder="Enter Confirm Password"
						onChange={cpwdOnClick}
					/>
					{cpwdErr ? (
						<p style={{ color: 'red', fontSize: '14px' }}> Not matched </p>
					) : (
						''
					)}
					<button onClick={SignUp}>Signup</button>
					<p className="message">Already have an account? </p> <Link to='/login'>Login</Link>
				</form>
			</div>
		</div>
	);
}