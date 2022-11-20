const Sequelize = require("sequelize");
const dotenv = require("dotenv").config;
if (dotenv.error) throw dotenv.error;

const env = process.env.NODE_ENV || "development";
const config = require("#src/config/config")[env];

const User = require("./user");
const Post = require("./post");
//const PostLike = require("./postLike");
const Comment = require("./comment");
const Auth = require("./auth");
const AuthForum = require("./authForum");
const Club = require("./club");
const Forum = require("./forum");
const NFT = require("./nft");

const db = {};

console.log("db연결 데이터확인", config);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
//db.PostLike = PostLike;
db.Comment = Comment;
db.Auth = Auth;
db.AuthForum = AuthForum;
db.Club = Club;
db.Forum = Forum;
db.NFT = NFT;

User.init(sequelize);
Post.init(sequelize);
//PostLike.init(sequelize);
Comment.init(sequelize);
Auth.init(sequelize);
AuthForum.init(sequelize);
Club.init(sequelize);
Forum.init(sequelize);
NFT.init(sequelize);

User.associate(db);
Post.associate(db);
PostLike.associate(db);
Comment.associate(db);
Auth.associate(db);
//AuthForum.associate(db);
Club.associate(db);
Forum.associate(db);
NFT.associate(db);

module.exports = db;
