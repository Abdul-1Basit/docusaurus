import React from "react";
import { AiOutlineArrowRight, AiOutlineMenu } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

import { colorOne } from "../components/constants";
import pg from "../../static/img/page.png";
import logo from "../../static/img/mb.png";
import rightBigImg from "../../static/img/hero.png";
import builder from "../../static/img/builders.png";
import second from "../../static/img/node-operators.png";
import third from "../../static/img/tokens.png";
import fourth from "../../static/img/learn.png";
//    "../../contents/Images/hero.png";
import { BsDiscord } from "react-icons/bs";
import { SiElement } from "react-icons/si";
import SlidingPanel from "react-sliding-side-panel";
import {
	AiOutlineSearch,
	AiFillCaretDown,
	AiFillCaretUp,
} from "react-icons/ai";

import {
	FaTelegramPlane,
	FaTwitter,
	FaYoutube,
	FaGithub,
} from "react-icons/fa";

export default function HomeLanding() {
	const [showDropDown, setShowDropDown] = React.useState(false);
	const navigationItems = [
		"Home",
		"Builders",
		"Node Operators",
		"Tokens",
		"Learn",
		"Events",
	];
	const [width, setWindowWidth] = React.useState(0);
	React.useEffect(() => {
		updateDimensions();

		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);
	const updateDimensions = () => {
		const width = window.innerWidth;
		setWindowWidth(width);
	};

	return (
		<div
			className="flex w-full h-full flex-col"
			style={{ minHeight: "100vh", height: "100%", width: "100%" }}
		>
			<Header {...{ showDropDown, setShowDropDown, navigationItems, width }} />
			<div
				className="lg:hidden xl:hidden md:flex sm:flex xs:flex"
				style={{
					zindex: 150,
					position: "fixed",
					//	background: "red",
					width: "100%",
					height: "100%",
					minHeight: "100vh",
					backgroundColor: "#fff",
					maxWidth: 250,
					display: width > 700 ? "none" : showDropDown ? "flex" : "none",
				}}
			>
				<div style={{ width: "100%", maxWidth: 250, height: "100%" }}>
					<div
						className="flex flex-col items-start justify-between bg-[#171e43]"
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "space-between",
							backgroundColor: "#171e43",
						}}
					>
						<img
							src={logo}
							className="w-[50px] h-[50px] mt-[30px] ml-[30px]"
							style={{
								objectFit: "cover",
								width: 50,
								height: 50,
								marginTop: 30,
								marginLeft: 30,
							}}
						/>

						<div
							className="flex items-center justify-between pt-[10px] pl-[15px]"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingTop: 10,
								paddingLeft: 15,
							}}
						>
							<p
								className="not-italic text-lg text-[#f9f9fa] text-left"
								style={{ fontSize: 18, color: "#f9f9fa", textAlign: "left" }}
							>
								Moonbeam Docs
							</p>
						</div>
					</div>
					<div
						className="flex flex-col h-full bg-[#fff] w-full"
						style={{
							display: "flex",
							flexDirection: "column",
							height: "100%",
							backgroundColor: "#fff",
							width: "100%",
						}}
					>
						{navigationItems.map((item, index) => {
							return (
								<div
									className="flex flex-row items-center justify-between px-[15px] py-[13px]"
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between",
										paddingLeft: 15,
										paddingRight: 15,
										paadingTop: 13,
										paddingBottom: 13,
										borderBottom:
											index !== navigationItems.length - 1
												? "2px solid #f3f3f3"
												: 0,
										cursor: "pointer",
									}}
								>
									<span
										key={index}
										className="not-italic text-[#171e43] font-normal text-sm hover:underline "
									>
										{item}{" "}
									</span>
									{index !== navigationItems.length - 1 && index !== 0 ? (
										<FiChevronRight style={{ fontSize: 23 }} />
									) : (
										<></>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Documentation {...{ width }} />
			<BottomCards {...{ width }} />
			<br />
			<br />
			<br />
			<Footer {...{ width }} />
		</div>
	);
}
export function Documentation(props) {
	const [activeColor, setActiveColor] = React.useState(colorOne);
	return (
		<div
			className="flex items-start justify-between flex-row h-full w-full pt-[40px]
			xl:px-44
			lg:px-44
			md:px-6
			xs:px-6
			sm:px-6
			"
			style={{
				height: "100%",
				width: "100%",
				paddingTop: 40,
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "flex-start",
				paddingLeft: props.width > 700 ? 160 : 24,
				paddingRight: props.width > 700 ? 160 : 24,
			}}
		>
			<div
				className="flex flex-col w-full 
			
				xl:pr-[50px]
				lg:pr-[50px]
				md:pr-[0px]
				sm:pr-[0px]
				xs:pr-[0px]
				"
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					paddingRight: 50,
				}}
			>
				<span
					className="text-left text-3xl mb-4"
					style={{ textAlign: "left", fontSize: "30px", marginBottom: 18 }}
				>
					Moonbeam Network Resources & Documentation
				</span>
				<br /> <br />
				<span
					className="text-left mb-4 text-lg"
					style={{ textAlign: "left", fontSize: "18px", marginBottom: 18 }}
				>
					Moonbeam combines the best of both worlds: the familiar and
					easy-to-use tooling of Ethereum and the scalable, interoperable
					architecture of Polkadot.
				</span>
				<br /> <br />
				<span
					className="text-left mb-4 text-lg"
					style={{ textAlign: "left", fontSize: "18px", marginBottom: 18 }}
				>
					Dive into the tools, integrations, and comprehensive tutorials to
					start using and building on Moonbeam.
				</span>
				<br /> <br />
				<br />
				<div
					className="flex flex-row items-center justify-between w-full max-w-xs"
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						maxWidth: "320px",
					}}
				>
					<button
						className="flex items-center justify-between rounded-[4px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] border-[2px]"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							borderRadius: 4,
							paddingTop: 5,
							paddingBottom: 5,
							paddingLeft: 15,
							paddingRight: 15,
							border: `2px solid ${activeColor}`,
							backgroundColor: activeColor,
							borderColor: activeColor,
						}}
					>
						<span
							className="text-base font-semibold"
							style={{ fontWeight: "600", fontSize: 16, color: "#fff" }}
						>
							Start Building
						</span>
						<AiOutlineArrowRight style={{ color: "#fff", fontSize: 22 }} />
					</button>
					<button
						className="flex items-center justify-between rounded-[4px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] border-[2px]"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							borderRadius: 4,
							paddingTop: 5,
							paddingBottom: 5,
							paddingLeft: 15,
							paddingRight: 15,
							border: `2px solid ${activeColor}`,
							backgroundColor: "#fff",
							//borderColor: activeColor,
						}}
					>
						<span
							className="text-base font-semibold"
							style={{ color: activeColor, fontSize: 16, fontWeight: "600" }}
						>
							Bug Bounty
						</span>
						<AiOutlineArrowRight
							style={{ color: activeColor, fontSize: 22.5 }}
						/>
					</button>
				</div>
				<br />
				<br />
				<span
					className="text-left text-2xl"
					style={{ textAlign: "left", fontSize: 24 }}
				>
					Quick References
				</span>
				<br />
				<div
					className="flex flex-row items-center justify-start mt-3"
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-start",
						marginTop: 12,
					}}
				>
					<span
						className="bg-[#d3d3d3] rounded-[4px] px-[10px] py-[7px] text-[#808080] font-bold mr-3 text-sm"
						style={{
							backgroundColor: "#d3d3d3",
							borderRadius: 4,
							paddingLeft: 10,
							paddingRight: 10,
							paddingTop: 7,
							paddingBottom: 7,
							color: "#808080",
							fontWeight: "700",
							marginRight: 12,
							fontSize: 14,
						}}
					>
						Moonbeam vs Ethereum
					</span>
					<span
						className="bg-[#d3d3d3] rounded-[4px] px-[10px] py-[7px] text-[#808080] font-bold mr-3 text-sm"
						style={{
							backgroundColor: "#d3d3d3",
							borderRadius: 4,
							paddingLeft: 10,
							paddingRight: 10,
							paddingTop: 7,
							paddingBottom: 7,
							color: "#808080",
							fontWeight: "700",
							marginRight: 12,
							fontSize: 14,
						}}
					>
						Canonical Contracts
					</span>
					<span
						className="bg-[#d3d3d3] rounded-[4px] px-[10px] py-[7px] text-[#808080] font-bold mr-3 text-sm"
						style={{
							backgroundColor: "#d3d3d3",
							borderRadius: 4,
							paddingLeft: 10,
							paddingRight: 10,
							paddingTop: 7,
							paddingBottom: 7,
							color: "#808080",
							fontWeight: "700",
							marginRight: 12,
							fontSize: 14,
						}}
					>
						Network Endpoints
					</span>
				</div>
			</div>
			<div
				className="w-full max-w-[600px]
				xl:flex
				lg:flex
				md:hidden
				xs:hidden
				sm:hidden
			"
				style={{
					width: "100%",
					maxWidth: 600,
					display: props.width > 700 ? "flex" : "none",
				}}
			>
				<img
					src={rightBigImg}
					alt="right Image"
					style={{
						objectFit: "cover",
						// height: 450,
						// width: "100%",
						// maxWidth: 650,
					}}
				/>
			</div>
		</div>
	);
}
export function BottomCards(props) {
	const listOfCards = [
		{
			topLogo: builder,
			title: "Building on Moonbeam",
			description:
				"Learn how to build a new application or deploy existing Solidity/Vyper smart contracts to Moonbeam, Moonriver, or the Moonbase Alpha TestNet.",
			bottomLinks: [
				"How to get your own API endpoint for Moonbeam-based networks",
				"How to use Ethereum tools to send transactions & deploy contracts",
			],
		},
		{
			topLogo: second,
			title: "Operating a Node",
			description:
				"Everything you need to know about running a node on Moonbeam and Moonriver, how to become a collator, and more.",
			bottomLinks: [
				"How to set up a Moonbeam - based node",
				"Learn about collator requirements and how to spin up a collator node",
			],
		},
		{
			topLogo: third,
			title: "Using Your MOVR & GLMR Tokens",
			description:
				"A series of guides showing you how and where you can use your MOVR and GLMR tokens with wallets/DApps or earn rewards through staking.",
			bottomLinks: [
				"How to connect MetaMask to Moonbeam-based networks",
				"How to stake (delegate) a collator",
			],
		},
		{
			topLogo: fourth,
			title: "Learning About Moonbeam",
			description:
				"Dive into the Moonbeam ecosystem and learn what makes this approach to Ethereum compatability so compelling.",
			bottomLinks: [
				"Moonbeam network overview",
				"Explore the DApp directory",
				"Moonbeam's upcoming events",
			],
		},
	];
	return (
		<div
			className="flex  items-center justify-between mt-9
		xl:flex-row
		xl:px-44
		lg:flex-row
		lg:px-44
		md:flex-col
		md:px-6
		xs:flex-col
		xs:px-6
		sm:flex-col
		sm:px-6

		"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				marginTop: 36,
				paddingLeft: props.width > 700 ? 160 : 0,
				paddingRight: props.width > 700 ? 160 : 0,
				flexDirection: props.width > 700 ? "row" : "column",
			}}
		>
			{listOfCards.map((item, index) => {
				return (
					<div
						className="flex border-[2px] flex-col items-start rounded px-4 m-1 h-[380px] py-4 w-full
					xl:max-w-sm
		lg:max-w-sm
		md:max-w-full
		xs:max-w-full
		sm:max-w-full
					"
						style={{
							display: "flex",
							border: "2px solid #d3d3d3",
							flexDirection: "column",
							alignItems: "flex-start",
							borderRadius: 4,
							paddingLeft: 16,
							paddingRight: 16,
							margin: 4,
							height: 380,
							paddingTop: 16,
							paddingBottom: 16,
							width: "100%",
							maxWidth: props.width > 700 ? 384 : "100%",
						}}
					>
						<img src={item.topLogo} />
						<span
							className={"text-left text-xl font-normal"}
							style={{
								paddingBottom: index === 2 ? 16 : 44,
								textAlign: "left",
								fontWeight: "400",
								fontSize: 20,
							}}
						>
							{item.title}
						</span>
						<span
							className="text-left text-sm"
							style={{
								fontSize: 14,
								textAlign: "left",
								paddingTop: index === 2 ? 25 : 0,
							}}
						>
							{item.description}
						</span>
						<button
							className="flex items-center justify-between"
							style={{
								marginTop: index === 3 ? 16 : 16,
								marginBottom: 16,
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<span
								className="text-base font-semibold"
								style={{ color: "#42adbb", fontSize: 16, fontWeight: 600 }}
							>
								Learn More
							</span>
							{"  "}
							<AiOutlineArrowRight style={{ color: "#42adbb", fontSize: 20 }} />
						</button>
						<div
							className="flex flex-col"
							style={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<span
								className="text-left text-[11.5px] font-bold pb-2"
								style={{
									textAlign: "left",
									fontSize: 11.5,
									fontWeight: "700",
									paddingBottom: 8,
								}}
							>
								IN THIS SECTION
							</span>
							{item.bottomLinks.map((innerItem, innerIndex) => {
								return (
									<div
										className="flex flex-row items-start justify-start pb-1"
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "flex-start",
											justifyContent: "flex-start",
											paddingBottom: 4,
										}}
									>
										<img src={pg} alt={index + "image logo" + innerIndex} />
										<span
											className="text-left pl-1 text-[11px]"
											style={{
												color: "#42adbb",
												lineHeight: "14px",
												fontSize: 11,
												paddingLeft: 4,
												textAlign: "left",
											}}
										>
											{innerItem}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
export function Footer(props) {
	return (
		<div
			className="w-full bg-[#10142d] pt-[3px] pb-[10px] flex justify-between
		    xl:px-44
			xl:items-center
			xl:flex-row
			lg:px-44
			lg:items-center
			lg:flex-row
			md:px-6
			md:items-start
			md:flex-col
			xs:flex-col
			xs:items-start
			xs:px-6
			sm:flex-col
			sm:items-start
			sm:px-6
			"
			style={{
				width: "100%",
				paddingTop: 3,
				paddingBottom: 10,
				backgroundColor: "#10142d",
				display: "flex",
				alignItems: props.width > 700 ? "center" : "flex-start",
				flexDirection: props.width > 700 ? "row" : "column",
				justifyContent: "space-between",
				paddingLeft: props.width > 700 ? 160 : 24,
				paddingRight: props.width > 700 ? 160 : 24,
			}}
		>
			<div
				className="flex flex-col items-start justify-between "
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "space-between",
				}}
			>
				<span
					className="not-italic text-[14px] text-white"
					style={{ fontSize: 14, color: "#fff" }}
				>
					Connect with us
				</span>

				<div
					className="flex flex-row items-center justify-between pt-[10px] pl-1"
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "flex-start",
						justifyContent: "space-between",
						paddingTop: 10,
						paddingLeft: 4,
					}}
				>
					<BsDiscord style={{ color: "#b8b9c0", marginRight: 17 }} />
					<SiElement style={{ color: "#b8b9c0", marginRight: 17 }} />

					<FaTelegramPlane style={{ color: "#b8b9c0", marginRight: 17 }} />
					<FaTwitter style={{ color: "#b8b9c0", marginRight: 17 }} />

					<FaYoutube style={{ color: "#b8b9c0", marginRight: 17 }} />
					<FaGithub style={{ color: "#b8b9c0", marginRight: 17 }} />
				</div>
			</div>
			<div
				className="flex flex-col items-center justify-between "
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<span
					className="not-italic text-sm text-[#a8b1ad]"
					style={{ fontSize: 14, color: "#a8b1ad" }}
				>
					© 2021 PureStake, Inc. All Rights Reserved.
				</span>
				<div
					className="flex flex-row items-center justify-between"
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<span
						className="not-italic text-sm text-[#a8b1ad]"
						style={{ fontSize: 14, color: "#a8b1ad" }}
					>
						Privacy Policy
					</span>
					&nbsp;&nbsp;
					<span
						className="not-italic text-sm text-[#a8b1ad]"
						style={{ fontSize: 14, color: "#a8b1ad" }}
					>
						Terms of Use
					</span>
				</div>
			</div>
			<div
				className="flex flex-col items-start justify-between "
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "space-between",
				}}
			>
				<span
					className="not-italic text-sm text-white pt-1"
					style={{ fontSize: 14, color: "#fff", paddingTop: 4 }}
				>
					Moonbuilders Newsletter
				</span>
				<div
					className="flex flex-row items-center justify-between"
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<input
						className="px-[5px] h-7 text-[12px]"
						placeholder="noreply@gmail.com*"
						style={{
							backgroundColor: "#171e43",
							paddingLeft: 5,
							paddingRight: 5,
							fontSize: 12,
							height: 28,
							color: "#7793af",
						}}
					/>
					<input
						type={"button"}
						className="bg-[#adaeb6] font-[#44454d] px-[5px] h-7 text-[12px]"
						value={"Send Me Updates"}
						style={{
							fontSize: 12,
							backgroundColor: "#adaeb6",
							color: "#44454d",
							paddingLeft: 5,
							paddingRight: 5,
							height: 28,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
export function Header(props) {
	const [showMenu, setShowMenu] = React.useState(false);
	//const [openPanel, setOpenPanel] = React.useState(false);
	const dropDownItem = ["English", "中文"];

	return (
		<div
			className="w-full bg-[#171e43] pt-[5px] pb-[10px] flex flex-col items-center justify-between
			xl:px-40
			lg:px-40 
			md:px-20 
			xs:px-0
			sm:px-0
		"
			style={{
				backgroundColor: "#171e43",
				paddingTop: 5,
				paddingBottom: 10,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				width: "100%",
				paddingLeft: props.width > 700 ? 160 : 0,
				paddingRight: props.width > 700 ? 160 : 0,
			}}
		>
			<div
				className="flex-row items-center justify-between w-full flex
			"
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				{/* <div
					style={{
						display: showDropDown ? "flex" : "none",
						flexDirection: "column",
						position: "absolute",
						backgroundColor: "#171e43",
						left: 0,
						top: 35,
						width: "100px",
						zIndex: 1,
						borderRadius: 4,
						//paddingLeft: 10,
					}}
				>
					{navigationItems.map((item, index) => {
						return (
							<button
								key={index}
								style={{
									color: "#f9f9fa",
									backgroundColor: "transparent",
									paddingRight: 10,
									paddingLeft: 5,
									paddingTop: 5,
									paddingBottom: 5,
									textAlign: "left",
								}}
							>
								{item}
							</button>
						);
					})}
				</div> */}
				<div
					className="
			lg:hidden 
			xl:hidden
			md:hidden 
			xs:flex
			xs:w-[120px]
			xs:left-1
			sm:left-1	
			sm:w-[120px]
			sm:flex "
					style={{
						display: props.width > 700 ? "none" : "flex",
						left: 4,
						width: 120,
					}}
					onClick={() => {
						props.setShowDropDown(!props.showDropDown);
					}}
				>
					<AiOutlineMenu style={{ color: "#fff", fontSize: 20 }} />
				</div>
				<div
					className="flex-row items-center justify-between
					xl:flex
						lg:flex 
						md:flex
						sm:hidden
						xs:hidden
				"
					style={{
						display: props.width > 700 ? "flex" : "none",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<img src={logo} className="w-[25px] h-[25px]" />

					<span
						className="not-italic text-xl text-[#f9f9fa] pl-9
						xl:flex
						lg:flex 
						md:flex
						sm:flex
						xs:hidden
						"
						style={{
							display: props.width > 700 ? "flex" : "none",
							fontSize: "1.25rem",
							color: "#f9f9fa",
							paddingLeft: "2.25rem",
						}}
					>
						Moonbeam Docs
					</span>
				</div>
				<div
					className="flex flex-row items-center justify-between w-full 
						xl:max-w-lg
						lg:max-w-lg
						md:max-w-lg
						xs:max-w-lg
						sm:max-w-lg
				"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<button
						//	className="rounded-[4px] py-[2.5px] px-[12px]"
						style={{
							border: "2px solid #449fa7",
							color: "#449fa7",
							paddingTop: 2.5,
							paddingBottom: 2.5,
							paddingLeft: 12,
							paddingRight: 12,
							borderRadius: 4,
						}}
					>
						Connect MetaMask
					</button>
					<div
						className="flex flex-row items-center justify-start bg-[#111632] pl-4 py-[5px] ml-[10px] mr-[12px]
						xl:flex
						lg:flex 
						md:hidden
						xs:hidden
						sm:hidden
						"
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "flex-start",
							backgroundColor: "#111632",
							paddingLeft: "1rem",
							paddingTop: 5,
							paddingBottom: 5,
							marginLeft: 10,
							marginRight: 12,
						}}
					>
						<AiOutlineSearch
							style={{ color: "#f9f9fa", fontWeight: "bold", fontSize: 22 }}
						/>
						<input
							style={{
								outline: "none",
								border: 0,
								backgroundColor: "transparent",
								color: "#f9f9fa",
								fontSize: 15,
								letterSpacing: 0.25,
								paddingLeft: 5,
								fontWeight: "bold",
							}}
							value="Search"
						/>
					</div>
					<div
						className="lg:hidden 
				xl:hidden
				md:flex 
				xs:flex
				sm:flex"
						style={{ display: props.width > 700 ? "none" : "flex" }}
					>
						<AiOutlineSearch
							style={{ color: "#f9f9fa", fontWeight: "bold", fontSize: 22 }}
						/>
					</div>
					<div
						className="flex flex-col items-center justify-between"
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<button
							className="flex flex-row items-center justify-between"
							style={{
								color: "#f9f9fa",
								backgroundColor: "transparent",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								width: 70,
							}}
							onClick={() => {
								setShowMenu(!showMenu);
							}}
						>
							English{" "}
							{showMenu ? (
								<AiFillCaretUp style={{ color: "#f9f9fa" }} />
							) : (
								<AiFillCaretDown style={{ color: "#f9f9fa" }} />
							)}
						</button>
						<div
							style={{
								display: showMenu ? "flex" : "none",
								flexDirection: "column",
								position: "absolute",
								backgroundColor: "#171e43",
								right: 120,
								top: 35,
								width: "100px",
								zIndex: 1,
								borderRadius: 4,
								//paddingLeft: 10,
							}}
						>
							{dropDownItem.map((item, index) => {
								return (
									<button
										style={{
											color: "#f9f9fa",
											backgroundColor: "transparent",
											paddingRight: 10,
											paddingLeft: 10,
											paddingTop: 5,
											paddingBottom: 5,
										}}
									>
										{item}
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div
				className="flex-row items-start justify-start w-full pt-[10px] pb-[6px]
										xl:flex
										lg:flex 
										md:hidden
										xs:hidden
										sm:hidden
				
			"
				style={{
					flexDirection: "row",
					alignItems: "flex-start",
					justifyContent: "flex-start",
					width: "100%",
					paddingTop: 10,
					paddingBottom: 6,
					display: props.width > 700 ? "flex" : "none",
				}}
			>
				{props.navigationItems.map((item, index) => {
					return (
						<span
							className="not-italic font-semibold"
							key={index}
							style={{
								color: "#9fa1b1",
								fontSize: 15,
								paddingRight: 20,
							}}
						>
							{item}
						</span>
					);
				})}
			</div>
		</div>
	);
}
