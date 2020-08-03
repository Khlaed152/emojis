(function ($) {
    
    $.fn.emojis = function (options) {
        var settings = {
            "srcFileEmojis": 'images/emojitions',
            "imageExt": 'png',
            "showBtnEmojis": true,
            "autoDirection": true,
            "saveRecentlySent": true,
            "openCategory": 'auto'
        };
        $.extend(settings, options);
        settings.srcFileEmojis = settings.srcFileEmojis.charAt(settings.srcFileEmojis.length - 1) === '/' ? settings.srcFileEmojis : settings.srcFileEmojis + '/';
        settings.imageExt = settings.imageExt.charAt(0) === '.' ? settings.imageExt : '.' + settings.imageExt;
        var vars = {
                "emojisJson": [
                    {
                        "emoji": "😀",
                        "description": "grinning face",
                        "category": "People",
                        "aliases": ["grinning"],
                        "tags": ["smile", "happy"],
                        "unicode": "1f600"
                    },
                    {
                        "emoji": "😃",
                        "description": "smiling face with open mouth",
                        "category": "People",
                        "aliases": ["smiley"],
                        "tags": ["happy", "joy", "haha"],
                        "unicode": "1f603"
                    },
                    {
                        "emoji": "😄",
                        "description": "smiling face with open mouth & smiling eyes",
                        "category": "People",
                        "aliases": ["smile"],
                        "tags": ["happy", "joy", "laugh", "pleased"],
                        "unicode": "1f604"
                    },
                    {
                        "emoji": "😁",
                        "description": "grinning face with smiling eyes",
                        "category": "People",
                        "aliases": ["grin"],
                        "tags": [],
                        "unicode": "1f601"
                    },
                    {
                        "emoji": "😆",
                        "description": "smiling face with open mouth & closed eyes",
                        "category": "People",
                        "aliases": ["laughing", "satisfied"],
                        "tags": ["happy", "haha"],
                        "unicode": "1f606"
                    },
                    {
                        "emoji": "😅",
                        "description": "smiling face with open mouth & cold sweat",
                        "category": "People",
                        "aliases": ["sweat_smile"],
                        "tags": ["hot"],
                        "unicode": "1f605"
                    },
                    {
                        "emoji": "😂",
                        "description": "face with tears of joy",
                        "category": "People",
                        "aliases": ["joy"],
                        "tags": ["tears"],
                        "unicode": "1f602"
                    },
                    {
                        "emoji": "🤣",
                        "description": "rolling on the floor laughing",
                        "category": "People",
                        "aliases": ["rofl"],
                        "tags": ["lol", "laughing"],
                        "unicode": "1f923"
                    },
                    {
                        "emoji": "☺️",
                        "description": "smiling face",
                        "category": "People",
                        "aliases": ["relaxed"],
                        "tags": ["blush", "pleased"],
                        "unicode": "263a"
                    },
                    {
                        "emoji": "😊",
                        "description": "smiling face with smiling eyes",
                        "category": "People",
                        "aliases": ["blush"],
                        "tags": ["proud"],
                        "unicode": "1f60a"
                    },
                    {
                        "emoji": "😇",
                        "description": "smiling face with halo",
                        "category": "People",
                        "aliases": ["innocent"],
                        "tags": ["angel"],
                        "unicode": "1f607"
                    },
                    {
                        "emoji": "🙂",
                        "description": "slightly smiling face",
                        "category": "People",
                        "aliases": ["slightly_smiling_face"],
                        "tags": [],
                        "unicode": "1f642"
                    },
                    {
                        "emoji": "🙃",
                        "description": "upside-down face",
                        "category": "People",
                        "aliases": ["upside_down_face"],
                        "tags": [],
                        "unicode": "1f643"
                    },
                    {
                        "emoji": "😉",
                        "description": "winking face",
                        "category": "People",
                        "aliases": ["wink"],
                        "tags": ["flirt"],
                        "unicode": "1f609"
                    },
                    {
                        "emoji": "😌",
                        "description": "relieved face",
                        "category": "People",
                        "aliases": ["relieved"],
                        "tags": ["whew"],
                        "unicode": "1f60c"
                    },
                    {
                        "emoji": "😍",
                        "description": "smiling face with heart-eyes",
                        "category": "People",
                        "aliases": ["heart_eyes"],
                        "tags": ["love", "crush"],
                        "unicode": "1f60d"
                    },
                    {
                        "emoji": "😘",
                        "description": "face blowing a kiss",
                        "category": "People",
                        "aliases": ["kissing_heart"],
                        "tags": ["flirt"],
                        "unicode": "1f618"
                    },
                    {
                        "emoji": "😗",
                        "description": "kissing face",
                        "category": "People",
                        "aliases": ["kissing"],
                        "tags": [],
                        "unicode": "1f617"
                    },
                    {
                        "emoji": "😙",
                        "description": "kissing face with smiling eyes",
                        "category": "People",
                        "aliases": ["kissing_smiling_eyes"],
                        "tags": [],
                        "unicode": "1f619"
                    },
                    {
                        "emoji": "😚",
                        "description": "kissing face with closed eyes",
                        "category": "People",
                        "aliases": ["kissing_closed_eyes"],
                        "tags": [],
                        "unicode": "1f61a"
                    },
                    {
                        "emoji": "😋",
                        "description": "face savouring delicious food",
                        "category": "People",
                        "aliases": ["yum"],
                        "tags": ["tongue", "lick"],
                        "unicode": "1f60b"
                    },
                    {
                        "emoji": "😜",
                        "description": "face with stuck-out tongue & winking eye",
                        "category": "People",
                        "aliases": ["stuck_out_tongue_winking_eye"],
                        "tags": ["prank", "silly"],
                        "unicode": "1f61c"
                    },
                    {
                        "emoji": "😝",
                        "description": "face with stuck-out tongue & closed eyes",
                        "category": "People",
                        "aliases": ["stuck_out_tongue_closed_eyes"],
                        "tags": ["prank"],
                        "unicode": "1f61d"
                    },
                    {
                        "emoji": "😛",
                        "description": "face with stuck-out tongue",
                        "category": "People",
                        "aliases": ["stuck_out_tongue"],
                        "tags": [],
                        "unicode": "1f61b"
                    },
                    {
                        "emoji": "🤑",
                        "description": "money-mouth face",
                        "category": "People",
                        "aliases": ["money_mouth_face"],
                        "tags": ["rich"],
                        "unicode": "1f911"
                    },
                    {
                        "emoji": "🤗",
                        "description": "hugging face",
                        "category": "People",
                        "aliases": ["hugs"],
                        "tags": [],
                        "unicode": "1f917"
                    },
                    {
                        "emoji": "🤓",
                        "description": "nerd face",
                        "category": "People",
                        "aliases": ["nerd_face"],
                        "tags": ["geek", "glasses"],
                        "unicode": "1f913"
                    },
                    {
                        "emoji": "😎",
                        "description": "smiling face with sunglasses",
                        "category": "People",
                        "aliases": ["sunglasses"],
                        "tags": ["cool"],
                        "unicode": "1f60e"
                    },
                    {
                        "emoji": "🤡",
                        "description": "clown face",
                        "category": "People",
                        "aliases": ["clown_face"],
                        "tags": [],
                        "unicode": "1f921"
                    },
                    {
                        "emoji": "🤠",
                        "description": "cowboy hat face",
                        "category": "People",
                        "aliases": ["cowboy_hat_face"],
                        "tags": [],
                        "unicode": "1f920"
                    },
                    {
                        "emoji": "😏",
                        "description": "smirking face",
                        "category": "People",
                        "aliases": ["smirk"],
                        "tags": ["smug"],
                        "unicode": "1f60f"
                    },
                    {
                        "emoji": "😒",
                        "description": "unamused face",
                        "category": "People",
                        "aliases": ["unamused"],
                        "tags": ["meh"],
                        "unicode": "1f612"
                    },
                    {
                        "emoji": "😞",
                        "description": "disappointed face",
                        "category": "People",
                        "aliases": ["disappointed"],
                        "tags": ["sad"],
                        "unicode": "1f61e"
                    },
                    {
                        "emoji": "😔",
                        "description": "pensive face",
                        "category": "People",
                        "aliases": ["pensive"],
                        "tags": [],
                        "unicode": "1f614"
                    },
                    {
                        "emoji": "😟",
                        "description": "worried face",
                        "category": "People",
                        "aliases": ["worried"],
                        "tags": ["nervous"],
                        "unicode": "1f61f"
                    },
                    {
                        "emoji": "😕",
                        "description": "confused face",
                        "category": "People",
                        "aliases": ["confused"],
                        "tags": [],
                        "unicode": "1f615"
                    },
                    {
                        "emoji": "🙁",
                        "description": "slightly frowning face",
                        "category": "People",
                        "aliases": ["slightly_frowning_face"],
                        "tags": [],
                        "unicode": "1f641"
                    },
                    {
                        "emoji": "☹️",
                        "description": "frowning face",
                        "category": "People",
                        "aliases": ["frowning_face"],
                        "tags": [],
                        "unicode": "2639"
                    },
                    {
                        "emoji": "😣",
                        "description": "persevering face",
                        "category": "People",
                        "aliases": ["persevere"],
                        "tags": ["struggling"],
                        "unicode": "1f623"
                    },
                    {
                        "emoji": "😖",
                        "description": "confounded face",
                        "category": "People",
                        "aliases": ["confounded"],
                        "tags": [],
                        "unicode": "1f616"
                    },
                    {
                        "emoji": "😫",
                        "description": "tired face",
                        "category": "People",
                        "aliases": ["tired_face"],
                        "tags": ["upset", "whine"],
                        "unicode": "1f62b"
                    },
                    {
                        "emoji": "😩",
                        "description": "weary face",
                        "category": "People",
                        "aliases": ["weary"],
                        "tags": ["tired"],
                        "unicode": "1f629"
                    },
                    {
                        "emoji": "😤",
                        "description": "face with steam from nose",
                        "category": "People",
                        "aliases": ["triumph"],
                        "tags": ["smug"],
                        "unicode": "1f624"
                    },
                    {
                        "emoji": "😠",
                        "description": "angry face",
                        "category": "People",
                        "aliases": ["angry"],
                        "tags": ["mad", "annoyed"],
                        "unicode": "1f620"
                    },
                    {
                        "emoji": "😡",
                        "description": "pouting face",
                        "category": "People",
                        "aliases": ["rage", "pout"],
                        "tags": ["angry"],
                        "unicode": "1f621"
                    },
                    {
                        "emoji": "😶",
                        "description": "face without mouth",
                        "category": "People",
                        "aliases": ["no_mouth"],
                        "tags": ["mute", "silence"],
                        "unicode": "1f636"
                    },
                    {
                        "emoji": "😐",
                        "description": "neutral face",
                        "category": "People",
                        "aliases": ["neutral_face"],
                        "tags": ["meh"],
                        "unicode": "1f610"
                    },
                    {
                        "emoji": "😑",
                        "description": "expressionless face",
                        "category": "People",
                        "aliases": ["expressionless"],
                        "tags": [],
                        "unicode": "1f611"
                    },
                    {
                        "emoji": "😯",
                        "description": "hushed face",
                        "category": "People",
                        "aliases": ["hushed"],
                        "tags": ["silence", "speechless"],
                        "unicode": "1f62f"
                    },
                    {
                        "emoji": "😦",
                        "description": "frowning face with open mouth",
                        "category": "People",
                        "aliases": ["frowning"],
                        "tags": [],
                        "unicode": "1f626"
                    },
                    {
                        "emoji": "😧",
                        "description": "anguished face",
                        "category": "People",
                        "aliases": ["anguished"],
                        "tags": ["stunned"],
                        "unicode": "1f627"
                    },
                    {
                        "emoji": "😮",
                        "description": "face with open mouth",
                        "category": "People",
                        "aliases": ["open_mouth"],
                        "tags": ["surprise", "impressed", "wow"],
                        "unicode": "1f62e"
                    },
                    {
                        "emoji": "😲",
                        "description": "astonished face",
                        "category": "People",
                        "aliases": ["astonished"],
                        "tags": ["amazed", "gasp"],
                        "unicode": "1f632"
                    },
                    {
                        "emoji": "😵",
                        "description": "dizzy face",
                        "category": "People",
                        "aliases": ["dizzy_face"],
                        "tags": [],
                        "unicode": "1f635"
                    },
                    {
                        "emoji": "😳",
                        "description": "flushed face",
                        "category": "People",
                        "aliases": ["flushed"],
                        "tags": [],
                        "unicode": "1f633"
                    },
                    {
                        "emoji": "😱",
                        "description": "face screaming in fear",
                        "category": "People",
                        "aliases": ["scream"],
                        "tags": ["horror", "shocked"],
                        "unicode": "1f631"
                    },
                    {
                        "emoji": "😨",
                        "description": "fearful face",
                        "category": "People",
                        "aliases": ["fearful"],
                        "tags": ["scared", "shocked", "oops"],
                        "unicode": "1f628"
                    },
                    {
                        "emoji": "😰",
                        "description": "face with open mouth & cold sweat",
                        "category": "People",
                        "aliases": ["cold_sweat"],
                        "tags": ["nervous"],
                        "unicode": "1f630"
                    },
                    {
                        "emoji": "😢",
                        "description": "crying face",
                        "category": "People",
                        "aliases": ["cry"],
                        "tags": ["sad", "tear"],
                        "unicode": "1f622"
                    },
                    {
                        "emoji": "😥",
                        "description": "disappointed but relieved face",
                        "category": "People",
                        "aliases": ["disappointed_relieved"],
                        "tags": ["phew", "sweat", "nervous"],
                        "unicode": "1f625"
                    },
                    {
                        "emoji": "🤤",
                        "description": "drooling face",
                        "category": "People",
                        "aliases": ["drooling_face"],
                        "tags": [],
                        "unicode": "1f924"
                    },
                    {
                        "emoji": "😭",
                        "description": "loudly crying face",
                        "category": "People",
                        "aliases": ["sob"],
                        "tags": ["sad", "cry", "bawling"],
                        "unicode": "1f62d"
                    },
                    {
                        "emoji": "😓",
                        "description": "face with cold sweat",
                        "category": "People",
                        "aliases": ["sweat"],
                        "tags": [],
                        "unicode": "1f613"
                    },
                    {
                        "emoji": "😪",
                        "description": "sleepy face",
                        "category": "People",
                        "aliases": ["sleepy"],
                        "tags": ["tired"],
                        "unicode": "1f62a"
                    },
                    {
                        "emoji": "😴",
                        "description": "sleeping face",
                        "category": "People",
                        "aliases": ["sleeping"],
                        "tags": ["zzz"],
                        "unicode": "1f634"
                    },
                    {
                        "emoji": "🙄",
                        "description": "face with rolling eyes",
                        "category": "People",
                        "aliases": ["roll_eyes"],
                        "tags": [],
                        "unicode": "1f644"
                    },
                    {
                        "emoji": "🤔",
                        "description": "thinking face",
                        "category": "People",
                        "aliases": ["thinking"],
                        "tags": [],
                        "unicode": "1f914"
                    },
                    {
                        "emoji": "🤥",
                        "description": "lying face",
                        "category": "People",
                        "aliases": ["lying_face"],
                        "tags": ["liar"],
                        "unicode": "1f925"
                    },
                    {
                        "emoji": "😬",
                        "description": "grimacing face",
                        "category": "People",
                        "aliases": ["grimacing"],
                        "tags": [],
                        "unicode": "1f62c"
                    },
                    {
                        "emoji": "🤐",
                        "description": "zipper-mouth face",
                        "category": "People",
                        "aliases": ["zipper_mouth_face"],
                        "tags": ["silence", "hush"],
                        "unicode": "1f910"
                    },
                    {
                        "emoji": "🤢",
                        "description": "nauseated face",
                        "category": "People",
                        "aliases": ["nauseated_face"],
                        "tags": ["sick", "barf", "disgusted"],
                        "unicode": "1f922"
                    },
                    {
                        "emoji": "🤧",
                        "description": "sneezing face",
                        "category": "People",
                        "aliases": ["sneezing_face"],
                        "tags": ["achoo", "sick"],
                        "unicode": "1f927"
                    },
                    {
                        "emoji": "😷",
                        "description": "face with medical mask",
                        "category": "People",
                        "aliases": ["mask"],
                        "tags": ["sick", "ill"],
                        "unicode": "1f637"
                    },
                    {
                        "emoji": "🤒",
                        "description": "face with thermometer",
                        "category": "People",
                        "aliases": ["face_with_thermometer"],
                        "tags": ["sick"],
                        "unicode": "1f912"
                    },
                    {
                        "emoji": "🤕",
                        "description": "face with head-bandage",
                        "category": "People",
                        "aliases": ["face_with_head_bandage"],
                        "tags": ["hurt"],
                        "unicode": "1f915"
                    },
                    {
                        "emoji": "😈",
                        "description": "smiling face with horns",
                        "category": "People",
                        "aliases": ["smiling_imp"],
                        "tags": ["devil", "evil", "horns"],
                        "unicode": "1f608"
                    },
                    {
                        "emoji": "👿",
                        "description": "angry face with horns",
                        "category": "People",
                        "aliases": ["imp"],
                        "tags": ["angry", "devil", "evil", "horns"],
                        "unicode": "1f47f"
                    },
                    {
                        "emoji": "👹",
                        "description": "ogre",
                        "category": "People",
                        "aliases": ["japanese_ogre"],
                        "tags": ["monster"],
                        "unicode": "1f479"
                    },
                    {
                        "emoji": "👺",
                        "description": "goblin",
                        "category": "People",
                        "aliases": ["japanese_goblin"],
                        "tags": [],
                        "unicode": "1f47a"
                    },
                    {
                        "emoji": "💩",
                        "description": "pile of poo",
                        "category": "People",
                        "aliases": ["hankey", "poop", "shit"],
                        "tags": ["crap"],
                        "unicode": "1f4a9"
                    },
                    {
                        "emoji": "👻",
                        "description": "ghost",
                        "category": "People",
                        "aliases": ["ghost"],
                        "tags": ["halloween"],
                        "unicode": "1f47b"
                    },
                    {
                        "emoji": "💀",
                        "description": "skull",
                        "category": "People",
                        "aliases": ["skull"],
                        "tags": ["dead", "danger", "poison"],
                        "unicode": "1f480"
                    },
                    {
                        "emoji": "☠️",
                        "description": "skull and crossbones",
                        "category": "People",
                        "aliases": ["skull_and_crossbones"],
                        "tags": ["danger", "pirate"],
                        "unicode": "2620"
                    },
                    {
                        "emoji": "👽",
                        "description": "alien",
                        "category": "People",
                        "aliases": ["alien"],
                        "tags": ["ufo"],
                        "unicode": "1f47d"
                    },
                    {
                        "emoji": "👾",
                        "description": "alien monster",
                        "category": "People",
                        "aliases": ["space_invader"],
                        "tags": ["game", "retro"],
                        "unicode": "1f47e"
                    },
                    {
                        "emoji": "🤖",
                        "description": "robot face",
                        "category": "People",
                        "aliases": ["robot"],
                        "tags": [],
                        "unicode": "1f916"
                    },
                    {
                        "emoji": "🎃",
                        "description": "jack-o-lantern",
                        "category": "People",
                        "aliases": ["jack_o_lantern"],
                        "tags": ["halloween"],
                        "unicode": "1f383"
                    },
                    {
                        "emoji": "😺",
                        "description": "smiling cat face with open mouth",
                        "category": "People",
                        "aliases": ["smiley_cat"],
                        "tags": [],
                        "unicode": "1f63a"
                    },
                    {
                        "emoji": "😸",
                        "description": "grinning cat face with smiling eyes",
                        "category": "People",
                        "aliases": ["smile_cat"],
                        "tags": [],
                        "unicode": "1f638"
                    },
                    {
                        "emoji": "😹",
                        "description": "cat face with tears of joy",
                        "category": "People",
                        "aliases": ["joy_cat"],
                        "tags": [],
                        "unicode": "1f639"
                    },
                    {
                        "emoji": "😻",
                        "description": "smiling cat face with heart-eyes",
                        "category": "People",
                        "aliases": ["heart_eyes_cat"],
                        "tags": [],
                        "unicode": "1f63b"
                    },
                    {
                        "emoji": "😼",
                        "description": "cat face with wry smile",
                        "category": "People",
                        "aliases": ["smirk_cat"],
                        "tags": [],
                        "unicode": "1f63c"
                    },
                    {
                        "emoji": "😽",
                        "description": "kissing cat face with closed eyes",
                        "category": "People",
                        "aliases": ["kissing_cat"],
                        "tags": [],
                        "unicode": "1f63d"
                    },
                    {
                        "emoji": "🙀",
                        "description": "weary cat face",
                        "category": "People",
                        "aliases": ["scream_cat"],
                        "tags": ["horror"],
                        "unicode": "1f640"
                    },
                    {
                        "emoji": "😿",
                        "description": "crying cat face",
                        "category": "People",
                        "aliases": ["crying_cat_face"],
                        "tags": ["sad", "tear"],
                        "unicode": "1f63f"
                    },
                    {
                        "emoji": "😾",
                        "description": "pouting cat face",
                        "category": "People",
                        "aliases": ["pouting_cat"],
                        "tags": [],
                        "unicode": "1f63e"
                    },
                    {
                        "emoji": "👐",
                        "description": "open hands",
                        "category": "People",
                        "aliases": ["open_hands"],
                        "tags": [],
                        "unicode": "1f450"
                    },
                    {
                        "emoji": "🙌",
                        "description": "raising hands",
                        "category": "People",
                        "aliases": ["raised_hands"],
                        "tags": ["hooray"],
                        "unicode": "1f64c"
                    },
                    {
                        "emoji": "👏",
                        "description": "clapping hands",
                        "category": "People",
                        "aliases": ["clap"],
                        "tags": ["praise", "applause"],
                        "unicode": "1f44f"
                    },
                    {
                        "emoji": "🙏",
                        "description": "folded hands",
                        "category": "People",
                        "aliases": ["pray"],
                        "tags": ["please", "hope", "wish"],
                        "unicode": "1f64f"
                    },
                    {
                        "emoji": "🤝",
                        "description": "handshake",
                        "category": "People",
                        "aliases": ["handshake"],
                        "tags": ["deal"],
                        "unicode": "1f91d"
                    },
                    {
                        "emoji": "👍",
                        "description": "thumbs up",
                        "category": "People",
                        "aliases": ["thumbsup", "+1"],
                        "tags": ["approve", "ok"],
                        "unicode": "1f44d"
                    },
                    {
                        "emoji": "👎",
                        "description": "thumbs down",
                        "category": "People",
                        "aliases": ["thumbsdown", "-1"],
                        "tags": ["disapprove", "bury"],
                        "unicode": "1f44e"
                    },
                    {
                        "emoji": "👊",
                        "description": "oncoming fist",
                        "category": "People",
                        "aliases": ["fist_oncoming", "facepunch", "punch"],
                        "tags": ["attack"],
                        "unicode": "1f44a"
                    },
                    {
                        "emoji": "✊",
                        "description": "raised fist",
                        "category": "People",
                        "aliases": ["fist_raised", "fist"],
                        "tags": ["power"],
                        "unicode": "270a"
                    },
                    {
                        "emoji": "🤛",
                        "description": "left-facing fist",
                        "category": "People",
                        "aliases": ["fist_left"],
                        "tags": [],
                        "unicode": "1f91b"
                    },
                    {
                        "emoji": "🤜",
                        "description": "right-facing fist",
                        "category": "People",
                        "aliases": ["fist_right"],
                        "tags": [],
                        "unicode": "1f91c"
                    },
                    {
                        "emoji": "🤞",
                        "description": "crossed fingers",
                        "category": "People",
                        "aliases": ["crossed_fingers"],
                        "tags": ["luck", "hopeful"],
                        "unicode": "1f91e"
                    },
                    {
                        "emoji": "✌️",
                        "description": "victory hand",
                        "category": "People",
                        "aliases": ["v"],
                        "tags": ["victory", "peace"],
                        "unicode": "270c"
                    },
                    {
                        "emoji": "🤘",
                        "description": "sign of the horns",
                        "category": "People",
                        "aliases": ["metal"],
                        "tags": [],
                        "unicode": "1f918"
                    },
                    {
                        "emoji": "👌",
                        "description": "OK hand",
                        "category": "People",
                        "aliases": ["ok_hand"],
                        "tags": [],
                        "unicode": "1f44c"
                    },
                    {
                        "emoji": "👈",
                        "description": "backhand index pointing left",
                        "category": "People",
                        "aliases": ["point_left"],
                        "tags": [],
                        "unicode": "1f448"
                    },
                    {
                        "emoji": "👉",
                        "description": "backhand index pointing right",
                        "category": "People",
                        "aliases": ["point_right"],
                        "tags": [],
                        "unicode": "1f449"
                    },
                    {
                        "emoji": "👆",
                        "description": "backhand index pointing up",
                        "category": "People",
                        "aliases": ["point_up_2"],
                        "tags": [],
                        "unicode": "1f446"
                    },
                    {
                        "emoji": "👇",
                        "description": "backhand index pointing down",
                        "category": "People",
                        "aliases": ["point_down"],
                        "tags": [],
                        "unicode": "1f447"
                    },
                    {
                        "emoji": "☝️",
                        "description": "index pointing up",
                        "category": "People",
                        "aliases": ["point_up"],
                        "tags": [],
                        "unicode": "261d"
                    },
                    {
                        "emoji": "✋",
                        "description": "raised hand",
                        "category": "People",
                        "aliases": ["hand", "raised_hand"],
                        "tags": ["highfive", "stop"],
                        "unicode": "270b"
                    },
                    {
                        "emoji": "🤚",
                        "description": "raised back of hand",
                        "category": "People",
                        "aliases": ["raised_back_of_hand"],
                        "tags": [],
                        "unicode": "1f91a"
                    },
                    {
                        "emoji": "🖐",
                        "description": "raised hand with fingers splayed",
                        "category": "People",
                        "aliases": ["raised_hand_with_fingers_splayed"],
                        "tags": [],
                        "unicode": "1f590"
                    },
                    {
                        "emoji": "🖖",
                        "description": "vulcan salute",
                        "category": "People",
                        "aliases": ["vulcan_salute"],
                        "tags": ["prosper", "spock"],
                        "unicode": "1f596"
                    },
                    {
                        "emoji": "👋",
                        "description": "waving hand",
                        "category": "People",
                        "aliases": ["wave"],
                        "tags": ["goodbye"],
                        "unicode": "1f44b"
                    },
                    {
                        "emoji": "🤙",
                        "description": "call me hand",
                        "category": "People",
                        "aliases": ["call_me_hand"],
                        "tags": [],
                        "unicode": "1f919"
                    },
                    {
                        "emoji": "💪",
                        "description": "flexed biceps",
                        "category": "People",
                        "aliases": ["muscle"],
                        "tags": ["flex", "bicep", "strong", "workout"],
                        "unicode": "1f4aa"
                    },
                    {
                        "emoji": "🖕",
                        "description": "middle finger",
                        "category": "People",
                        "aliases": ["middle_finger", "fu"],
                        "tags": [],
                        "unicode": "1f595"
                    },
                    {
                        "emoji": "✍️",
                        "description": "writing hand",
                        "category": "People",
                        "aliases": ["writing_hand"],
                        "tags": [],
                        "unicode": "270d"
                    },
                    {
                        "emoji": "🤳",
                        "description": "selfie",
                        "category": "People",
                        "aliases": ["selfie"],
                        "tags": [],
                        "unicode": "1f933"
                    },
                    {
                        "emoji": "💅",
                        "description": "nail polish",
                        "category": "People",
                        "aliases": ["nail_care"],
                        "tags": ["beauty", "manicure"],
                        "unicode": "1f485"
                    },
                    {
                        "emoji": "💍",
                        "description": "ring",
                        "category": "People",
                        "aliases": ["ring"],
                        "tags": ["wedding", "marriage", "engaged"],
                        "unicode": "1f48d"
                    },
                    {
                        "emoji": "💄",
                        "description": "lipstick",
                        "category": "People",
                        "aliases": ["lipstick"],
                        "tags": ["makeup"],
                        "unicode": "1f484"
                    },
                    {
                        "emoji": "💋",
                        "description": "kiss mark",
                        "category": "People",
                        "aliases": ["kiss"],
                        "tags": ["lipstick"],
                        "unicode": "1f48b"
                    },
                    {
                        "emoji": "👄",
                        "description": "mouth",
                        "category": "People",
                        "aliases": ["lips"],
                        "tags": ["kiss"],
                        "unicode": "1f444"
                    },
                    {
                        "emoji": "👅",
                        "description": "tongue",
                        "category": "People",
                        "aliases": ["tongue"],
                        "tags": ["taste"],
                        "unicode": "1f445"
                    },
                    {
                        "emoji": "👂",
                        "description": "ear",
                        "category": "People",
                        "aliases": ["ear"],
                        "tags": ["hear", "sound", "listen"],
                        "unicode": "1f442"
                    },
                    {
                        "emoji": "👃",
                        "description": "nose",
                        "category": "People",
                        "aliases": ["nose"],
                        "tags": ["smell"],
                        "unicode": "1f443"
                    },
                    {
                        "emoji": "👣",
                        "description": "footprints",
                        "category": "People",
                        "aliases": ["footprints"],
                        "tags": ["feet", "tracks"],
                        "unicode": "1f463"
                    },
                    {
                        "emoji": "👁",
                        "description": "eye",
                        "category": "People",
                        "aliases": ["eye"],
                        "tags": [],
                        "unicode": "1f441"
                    },
                    {
                        "emoji": "👀",
                        "description": "eyes",
                        "category": "People",
                        "aliases": ["eyes"],
                        "tags": ["look", "see", "watch"],
                        "unicode": "1f440"
                    },
                    {
                        "emoji": "🗣",
                        "description": "speaking head",
                        "category": "People",
                        "aliases": ["speaking_head"],
                        "tags": [],
                        "unicode": "1f5e3"
                    },
                    {
                        "emoji": "👤",
                        "description": "bust in silhouette",
                        "category": "People",
                        "aliases": ["bust_in_silhouette"],
                        "tags": ["user"],
                        "unicode": "1f464"
                    },
                    {
                        "emoji": "👥",
                        "description": "busts in silhouette",
                        "category": "People",
                        "aliases": ["busts_in_silhouette"],
                        "tags": ["users", "group", "team"],
                        "unicode": "1f465"
                    },
                    {
                        "emoji": "👶",
                        "description": "baby",
                        "category": "People",
                        "aliases": ["baby"],
                        "tags": ["child", "newborn"],
                        "unicode": "1f476"
                    },
                    {
                        "emoji": "👦",
                        "description": "boy",
                        "category": "People",
                        "aliases": ["boy"],
                        "tags": ["child"],
                        "unicode": "1f466"
                    },
                    {
                        "emoji": "👧",
                        "description": "girl",
                        "category": "People",
                        "aliases": ["girl"],
                        "tags": ["child"],
                        "unicode": "1f467"
                    },
                    {
                        "emoji": "👨",
                        "description": "man",
                        "category": "People",
                        "aliases": ["man"],
                        "tags": ["mustache", "father", "dad"],
                        "unicode": "1f468"
                    },
                    {
                        "emoji": "👩",
                        "description": "woman",
                        "category": "People",
                        "aliases": ["woman"],
                        "tags": ["girls"],
                        "unicode": "1f469"
                    },
                    {
                        "emoji": "👱‍♀",
                        "description": "blond-haired woman",
                        "category": "People",
                        "aliases": ["blonde_woman"],
                        "tags": [],
                        "unicode": "1f471-2640"
                    },
                    {
                        "emoji": "👱",
                        "description": "blond-haired person",
                        "category": "People",
                        "aliases": ["blonde_man", "person_with_blond_hair"],
                        "tags": ["boy"],
                        "unicode": "1f471"
                    },
                    {
                        "emoji": "👴",
                        "description": "old man",
                        "category": "People",
                        "aliases": ["older_man"],
                        "tags": [],
                        "unicode": "1f474"
                    },
                    {
                        "emoji": "👵",
                        "description": "old woman",
                        "category": "People",
                        "aliases": ["older_woman"],
                        "tags": [],
                        "unicode": "1f475"
                    },
                    {
                        "emoji": "👲",
                        "description": "man with Chinese cap",
                        "category": "People",
                        "aliases": ["man_with_gua_pi_mao"],
                        "tags": [],
                        "unicode": "1f472"
                    },
                    {
                        "emoji": "👳‍♀",
                        "description": "woman wearing turban",
                        "category": "People",
                        "aliases": ["woman_with_turban"],
                        "tags": [],
                        "unicode": "1f473-2640"
                    },
                    {
                        "emoji": "👳",
                        "description": "person wearing turban",
                        "category": "People",
                        "aliases": ["man_with_turban"],
                        "tags": [],
                        "unicode": "1f473"
                    },
                    {
                        "emoji": "👮‍♀",
                        "description": "woman police officer",
                        "category": "People",
                        "aliases": ["policewoman"],
                        "tags": [],
                        "unicode": "1f46e-2640"
                    },
                    {
                        "emoji": "👮",
                        "description": "police officer",
                        "category": "People",
                        "aliases": ["policeman", "cop"],
                        "tags": ["police", "law"],
                        "unicode": "1f46e"
                    },
                    {
                        "emoji": "👷‍♀",
                        "description": "woman construction worker",
                        "category": "People",
                        "aliases": ["construction_worker_woman"],
                        "tags": [],
                        "unicode": "1f477-2640"
                    },
                    {
                        "emoji": "👷",
                        "description": "construction worker",
                        "category": "People",
                        "aliases": ["construction_worker_man", "construction_worker"],
                        "tags": ["helmet"],
                        "unicode": "1f477"
                    },
                    {
                        "emoji": "💂‍♀",
                        "description": "woman guard",
                        "category": "People",
                        "aliases": ["guardswoman"],
                        "tags": [],
                        "unicode": "1f482-2640"
                    },
                    {
                        "emoji": "💂",
                        "description": "guard",
                        "category": "People",
                        "aliases": ["guardsman"],
                        "tags": [],
                        "unicode": "1f482"
                    },
                    {
                        "emoji": "🕵️‍♀️",
                        "description": "woman detective",
                        "category": "People",
                        "aliases": ["female_detective"],
                        "tags": ["sleuth"],
                        "unicode": "1f575-2640"
                    },
                    {
                        "emoji": "🕵",
                        "description": "detective",
                        "category": "People",
                        "aliases": ["male_detective", "detective"],
                        "tags": ["sleuth"],
                        "unicode": "1f575"
                    },
                    {
                        "emoji": "👩‍⚕",
                        "description": "woman health worker",
                        "category": "People",
                        "aliases": ["woman_health_worker"],
                        "tags": ["doctor", "nurse"],
                        "unicode": "1f469-2695"
                    },
                    {
                        "emoji": "👨‍⚕",
                        "description": "man health worker",
                        "category": "People",
                        "aliases": ["man_health_worker"],
                        "tags": ["doctor", "nurse"],
                        "unicode": "1f468-2695"
                    },
                    {
                        "emoji": "👩‍🌾",
                        "description": "woman farmer",
                        "category": "People",
                        "aliases": ["woman_farmer"],
                        "tags": [],
                        "unicode": "1f469-1f33e"
                    },
                    {
                        "emoji": "👨‍🌾",
                        "description": "man farmer",
                        "category": "People",
                        "aliases": ["man_farmer"],
                        "tags": [],
                        "unicode": "1f468-1f33e"
                    },
                    {
                        "emoji": "👩‍🍳",
                        "description": "woman cook",
                        "category": "People",
                        "aliases": ["woman_cook"],
                        "tags": ["chef"],
                        "unicode": "1f469-1f373"
                    },
                    {
                        "emoji": "👨‍🍳",
                        "description": "man cook",
                        "category": "People",
                        "aliases": ["man_cook"],
                        "tags": ["chef"],
                        "unicode": "1f468-1f373"
                    },
                    {
                        "emoji": "👩‍🎓",
                        "description": "woman student",
                        "category": "People",
                        "aliases": ["woman_student"],
                        "tags": ["graduation"],
                        "unicode": "1f469-1f393"
                    },
                    {
                        "emoji": "👨‍🎓",
                        "description": "man student",
                        "category": "People",
                        "aliases": ["man_student"],
                        "tags": ["graduation"],
                        "unicode": "1f468-1f393"
                    },
                    {
                        "emoji": "👩‍🎤",
                        "description": "woman singer",
                        "category": "People",
                        "aliases": ["woman_singer"],
                        "tags": ["rockstar"],
                        "unicode": "1f469-1f3a4"
                    },
                    {
                        "emoji": "👨‍🎤",
                        "description": "man singer",
                        "category": "People",
                        "aliases": ["man_singer"],
                        "tags": ["rockstar"],
                        "unicode": "1f468-1f3a4"
                    },
                    {
                        "emoji": "👩‍🏫",
                        "description": "woman teacher",
                        "category": "People",
                        "aliases": ["woman_teacher"],
                        "tags": ["school", "professor"],
                        "unicode": "1f469-1f3eb"
                    },
                    {
                        "emoji": "👨‍🏫",
                        "description": "man teacher",
                        "category": "People",
                        "aliases": ["man_teacher"],
                        "tags": ["school", "professor"],
                        "unicode": "1f468-1f3eb"
                    },
                    {
                        "emoji": "👩‍🏭",
                        "description": "woman factory worker",
                        "category": "People",
                        "aliases": ["woman_factory_worker"],
                        "tags": [],
                        "unicode": "1f469-1f3ed"
                    },
                    {
                        "emoji": "👨‍🏭",
                        "description": "man factory worker",
                        "category": "People",
                        "aliases": ["man_factory_worker"],
                        "tags": [],
                        "unicode": "1f468-1f3ed"
                    },
                    {
                        "emoji": "👩‍💻",
                        "description": "woman technologist",
                        "category": "People",
                        "aliases": ["woman_technologist"],
                        "tags": ["coder"],
                        "unicode": "1f469-1f4bb"
                    },
                    {
                        "emoji": "👨‍💻",
                        "description": "man technologist",
                        "category": "People",
                        "aliases": ["man_technologist"],
                        "tags": ["coder"],
                        "unicode": "1f468-1f4bb"
                    },
                    {
                        "emoji": "👩‍💼",
                        "description": "woman office worker",
                        "category": "People",
                        "aliases": ["woman_office_worker"],
                        "tags": ["business"],
                        "unicode": "1f469-1f4bc"
                    },
                    {
                        "emoji": "👨‍💼",
                        "description": "man office worker",
                        "category": "People",
                        "aliases": ["man_office_worker"],
                        "tags": ["business"],
                        "unicode": "1f468-1f4bc"
                    },
                    {
                        "emoji": "👩‍🔧",
                        "description": "woman mechanic",
                        "category": "People",
                        "aliases": ["woman_mechanic"],
                        "tags": [],
                        "unicode": "1f469-1f527"
                    },
                    {
                        "emoji": "👨‍🔧",
                        "description": "man mechanic",
                        "category": "People",
                        "aliases": ["man_mechanic"],
                        "tags": [],
                        "unicode": "1f468-1f527"
                    },
                    {
                        "emoji": "👩‍🔬",
                        "description": "woman scientist",
                        "category": "People",
                        "aliases": ["woman_scientist"],
                        "tags": ["research"],
                        "unicode": "1f469-1f52c"
                    },
                    {
                        "emoji": "👨‍🔬",
                        "description": "man scientist",
                        "category": "People",
                        "aliases": ["man_scientist"],
                        "tags": ["research"],
                        "unicode": "1f468-1f52c"
                    },
                    {
                        "emoji": "👩‍🎨",
                        "description": "woman artist",
                        "category": "People",
                        "aliases": ["woman_artist"],
                        "tags": ["painter"],
                        "unicode": "1f469-1f3a8"
                    },
                    {
                        "emoji": "👨‍🎨",
                        "description": "man artist",
                        "category": "People",
                        "aliases": ["man_artist"],
                        "tags": ["painter"],
                        "unicode": "1f468-1f3a8"
                    },
                    {
                        "emoji": "👩‍🚒",
                        "description": "woman firefighter",
                        "category": "People",
                        "aliases": ["woman_firefighter"],
                        "tags": [],
                        "unicode": "1f469-1f692"
                    },
                    {
                        "emoji": "👨‍🚒",
                        "description": "man firefighter",
                        "category": "People",
                        "aliases": ["man_firefighter"],
                        "tags": [],
                        "unicode": "1f468-1f692"
                    },
                    {
                        "emoji": "👩‍✈",
                        "description": "woman pilot",
                        "category": "People",
                        "aliases": ["woman_pilot"],
                        "tags": [],
                        "unicode": "1f469-2708"
                    },
                    {
                        "emoji": "👨‍✈",
                        "description": "man pilot",
                        "category": "People",
                        "aliases": ["man_pilot"],
                        "tags": [],
                        "unicode": "1f468-2708"
                    },
                    {
                        "emoji": "👩‍🚀",
                        "description": "woman astronaut",
                        "category": "People",
                        "aliases": ["woman_astronaut"],
                        "tags": ["space"],
                        "unicode": "1f469-1f680"
                    },
                    {
                        "emoji": "👨‍🚀",
                        "description": "man astronaut",
                        "category": "People",
                        "aliases": ["man_astronaut"],
                        "tags": ["space"],
                        "unicode": "1f468-1f680"
                    },
                    {
                        "emoji": "👩‍⚖",
                        "description": "woman judge",
                        "category": "People",
                        "aliases": ["woman_judge"],
                        "tags": ["justice"],
                        "unicode": "1f469-2696"
                    },
                    {
                        "emoji": "👨‍⚖",
                        "description": "man judge",
                        "category": "People",
                        "aliases": ["man_judge"],
                        "tags": ["justice"],
                        "unicode": "1f468-2696"
                    },
                    {
                        "emoji": "🤶",
                        "description": "Mrs. Claus",
                        "category": "People",
                        "aliases": ["mrs_claus"],
                        "tags": ["santa"],
                        "unicode": "1f936"
                    },
                    {
                        "emoji": "🎅",
                        "description": "Santa Claus",
                        "category": "People",
                        "aliases": ["santa"],
                        "tags": ["christmas"],
                        "unicode": "1f385"
                    },
                    {
                        "emoji": "👸",
                        "description": "princess",
                        "category": "People",
                        "aliases": ["princess"],
                        "tags": ["blonde", "crown", "royal"],
                        "unicode": "1f478"
                    },
                    {
                        "emoji": "🤴",
                        "description": "prince",
                        "category": "People",
                        "aliases": ["prince"],
                        "tags": ["crown", "royal"],
                        "unicode": "1f934"
                    },
                    {
                        "emoji": "👰",
                        "description": "bride with veil",
                        "category": "People",
                        "aliases": ["bride_with_veil"],
                        "tags": ["marriage", "wedding"],
                        "unicode": "1f470"
                    },
                    {
                        "emoji": "🤵",
                        "description": "man in tuxedo",
                        "category": "People",
                        "aliases": ["man_in_tuxedo"],
                        "tags": ["groom", "marriage", "wedding"],
                        "unicode": "1f935"
                    },
                    {
                        "emoji": "👼",
                        "description": "baby angel",
                        "category": "People",
                        "aliases": ["angel"],
                        "tags": [],
                        "unicode": "1f47c"
                    },
                    {
                        "emoji": "🤰",
                        "description": "pregnant woman",
                        "category": "People",
                        "aliases": ["pregnant_woman"],
                        "tags": [],
                        "unicode": "1f930"
                    },
                    {
                        "emoji": "🙇‍♀",
                        "description": "woman bowing",
                        "category": "People",
                        "aliases": ["bowing_woman"],
                        "tags": ["respect", "thanks"],
                        "unicode": "1f647-2640"
                    },
                    {
                        "emoji": "🙇",
                        "description": "person bowing",
                        "category": "People",
                        "aliases": ["bowing_man", "bow"],
                        "tags": ["respect", "thanks"],
                        "unicode": "1f647"
                    },
                    {
                        "emoji": "💁",
                        "description": "person tipping hand",
                        "category": "People",
                        "aliases": ["tipping_hand_woman", "information_desk_person", "sassy_woman"],
                        "tags": [],
                        "unicode": "1f481"
                    },
                    {
                        "emoji": "💁‍♂",
                        "description": "man tipping hand",
                        "category": "People",
                        "aliases": ["tipping_hand_man", "sassy_man"],
                        "tags": ["information"],
                        "unicode": "1f481-2642"
                    },
                    {
                        "emoji": "🙅",
                        "description": "person gesturing NO",
                        "category": "People",
                        "aliases": ["no_good_woman", "no_good", "ng_woman"],
                        "tags": ["stop", "halt"],
                        "unicode": "1f645"
                    },
                    {
                        "emoji": "🙅‍♂",
                        "description": "man gesturing NO",
                        "category": "People",
                        "aliases": ["no_good_man", "ng_man"],
                        "tags": ["stop", "halt"],
                        "unicode": "1f645-2642"
                    },
                    {
                        "emoji": "🙆",
                        "description": "person gesturing OK",
                        "category": "People",
                        "aliases": ["ok_woman"],
                        "tags": [],
                        "unicode": "1f646"
                    },
                    {
                        "emoji": "🙆‍♂",
                        "description": "man gesturing OK",
                        "category": "People",
                        "aliases": ["ok_man"],
                        "tags": [],
                        "unicode": "1f646-2642"
                    },
                    {
                        "emoji": "🙋",
                        "description": "person raising hand",
                        "category": "People",
                        "aliases": ["raising_hand_woman", "raising_hand"],
                        "tags": [],
                        "unicode": "1f64b"
                    },
                    {
                        "emoji": "🙋‍♂",
                        "description": "man raising hand",
                        "category": "People",
                        "aliases": ["raising_hand_man"],
                        "tags": [],
                        "unicode": "1f64b-2642"
                    },
                    {
                        "emoji": "🤦‍♀",
                        "description": "woman facepalming",
                        "category": "People",
                        "aliases": ["woman_facepalming"],
                        "tags": [],
                        "unicode": "1f926-2640"
                    },
                    {
                        "emoji": "🤦‍♂",
                        "description": "man facepalming",
                        "category": "People",
                        "aliases": ["man_facepalming"],
                        "tags": [],
                        "unicode": "1f926-2642"
                    },
                    {
                        "emoji": "🤷‍♀",
                        "description": "woman shrugging",
                        "category": "People",
                        "aliases": ["woman_shrugging"],
                        "tags": [],
                        "unicode": "1f937-2640"
                    },
                    {
                        "emoji": "🤷‍♂",
                        "description": "man shrugging",
                        "category": "People",
                        "aliases": ["man_shrugging"],
                        "tags": [],
                        "unicode": "1f937-2642"
                    },
                    {
                        "emoji": "🙎",
                        "description": "person pouting",
                        "category": "People",
                        "aliases": ["pouting_woman", "person_with_pouting_face"],
                        "tags": [],
                        "unicode": "1f64e"
                    },
                    {
                        "emoji": "🙎‍♂",
                        "description": "man pouting",
                        "category": "People",
                        "aliases": ["pouting_man"],
                        "tags": [],
                        "unicode": "1f64e-2642"
                    },
                    {
                        "emoji": "🙍",
                        "description": "person frowning",
                        "category": "People",
                        "aliases": ["frowning_woman", "person_frowning"],
                        "tags": ["sad"],
                        "unicode": "1f64d"
                    },
                    {
                        "emoji": "🙍‍♂",
                        "description": "man frowning",
                        "category": "People",
                        "aliases": ["frowning_man"],
                        "tags": [],
                        "unicode": "1f64d-2642"
                    },
                    {
                        "emoji": "💇",
                        "description": "person getting haircut",
                        "category": "People",
                        "aliases": ["haircut_woman", "haircut"],
                        "tags": ["beauty"],
                        "unicode": "1f487"
                    },
                    {
                        "emoji": "💇‍♂",
                        "description": "man getting haircut",
                        "category": "People",
                        "aliases": ["haircut_man"],
                        "tags": [],
                        "unicode": "1f487-2642"
                    },
                    {
                        "emoji": "💆",
                        "description": "person getting massage",
                        "category": "People",
                        "aliases": ["massage_woman", "massage"],
                        "tags": ["spa"],
                        "unicode": "1f486"
                    },
                    {
                        "emoji": "💆‍♂",
                        "description": "man getting massage",
                        "category": "People",
                        "aliases": ["massage_man"],
                        "tags": ["spa"],
                        "unicode": "1f486-2642"
                    },
                    {
                        "emoji": "🕴",
                        "description": "man in business suit levitating",
                        "category": "People",
                        "aliases": ["business_suit_levitating"],
                        "tags": [],
                        "unicode": "1f574"
                    },
                    {
                        "emoji": "💃",
                        "description": "woman dancing",
                        "category": "People",
                        "aliases": ["dancer"],
                        "tags": ["dress"],
                        "unicode": "1f483"
                    },
                    {
                        "emoji": "🕺",
                        "description": "man dancing",
                        "category": "People",
                        "aliases": ["man_dancing"],
                        "tags": ["dancer"],
                        "unicode": "1f57a"
                    },
                    {
                        "emoji": "👯",
                        "description": "people with bunny ears partying",
                        "category": "People",
                        "aliases": ["dancing_women", "dancers"],
                        "tags": ["bunny"],
                        "unicode": "1f46f"
                    },
                    {
                        "emoji": "👯‍♂",
                        "description": "men with bunny ears partying",
                        "category": "People",
                        "aliases": ["dancing_men"],
                        "tags": ["bunny"],
                        "unicode": "1f46f-2642"
                    },
                    {
                        "emoji": "🚶‍♀",
                        "description": "woman walking",
                        "category": "People",
                        "aliases": ["walking_woman"],
                        "tags": [],
                        "unicode": "1f6b6-2640"
                    },
                    {
                        "emoji": "🚶",
                        "description": "person walking",
                        "category": "People",
                        "aliases": ["walking_man", "walking"],
                        "tags": [],
                        "unicode": "1f6b6"
                    },
                    {
                        "emoji": "🏃‍♀",
                        "description": "woman running",
                        "category": "People",
                        "aliases": ["running_woman"],
                        "tags": ["exercise", "workout", "marathon"],
                        "unicode": "1f3c3-2640"
                    },
                    {
                        "emoji": "🏃",
                        "description": "person running",
                        "category": "People",
                        "aliases": ["running_man", "runner", "running"],
                        "tags": ["exercise", "workout", "marathon"],
                        "unicode": "1f3c3"
                    },
                    {
                        "emoji": "👫",
                        "description": "man and woman holding hands",
                        "category": "People",
                        "aliases": ["couple"],
                        "tags": ["date"],
                        "unicode": "1f46b"
                    },
                    {
                        "emoji": "👭",
                        "description": "two women holding hands",
                        "category": "People",
                        "aliases": ["two_women_holding_hands"],
                        "tags": ["couple", "date"],
                        "unicode": "1f46d"
                    },
                    {
                        "emoji": "👬",
                        "description": "two men holding hands",
                        "category": "People",
                        "aliases": ["two_men_holding_hands"],
                        "tags": ["couple", "date"],
                        "unicode": "1f46c"
                    },
                    {
                        "emoji": "💑",
                        "description": "couple with heart",
                        "category": "People",
                        "aliases": ["couple_with_heart_woman_man", "couple_with_heart"],
                        "tags": [],
                        "unicode": "1f491"
                    },
                    {
                        "emoji": "👩‍❤️‍👩",
                        "description": "couple with heart: woman, woman",
                        "category": "People",
                        "aliases": ["couple_with_heart_woman_woman"],
                        "tags": [],
                        "unicode": "1f469-2764-1f469"
                    },
                    {
                        "emoji": "👨‍❤️‍👨",
                        "description": "couple with heart: man, man",
                        "category": "People",
                        "aliases": ["couple_with_heart_man_man"],
                        "tags": [],
                        "unicode": "1f468-2764-1f468"
                    },
                    {
                        "emoji": "💏",
                        "description": "kiss",
                        "category": "People",
                        "aliases": ["couplekiss_man_woman"],
                        "tags": [],
                        "unicode": "1f48f"
                    },
                    {
                        "emoji": "👩‍❤️‍💋‍👩",
                        "description": "kiss: woman, woman",
                        "category": "People",
                        "aliases": ["couplekiss_woman_woman"],
                        "tags": [],
                        "unicode": "1f469-2764-1f48b-1f469"
                    },
                    {
                        "emoji": "👨‍❤️‍💋‍👨",
                        "description": "kiss: man, man",
                        "category": "People",
                        "aliases": ["couplekiss_man_man"],
                        "tags": [],
                        "unicode": "1f468-2764-1f48b-1f468"
                    },
                    {
                        "emoji": "👪",
                        "description": "family",
                        "category": "People",
                        "aliases": ["family_man_woman_boy", "family"],
                        "tags": ["home", "parents", "child"],
                        "unicode": "1f46a"
                    },
                    {
                        "emoji": "👨‍👩‍👧",
                        "description": "family: man, woman, girl",
                        "category": "People",
                        "aliases": ["family_man_woman_girl"],
                        "tags": [],
                        "unicode": "1f468-1f469-1f467"
                    },
                    {
                        "emoji": "👨‍👩‍👧‍👦",
                        "description": "family: man, woman, girl, boy",
                        "category": "People",
                        "aliases": ["family_man_woman_girl_boy"],
                        "tags": [],
                        "unicode": "1f468-1f469-1f467-1f466"
                    },
                    {
                        "emoji": "👨‍👩‍👦‍👦",
                        "description": "family: man, woman, boy, boy",
                        "category": "People",
                        "aliases": ["family_man_woman_boy_boy"],
                        "tags": [],
                        "unicode": "1f468-1f469-1f466-1f466"
                    },
                    {
                        "emoji": "👨‍👩‍👧‍👧",
                        "description": "family: man, woman, girl, girl",
                        "category": "People",
                        "aliases": ["family_man_woman_girl_girl"],
                        "tags": [],
                        "unicode": "1f468-1f469-1f467-1f467"
                    },
                    {
                        "emoji": "👩‍👩‍👦",
                        "description": "family: woman, woman, boy",
                        "category": "People",
                        "aliases": ["family_woman_woman_boy"],
                        "tags": [],
                        "unicode": "1f469-1f469-1f466"
                    },
                    {
                        "emoji": "👩‍👩‍👧",
                        "description": "family: woman, woman, girl",
                        "category": "People",
                        "aliases": ["family_woman_woman_girl"],
                        "tags": [],
                        "unicode": "1f469-1f469-1f467"
                    },
                    {
                        "emoji": "👩‍👩‍👧‍👦",
                        "description": "family: woman, woman, girl, boy",
                        "category": "People",
                        "aliases": ["family_woman_woman_girl_boy"],
                        "tags": [],
                        "unicode": "1f469-1f469-1f467-1f466"
                    },
                    {
                        "emoji": "👩‍👩‍👦‍👦",
                        "description": "family: woman, woman, boy, boy",
                        "category": "People",
                        "aliases": ["family_woman_woman_boy_boy"],
                        "tags": [],
                        "unicode": "1f469-1f469-1f466-1f466"
                    },
                    {
                        "emoji": "👩‍👩‍👧‍👧",
                        "description": "family: woman, woman, girl, girl",
                        "category": "People",
                        "aliases": ["family_woman_woman_girl_girl"],
                        "tags": [],
                        "unicode": "1f469-1f469-1f467-1f467"
                    },
                    {
                        "emoji": "👨‍👨‍👦",
                        "description": "family: man, man, boy",
                        "category": "People",
                        "aliases": ["family_man_man_boy"],
                        "tags": [],
                        "unicode": "1f468-1f468-1f466"
                    },
                    {
                        "emoji": "👨‍👨‍👧",
                        "description": "family: man, man, girl",
                        "category": "People",
                        "aliases": ["family_man_man_girl"],
                        "tags": [],
                        "unicode": "1f468-1f468-1f467"
                    },
                    {
                        "emoji": "👨‍👨‍👧‍👦",
                        "description": "family: man, man, girl, boy",
                        "category": "People",
                        "aliases": ["family_man_man_girl_boy"],
                        "tags": [],
                        "unicode": "1f468-1f468-1f467-1f466"
                    },
                    {
                        "emoji": "👨‍👨‍👦‍👦",
                        "description": "family: man, man, boy, boy",
                        "category": "People",
                        "aliases": ["family_man_man_boy_boy"],
                        "tags": [],
                        "unicode": "1f468-1f468-1f466-1f466"
                    },
                    {
                        "emoji": "👨‍👨‍👧‍👧",
                        "description": "family: man, man, girl, girl",
                        "category": "People",
                        "aliases": ["family_man_man_girl_girl"],
                        "tags": [],
                        "unicode": "1f468-1f468-1f467-1f467"
                    },
                    {
                        "emoji": "👩‍👦",
                        "description": "family: woman, boy",
                        "category": "People",
                        "aliases": ["family_woman_boy"],
                        "tags": [],
                        "unicode": "1f469-1f466"
                    },
                    {
                        "emoji": "👩‍👧",
                        "description": "family: woman, girl",
                        "category": "People",
                        "aliases": ["family_woman_girl"],
                        "tags": [],
                        "unicode": "1f469-1f467"
                    },
                    {
                        "emoji": "👩‍👧‍👦",
                        "description": "family: woman, girl, boy",
                        "category": "People",
                        "aliases": ["family_woman_girl_boy"],
                        "tags": [],
                        "unicode": "1f469-1f467-1f466"
                    },
                    {
                        "emoji": "👩‍👦‍👦",
                        "description": "family: woman, boy, boy",
                        "category": "People",
                        "aliases": ["family_woman_boy_boy"],
                        "tags": [],
                        "unicode": "1f469-1f466-1f466"
                    },
                    {
                        "emoji": "👩‍👧‍👧",
                        "description": "family: woman, girl, girl",
                        "category": "People",
                        "aliases": ["family_woman_girl_girl"],
                        "tags": [],
                        "unicode": "1f469-1f467-1f467"
                    },
                    {
                        "emoji": "👨‍👦",
                        "description": "family: man, boy",
                        "category": "People",
                        "aliases": ["family_man_boy"],
                        "tags": [],
                        "unicode": "1f468-1f466"
                    },
                    {
                        "emoji": "👨‍👧",
                        "description": "family: man, girl",
                        "category": "People",
                        "aliases": ["family_man_girl"],
                        "tags": [],
                        "unicode": "1f468-1f467"
                    },
                    {
                        "emoji": "👨‍👧‍👦",
                        "description": "family: man, girl, boy",
                        "category": "People",
                        "aliases": ["family_man_girl_boy"],
                        "tags": [],
                        "unicode": "1f468-1f467-1f466"
                    },
                    {
                        "emoji": "👨‍👦‍👦",
                        "description": "family: man, boy, boy",
                        "category": "People",
                        "aliases": ["family_man_boy_boy"],
                        "tags": [],
                        "unicode": "1f468-1f466-1f466"
                    },
                    {
                        "emoji": "👨‍👧‍👧",
                        "description": "family: man, girl, girl",
                        "category": "People",
                        "aliases": ["family_man_girl_girl"],
                        "tags": [],
                        "unicode": "1f468-1f467-1f467"
                    },
                    {
                        "emoji": "👚",
                        "description": "woman’s clothes",
                        "category": "People",
                        "aliases": ["womans_clothes"],
                        "tags": [],
                        "unicode": "1f45a"
                    },
                    {
                        "emoji": "👕",
                        "description": "t-shirt",
                        "category": "People",
                        "aliases": ["shirt", "tshirt"],
                        "tags": [],
                        "unicode": "1f455"
                    },
                    {
                        "emoji": "👖",
                        "description": "jeans",
                        "category": "People",
                        "aliases": ["jeans"],
                        "tags": ["pants"],
                        "unicode": "1f456"
                    },
                    {
                        "emoji": "👔",
                        "description": "necktie",
                        "category": "People",
                        "aliases": ["necktie"],
                        "tags": ["shirt", "formal"],
                        "unicode": "1f454"
                    },
                    {
                        "emoji": "👗",
                        "description": "dress",
                        "category": "People",
                        "aliases": ["dress"],
                        "tags": [],
                        "unicode": "1f457"
                    },
                    {
                        "emoji": "👙",
                        "description": "bikini",
                        "category": "People",
                        "aliases": ["bikini"],
                        "tags": ["beach"],
                        "unicode": "1f459"
                    },
                    {
                        "emoji": "👘",
                        "description": "kimono",
                        "category": "People",
                        "aliases": ["kimono"],
                        "tags": [],
                        "unicode": "1f458"
                    },
                    {
                        "emoji": "👠",
                        "description": "high-heeled shoe",
                        "category": "People",
                        "aliases": ["high_heel"],
                        "tags": ["shoe"],
                        "unicode": "1f460"
                    },
                    {
                        "emoji": "👡",
                        "description": "woman’s sandal",
                        "category": "People",
                        "aliases": ["sandal"],
                        "tags": ["shoe"],
                        "unicode": "1f461"
                    },
                    {
                        "emoji": "👢",
                        "description": "woman’s boot",
                        "category": "People",
                        "aliases": ["boot"],
                        "tags": [],
                        "unicode": "1f462"
                    },
                    {
                        "emoji": "👞",
                        "description": "man’s shoe",
                        "category": "People",
                        "aliases": ["mans_shoe", "shoe"],
                        "tags": [],
                        "unicode": "1f45e"
                    },
                    {
                        "emoji": "👟",
                        "description": "running shoe",
                        "category": "People",
                        "aliases": ["athletic_shoe"],
                        "tags": ["sneaker", "sport", "running"],
                        "unicode": "1f45f"
                    },
                    {
                        "emoji": "👒",
                        "description": "woman’s hat",
                        "category": "People",
                        "aliases": ["womans_hat"],
                        "tags": [],
                        "unicode": "1f452"
                    },
                    {
                        "emoji": "🎩",
                        "description": "top hat",
                        "category": "People",
                        "aliases": ["tophat"],
                        "tags": ["hat", "classy"],
                        "unicode": "1f3a9"
                    },
                    {
                        "emoji": "🎓",
                        "description": "graduation cap",
                        "category": "People",
                        "aliases": ["mortar_board"],
                        "tags": ["education", "college", "university", "graduation"],
                        "unicode": "1f393"
                    },
                    {
                        "emoji": "👑",
                        "description": "crown",
                        "category": "People",
                        "aliases": ["crown"],
                        "tags": ["king", "queen", "royal"],
                        "unicode": "1f451"
                    },
                    {
                        "emoji": "⛑",
                        "description": "rescue worker’s helmet",
                        "category": "People",
                        "aliases": ["rescue_worker_helmet"],
                        "tags": [],
                        "unicode": "26d1"
                    },
                    {
                        "emoji": "🎒",
                        "description": "school backpack",
                        "category": "People",
                        "aliases": ["school_satchel"],
                        "tags": [],
                        "unicode": "1f392"
                    },
                    {
                        "emoji": "👝",
                        "description": "clutch bag",
                        "category": "People",
                        "aliases": ["pouch"],
                        "tags": ["bag"],
                        "unicode": "1f45d"
                    },
                    {
                        "emoji": "👛",
                        "description": "purse",
                        "category": "People",
                        "aliases": ["purse"],
                        "tags": [],
                        "unicode": "1f45b"
                    },
                    {
                        "emoji": "👜",
                        "description": "handbag",
                        "category": "People",
                        "aliases": ["handbag"],
                        "tags": ["bag"],
                        "unicode": "1f45c"
                    },
                    {
                        "emoji": "💼",
                        "description": "briefcase",
                        "category": "People",
                        "aliases": ["briefcase"],
                        "tags": ["business"],
                        "unicode": "1f4bc"
                    },
                    {
                        "emoji": "👓",
                        "description": "glasses",
                        "category": "People",
                        "aliases": ["eyeglasses"],
                        "tags": ["glasses"],
                        "unicode": "1f453"
                    },
                    {
                        "emoji": "🕶",
                        "description": "sunglasses",
                        "category": "People",
                        "aliases": ["dark_sunglasses"],
                        "tags": [],
                        "unicode": "1f576"
                    },
                    {
                        "emoji": "🌂",
                        "description": "closed umbrella",
                        "category": "People",
                        "aliases": ["closed_umbrella"],
                        "tags": ["weather", "rain"],
                        "unicode": "1f302"
                    },
                    {
                        "emoji": "☂️",
                        "description": "umbrella",
                        "category": "People",
                        "aliases": ["open_umbrella"],
                        "tags": [],
                        "unicode": "2602"
                    },
                    {
                        "emoji": "🐶",
                        "description": "dog face",
                        "category": "Nature",
                        "aliases": ["dog"],
                        "tags": ["pet"],
                        "unicode": "1f436"
                    },
                    {
                        "emoji": "🐱",
                        "description": "cat face",
                        "category": "Nature",
                        "aliases": ["cat"],
                        "tags": ["pet"],
                        "unicode": "1f431"
                    },
                    {
                        "emoji": "🐭",
                        "description": "mouse face",
                        "category": "Nature",
                        "aliases": ["mouse"],
                        "tags": [],
                        "unicode": "1f42d"
                    },
                    {
                        "emoji": "🐹",
                        "description": "hamster face",
                        "category": "Nature",
                        "aliases": ["hamster"],
                        "tags": ["pet"],
                        "unicode": "1f439"
                    },
                    {
                        "emoji": "🐰",
                        "description": "rabbit face",
                        "category": "Nature",
                        "aliases": ["rabbit"],
                        "tags": ["bunny"],
                        "unicode": "1f430"
                    },
                    {
                        "emoji": "🦊",
                        "description": "fox face",
                        "category": "Nature",
                        "aliases": ["fox_face"],
                        "tags": [],
                        "unicode": "1f98a"
                    },
                    {
                        "emoji": "🐻",
                        "description": "bear face",
                        "category": "Nature",
                        "aliases": ["bear"],
                        "tags": [],
                        "unicode": "1f43b"
                    },
                    {
                        "emoji": "🐼",
                        "description": "panda face",
                        "category": "Nature",
                        "aliases": ["panda_face"],
                        "tags": [],
                        "unicode": "1f43c"
                    },
                    {
                        "emoji": "🐨",
                        "description": "koala",
                        "category": "Nature",
                        "aliases": ["koala"],
                        "tags": [],
                        "unicode": "1f428"
                    },
                    {
                        "emoji": "🐯",
                        "description": "tiger face",
                        "category": "Nature",
                        "aliases": ["tiger"],
                        "tags": [],
                        "unicode": "1f42f"
                    },
                    {
                        "emoji": "🦁",
                        "description": "lion face",
                        "category": "Nature",
                        "aliases": ["lion"],
                        "tags": [],
                        "unicode": "1f981"
                    },
                    {
                        "emoji": "🐮",
                        "description": "cow face",
                        "category": "Nature",
                        "aliases": ["cow"],
                        "tags": [],
                        "unicode": "1f42e"
                    },
                    {
                        "emoji": "🐷",
                        "description": "pig face",
                        "category": "Nature",
                        "aliases": ["pig"],
                        "tags": [],
                        "unicode": "1f437"
                    },
                    {
                        "emoji": "🐽",
                        "description": "pig nose",
                        "category": "Nature",
                        "aliases": ["pig_nose"],
                        "tags": [],
                        "unicode": "1f43d"
                    },
                    {
                        "emoji": "🐸",
                        "description": "frog face",
                        "category": "Nature",
                        "aliases": ["frog"],
                        "tags": [],
                        "unicode": "1f438"
                    },
                    {
                        "emoji": "🐵",
                        "description": "monkey face",
                        "category": "Nature",
                        "aliases": ["monkey_face"],
                        "tags": [],
                        "unicode": "1f435"
                    },
                    {
                        "emoji": "🙈",
                        "description": "see-no-evil monkey",
                        "category": "Nature",
                        "aliases": ["see_no_evil"],
                        "tags": ["monkey", "blind", "ignore"],
                        "unicode": "1f648"
                    },
                    {
                        "emoji": "🙉",
                        "description": "hear-no-evil monkey",
                        "category": "Nature",
                        "aliases": ["hear_no_evil"],
                        "tags": ["monkey", "deaf"],
                        "unicode": "1f649"
                    },
                    {
                        "emoji": "🙊",
                        "description": "speak-no-evil monkey",
                        "category": "Nature",
                        "aliases": ["speak_no_evil"],
                        "tags": ["monkey", "mute", "hush"],
                        "unicode": "1f64a"
                    },
                    {
                        "emoji": "🐒",
                        "description": "monkey",
                        "category": "Nature",
                        "aliases": ["monkey"],
                        "tags": [],
                        "unicode": "1f412"
                    },
                    {
                        "emoji": "🐔",
                        "description": "chicken",
                        "category": "Nature",
                        "aliases": ["chicken"],
                        "tags": [],
                        "unicode": "1f414"
                    },
                    {
                        "emoji": "🐧",
                        "description": "penguin",
                        "category": "Nature",
                        "aliases": ["penguin"],
                        "tags": [],
                        "unicode": "1f427"
                    },
                    {
                        "emoji": "🐦",
                        "description": "bird",
                        "category": "Nature",
                        "aliases": ["bird"],
                        "tags": [],
                        "unicode": "1f426"
                    },
                    {
                        "emoji": "🐤",
                        "description": "baby chick",
                        "category": "Nature",
                        "aliases": ["baby_chick"],
                        "tags": [],
                        "unicode": "1f424"
                    },
                    {
                        "emoji": "🐣",
                        "description": "hatching chick",
                        "category": "Nature",
                        "aliases": ["hatching_chick"],
                        "tags": [],
                        "unicode": "1f423"
                    },
                    {
                        "emoji": "🐥",
                        "description": "front-facing baby chick",
                        "category": "Nature",
                        "aliases": ["hatched_chick"],
                        "tags": [],
                        "unicode": "1f425"
                    },
                    {
                        "emoji": "🦆",
                        "description": "duck",
                        "category": "Nature",
                        "aliases": ["duck"],
                        "tags": [],
                        "unicode": "1f986"
                    },
                    {
                        "emoji": "🦅",
                        "description": "eagle",
                        "category": "Nature",
                        "aliases": ["eagle"],
                        "tags": [],
                        "unicode": "1f985"
                    },
                    {
                        "emoji": "🦉",
                        "description": "owl",
                        "category": "Nature",
                        "aliases": ["owl"],
                        "tags": [],
                        "unicode": "1f989"
                    },
                    {
                        "emoji": "🦇",
                        "description": "bat",
                        "category": "Nature",
                        "aliases": ["bat"],
                        "tags": [],
                        "unicode": "1f987"
                    },
                    {
                        "emoji": "🐺",
                        "description": "wolf face",
                        "category": "Nature",
                        "aliases": ["wolf"],
                        "tags": [],
                        "unicode": "1f43a"
                    },
                    {
                        "emoji": "🐗",
                        "description": "boar",
                        "category": "Nature",
                        "aliases": ["boar"],
                        "tags": [],
                        "unicode": "1f417"
                    },
                    {
                        "emoji": "🐴",
                        "description": "horse face",
                        "category": "Nature",
                        "aliases": ["horse"],
                        "tags": [],
                        "unicode": "1f434"
                    },
                    {
                        "emoji": "🦄",
                        "description": "unicorn face",
                        "category": "Nature",
                        "aliases": ["unicorn"],
                        "tags": [],
                        "unicode": "1f984"
                    },
                    {
                        "emoji": "🐝",
                        "description": "honeybee",
                        "category": "Nature",
                        "aliases": ["bee", "honeybee"],
                        "tags": [],
                        "unicode": "1f41d"
                    },
                    {
                        "emoji": "🐛",
                        "description": "bug",
                        "category": "Nature",
                        "aliases": ["bug"],
                        "tags": [],
                        "unicode": "1f41b"
                    },
                    {
                        "emoji": "🦋",
                        "description": "butterfly",
                        "category": "Nature",
                        "aliases": ["butterfly"],
                        "tags": [],
                        "unicode": "1f98b"
                    },
                    {
                        "emoji": "🐌",
                        "description": "snail",
                        "category": "Nature",
                        "aliases": ["snail"],
                        "tags": ["slow"],
                        "unicode": "1f40c"
                    },
                    {
                        "emoji": "🐚",
                        "description": "spiral shell",
                        "category": "Nature",
                        "aliases": ["shell"],
                        "tags": ["sea", "beach"],
                        "unicode": "1f41a"
                    },
                    {
                        "emoji": "🐞",
                        "description": "lady beetle",
                        "category": "Nature",
                        "aliases": ["beetle"],
                        "tags": ["bug"],
                        "unicode": "1f41e"
                    },
                    {
                        "emoji": "🐜",
                        "description": "ant",
                        "category": "Nature",
                        "aliases": ["ant"],
                        "tags": [],
                        "unicode": "1f41c"
                    },
                    {
                        "emoji": "🕷",
                        "description": "spider",
                        "category": "Nature",
                        "aliases": ["spider"],
                        "tags": [],
                        "unicode": "1f577"
                    },
                    {
                        "emoji": "🕸",
                        "description": "spider web",
                        "category": "Nature",
                        "aliases": ["spider_web"],
                        "tags": [],
                        "unicode": "1f578"
                    },
                    {
                        "emoji": "🐢",
                        "description": "turtle",
                        "category": "Nature",
                        "aliases": ["turtle"],
                        "tags": ["slow"],
                        "unicode": "1f422"
                    },
                    {
                        "emoji": "🐍",
                        "description": "snake",
                        "category": "Nature",
                        "aliases": ["snake"],
                        "tags": [],
                        "unicode": "1f40d"
                    },
                    {
                        "emoji": "🦎",
                        "description": "lizard",
                        "category": "Nature",
                        "aliases": ["lizard"],
                        "tags": [],
                        "unicode": "1f98e"
                    },
                    {
                        "emoji": "🦂",
                        "description": "scorpion",
                        "category": "Nature",
                        "aliases": ["scorpion"],
                        "tags": [],
                        "unicode": "1f982"
                    },
                    {
                        "emoji": "🦀",
                        "description": "crab",
                        "category": "Nature",
                        "aliases": ["crab"],
                        "tags": [],
                        "unicode": "1f980"
                    },
                    {
                        "emoji": "🦑",
                        "description": "squid",
                        "category": "Nature",
                        "aliases": ["squid"],
                        "tags": [],
                        "unicode": "1f991"
                    },
                    {
                        "emoji": "🐙",
                        "description": "octopus",
                        "category": "Nature",
                        "aliases": ["octopus"],
                        "tags": [],
                        "unicode": "1f419"
                    },
                    {
                        "emoji": "🦐",
                        "description": "shrimp",
                        "category": "Nature",
                        "aliases": ["shrimp"],
                        "tags": [],
                        "unicode": "1f990"
                    },
                    {
                        "emoji": "🐠",
                        "description": "tropical fish",
                        "category": "Nature",
                        "aliases": ["tropical_fish"],
                        "tags": [],
                        "unicode": "1f420"
                    },
                    {
                        "emoji": "🐟",
                        "description": "fish",
                        "category": "Nature",
                        "aliases": ["fish"],
                        "tags": [],
                        "unicode": "1f41f"
                    },
                    {
                        "emoji": "🐡",
                        "description": "blowfish",
                        "category": "Nature",
                        "aliases": ["blowfish"],
                        "tags": [],
                        "unicode": "1f421"
                    },
                    {
                        "emoji": "🐬",
                        "description": "dolphin",
                        "category": "Nature",
                        "aliases": ["dolphin", "flipper"],
                        "tags": [],
                        "unicode": "1f42c"
                    },
                    {
                        "emoji": "🦈",
                        "description": "shark",
                        "category": "Nature",
                        "aliases": ["shark"],
                        "tags": [],
                        "unicode": "1f988"
                    },
                    {
                        "emoji": "🐳",
                        "description": "spouting whale",
                        "category": "Nature",
                        "aliases": ["whale"],
                        "tags": ["sea"],
                        "unicode": "1f433"
                    },
                    {
                        "emoji": "🐋",
                        "description": "whale",
                        "category": "Nature",
                        "aliases": ["whale2"],
                        "tags": [],
                        "unicode": "1f40b"
                    },
                    {
                        "emoji": "🐊",
                        "description": "crocodile",
                        "category": "Nature",
                        "aliases": ["crocodile"],
                        "tags": [],
                        "unicode": "1f40a"
                    },
                    {
                        "emoji": "🐆",
                        "description": "leopard",
                        "category": "Nature",
                        "aliases": ["leopard"],
                        "tags": [],
                        "unicode": "1f406"
                    },
                    {
                        "emoji": "🐅",
                        "description": "tiger",
                        "category": "Nature",
                        "aliases": ["tiger2"],
                        "tags": [],
                        "unicode": "1f405"
                    },
                    {
                        "emoji": "🐃",
                        "description": "water buffalo",
                        "category": "Nature",
                        "aliases": ["water_buffalo"],
                        "tags": [],
                        "unicode": "1f403"
                    },
                    {
                        "emoji": "🐂",
                        "description": "ox",
                        "category": "Nature",
                        "aliases": ["ox"],
                        "tags": [],
                        "unicode": "1f402"
                    },
                    {
                        "emoji": "🐄",
                        "description": "cow",
                        "category": "Nature",
                        "aliases": ["cow2"],
                        "tags": [],
                        "unicode": "1f404"
                    },
                    {
                        "emoji": "🦌",
                        "description": "deer",
                        "category": "Nature",
                        "aliases": ["deer"],
                        "tags": [],
                        "unicode": "1f98c"
                    },
                    {
                        "emoji": "🐪",
                        "description": "camel",
                        "category": "Nature",
                        "aliases": ["dromedary_camel"],
                        "tags": ["desert"],
                        "unicode": "1f42a"
                    },
                    {
                        "emoji": "🐫",
                        "description": "two-hump camel",
                        "category": "Nature",
                        "aliases": ["camel"],
                        "tags": [],
                        "unicode": "1f42b"
                    },
                    {
                        "emoji": "🐘",
                        "description": "elephant",
                        "category": "Nature",
                        "aliases": ["elephant"],
                        "tags": [],
                        "unicode": "1f418"
                    },
                    {
                        "emoji": "🦏",
                        "description": "rhinoceros",
                        "category": "Nature",
                        "aliases": ["rhinoceros"],
                        "tags": [],
                        "unicode": "1f98f"
                    },
                    {
                        "emoji": "🦍",
                        "description": "gorilla",
                        "category": "Nature",
                        "aliases": ["gorilla"],
                        "tags": [],
                        "unicode": "1f98d"
                    },
                    {
                        "emoji": "🐎",
                        "description": "horse",
                        "category": "Nature",
                        "aliases": ["racehorse"],
                        "tags": ["speed"],
                        "unicode": "1f40e"
                    },
                    {
                        "emoji": "🐖",
                        "description": "pig",
                        "category": "Nature",
                        "aliases": ["pig2"],
                        "tags": [],
                        "unicode": "1f416"
                    },
                    {
                        "emoji": "🐐",
                        "description": "goat",
                        "category": "Nature",
                        "aliases": ["goat"],
                        "tags": [],
                        "unicode": "1f410"
                    },
                    {
                        "emoji": "🐏",
                        "description": "ram",
                        "category": "Nature",
                        "aliases": ["ram"],
                        "tags": [],
                        "unicode": "1f40f"
                    },
                    {
                        "emoji": "🐑",
                        "description": "sheep",
                        "category": "Nature",
                        "aliases": ["sheep"],
                        "tags": [],
                        "unicode": "1f411"
                    },
                    {
                        "emoji": "🐕",
                        "description": "dog",
                        "category": "Nature",
                        "aliases": ["dog2"],
                        "tags": [],
                        "unicode": "1f415"
                    },
                    {
                        "emoji": "🐩",
                        "description": "poodle",
                        "category": "Nature",
                        "aliases": ["poodle"],
                        "tags": ["dog"],
                        "unicode": "1f429"
                    },
                    {
                        "emoji": "🐈",
                        "description": "cat",
                        "category": "Nature",
                        "aliases": ["cat2"],
                        "tags": [],
                        "unicode": "1f408"
                    },
                    {
                        "emoji": "🐓",
                        "description": "rooster",
                        "category": "Nature",
                        "aliases": ["rooster"],
                        "tags": [],
                        "unicode": "1f413"
                    },
                    {
                        "emoji": "🦃",
                        "description": "turkey",
                        "category": "Nature",
                        "aliases": ["turkey"],
                        "tags": ["thanksgiving"],
                        "unicode": "1f983"
                    },
                    {
                        "emoji": "🕊",
                        "description": "dove",
                        "category": "Nature",
                        "aliases": ["dove"],
                        "tags": ["peace"],
                        "unicode": "1f54a"
                    },
                    {
                        "emoji": "🐇",
                        "description": "rabbit",
                        "category": "Nature",
                        "aliases": ["rabbit2"],
                        "tags": [],
                        "unicode": "1f407"
                    },
                    {
                        "emoji": "🐁",
                        "description": "mouse",
                        "category": "Nature",
                        "aliases": ["mouse2"],
                        "tags": [],
                        "unicode": "1f401"
                    },
                    {
                        "emoji": "🐀",
                        "description": "rat",
                        "category": "Nature",
                        "aliases": ["rat"],
                        "tags": [],
                        "unicode": "1f400"
                    },
                    {
                        "emoji": "🐿",
                        "description": "chipmunk",
                        "category": "Nature",
                        "aliases": ["chipmunk"],
                        "tags": [],
                        "unicode": "1f43f"
                    },
                    {
                        "emoji": "🐾",
                        "description": "paw prints",
                        "category": "Nature",
                        "aliases": ["feet", "paw_prints"],
                        "tags": [],
                        "unicode": "1f43e"
                    },
                    {
                        "emoji": "🐉",
                        "description": "dragon",
                        "category": "Nature",
                        "aliases": ["dragon"],
                        "tags": [],
                        "unicode": "1f409"
                    },
                    {
                        "emoji": "🐲",
                        "description": "dragon face",
                        "category": "Nature",
                        "aliases": ["dragon_face"],
                        "tags": [],
                        "unicode": "1f432"
                    },
                    {
                        "emoji": "🌵",
                        "description": "cactus",
                        "category": "Nature",
                        "aliases": ["cactus"],
                        "tags": [],
                        "unicode": "1f335"
                    },
                    {
                        "emoji": "🎄",
                        "description": "Christmas tree",
                        "category": "Nature",
                        "aliases": ["christmas_tree"],
                        "tags": [],
                        "unicode": "1f384"
                    },
                    {
                        "emoji": "🌲",
                        "description": "evergreen tree",
                        "category": "Nature",
                        "aliases": ["evergreen_tree"],
                        "tags": ["wood"],
                        "unicode": "1f332"
                    },
                    {
                        "emoji": "🌳",
                        "description": "deciduous tree",
                        "category": "Nature",
                        "aliases": ["deciduous_tree"],
                        "tags": ["wood"],
                        "unicode": "1f333"
                    },
                    {
                        "emoji": "🌴",
                        "description": "palm tree",
                        "category": "Nature",
                        "aliases": ["palm_tree"],
                        "tags": [],
                        "unicode": "1f334"
                    },
                    {
                        "emoji": "🌱",
                        "description": "seedling",
                        "category": "Nature",
                        "aliases": ["seedling"],
                        "tags": ["plant"],
                        "unicode": "1f331"
                    },
                    {
                        "emoji": "🌿",
                        "description": "herb",
                        "category": "Nature",
                        "aliases": ["herb"],
                        "tags": [],
                        "unicode": "1f33f"
                    },
                    {
                        "emoji": "☘️",
                        "description": "shamrock",
                        "category": "Nature",
                        "aliases": ["shamrock"],
                        "tags": [],
                        "unicode": "2618"
                    },
                    {
                        "emoji": "🍀",
                        "description": "four leaf clover",
                        "category": "Nature",
                        "aliases": ["four_leaf_clover"],
                        "tags": ["luck"],
                        "unicode": "1f340"
                    },
                    {
                        "emoji": "🎍",
                        "description": "pine decoration",
                        "category": "Nature",
                        "aliases": ["bamboo"],
                        "tags": [],
                        "unicode": "1f38d"
                    },
                    {
                        "emoji": "🎋",
                        "description": "tanabata tree",
                        "category": "Nature",
                        "aliases": ["tanabata_tree"],
                        "tags": [],
                        "unicode": "1f38b"
                    },
                    {
                        "emoji": "🍃",
                        "description": "leaf fluttering in wind",
                        "category": "Nature",
                        "aliases": ["leaves"],
                        "tags": ["leaf"],
                        "unicode": "1f343"
                    },
                    {
                        "emoji": "🍂",
                        "description": "fallen leaf",
                        "category": "Nature",
                        "aliases": ["fallen_leaf"],
                        "tags": ["autumn"],
                        "unicode": "1f342"
                    },
                    {
                        "emoji": "🍁",
                        "description": "maple leaf",
                        "category": "Nature",
                        "aliases": ["maple_leaf"],
                        "tags": ["canada"],
                        "unicode": "1f341"
                    },
                    {
                        "emoji": "🍄",
                        "description": "mushroom",
                        "category": "Nature",
                        "aliases": ["mushroom"],
                        "tags": [],
                        "unicode": "1f344"
                    },
                    {
                        "emoji": "🌾",
                        "description": "sheaf of rice",
                        "category": "Nature",
                        "aliases": ["ear_of_rice"],
                        "tags": [],
                        "unicode": "1f33e"
                    },
                    {
                        "emoji": "💐",
                        "description": "bouquet",
                        "category": "Nature",
                        "aliases": ["bouquet"],
                        "tags": ["flowers"],
                        "unicode": "1f490"
                    },
                    {
                        "emoji": "🌷",
                        "description": "tulip",
                        "category": "Nature",
                        "aliases": ["tulip"],
                        "tags": ["flower"],
                        "unicode": "1f337"
                    },
                    {
                        "emoji": "🌹",
                        "description": "rose",
                        "category": "Nature",
                        "aliases": ["rose"],
                        "tags": ["flower"],
                        "unicode": "1f339"
                    },
                    {
                        "emoji": "🥀",
                        "description": "wilted flower",
                        "category": "Nature",
                        "aliases": ["wilted_flower"],
                        "tags": [],
                        "unicode": "1f940"
                    },
                    {
                        "emoji": "🌻",
                        "description": "sunflower",
                        "category": "Nature",
                        "aliases": ["sunflower"],
                        "tags": [],
                        "unicode": "1f33b"
                    },
                    {
                        "emoji": "🌼",
                        "description": "blossom",
                        "category": "Nature",
                        "aliases": ["blossom"],
                        "tags": [],
                        "unicode": "1f33c"
                    },
                    {
                        "emoji": "🌸",
                        "description": "cherry blossom",
                        "category": "Nature",
                        "aliases": ["cherry_blossom"],
                        "tags": ["flower", "spring"],
                        "unicode": "1f338"
                    },
                    {
                        "emoji": "🌺",
                        "description": "hibiscus",
                        "category": "Nature",
                        "aliases": ["hibiscus"],
                        "tags": [],
                        "unicode": "1f33a"
                    },
                    {
                        "emoji": "🌎",
                        "description": "globe showing Americas",
                        "category": "Nature",
                        "aliases": ["earth_americas"],
                        "tags": ["globe", "world", "international"],
                        "unicode": "1f30e"
                    },
                    {
                        "emoji": "🌍",
                        "description": "globe showing Europe-Africa",
                        "category": "Nature",
                        "aliases": ["earth_africa"],
                        "tags": ["globe", "world", "international"],
                        "unicode": "1f30d"
                    },
                    {
                        "emoji": "🌏",
                        "description": "globe showing Asia-Australia",
                        "category": "Nature",
                        "aliases": ["earth_asia"],
                        "tags": ["globe", "world", "international"],
                        "unicode": "1f30f"
                    },
                    {
                        "emoji": "🌕",
                        "description": "full moon",
                        "category": "Nature",
                        "aliases": ["full_moon"],
                        "tags": [],
                        "unicode": "1f315"
                    },
                    {
                        "emoji": "🌖",
                        "description": "waning gibbous moon",
                        "category": "Nature",
                        "aliases": ["waning_gibbous_moon"],
                        "tags": [],
                        "unicode": "1f316"
                    },
                    {
                        "emoji": "🌗",
                        "description": "last quarter moon",
                        "category": "Nature",
                        "aliases": ["last_quarter_moon"],
                        "tags": [],
                        "unicode": "1f317"
                    },
                    {
                        "emoji": "🌘",
                        "description": "waning crescent moon",
                        "category": "Nature",
                        "aliases": ["waning_crescent_moon"],
                        "tags": [],
                        "unicode": "1f318"
                    },
                    {
                        "emoji": "🌑",
                        "description": "new moon",
                        "category": "Nature",
                        "aliases": ["new_moon"],
                        "tags": [],
                        "unicode": "1f311"
                    },
                    {
                        "emoji": "🌒",
                        "description": "waxing crescent moon",
                        "category": "Nature",
                        "aliases": ["waxing_crescent_moon"],
                        "tags": [],
                        "unicode": "1f312"
                    },
                    {
                        "emoji": "🌓",
                        "description": "first quarter moon",
                        "category": "Nature",
                        "aliases": ["first_quarter_moon"],
                        "tags": [],
                        "unicode": "1f313"
                    },
                    {
                        "emoji": "🌔",
                        "description": "waxing gibbous moon",
                        "category": "Nature",
                        "aliases": ["moon", "waxing_gibbous_moon"],
                        "tags": [],
                        "unicode": "1f314"
                    },
                    {
                        "emoji": "🌚",
                        "description": "new moon face",
                        "category": "Nature",
                        "aliases": ["new_moon_with_face"],
                        "tags": [],
                        "unicode": "1f31a"
                    },
                    {
                        "emoji": "🌝",
                        "description": "full moon with face",
                        "category": "Nature",
                        "aliases": ["full_moon_with_face"],
                        "tags": [],
                        "unicode": "1f31d"
                    },
                    {
                        "emoji": "🌞",
                        "description": "sun with face",
                        "category": "Nature",
                        "aliases": ["sun_with_face"],
                        "tags": ["summer"],
                        "unicode": "1f31e"
                    },
                    {
                        "emoji": "🌛",
                        "description": "first quarter moon with face",
                        "category": "Nature",
                        "aliases": ["first_quarter_moon_with_face"],
                        "tags": [],
                        "unicode": "1f31b"
                    },
                    {
                        "emoji": "🌜",
                        "description": "last quarter moon with face",
                        "category": "Nature",
                        "aliases": ["last_quarter_moon_with_face"],
                        "tags": [],
                        "unicode": "1f31c"
                    },
                    {
                        "emoji": "🌙",
                        "description": "crescent moon",
                        "category": "Nature",
                        "aliases": ["crescent_moon"],
                        "tags": ["night"],
                        "unicode": "1f319"
                    },
                    {
                        "emoji": "💫",
                        "description": "dizzy",
                        "category": "Nature",
                        "aliases": ["dizzy"],
                        "tags": ["star"],
                        "unicode": "1f4ab"
                    },
                    {
                        "emoji": "⭐️",
                        "description": "white medium star",
                        "category": "Nature",
                        "aliases": ["star"],
                        "tags": [],
                        "unicode": "2b50"
                    },
                    {
                        "emoji": "🌟",
                        "description": "glowing star",
                        "category": "Nature",
                        "aliases": ["star2"],
                        "tags": [],
                        "unicode": "1f31f"
                    },
                    {
                        "emoji": "✨",
                        "description": "sparkles",
                        "category": "Nature",
                        "aliases": ["sparkles"],
                        "tags": ["shiny"],
                        "unicode": "2728"
                    },
                    {
                        "emoji": "⚡️",
                        "description": "high voltage",
                        "category": "Nature",
                        "aliases": ["zap"],
                        "tags": ["lightning", "thunder"],
                        "unicode": "26a1"
                    },
                    {
                        "emoji": "🔥",
                        "description": "fire",
                        "category": "Nature",
                        "aliases": ["fire"],
                        "tags": ["burn"],
                        "unicode": "1f525"
                    },
                    {
                        "emoji": "💥",
                        "description": "collision",
                        "category": "Nature",
                        "aliases": ["boom", "collision"],
                        "tags": ["explode"],
                        "unicode": "1f4a5"
                    },
                    {
                        "emoji": "☄",
                        "description": "comet",
                        "category": "Nature",
                        "aliases": ["comet"],
                        "tags": [],
                        "unicode": "2604"
                    },
                    {
                        "emoji": "☀️",
                        "description": "sun",
                        "category": "Nature",
                        "aliases": ["sunny"],
                        "tags": ["weather"],
                        "unicode": "2600"
                    },
                    {
                        "emoji": "🌤",
                        "description": "sun behind small cloud",
                        "category": "Nature",
                        "aliases": ["sun_behind_small_cloud"],
                        "tags": [],
                        "unicode": "1f324"
                    },
                    {
                        "emoji": "⛅️",
                        "description": "sun behind cloud",
                        "category": "Nature",
                        "aliases": ["partly_sunny"],
                        "tags": ["weather", "cloud"],
                        "unicode": "26c5"
                    },
                    {
                        "emoji": "🌥",
                        "description": "sun behind large cloud",
                        "category": "Nature",
                        "aliases": ["sun_behind_large_cloud"],
                        "tags": [],
                        "unicode": "1f325"
                    },
                    {
                        "emoji": "🌦",
                        "description": "sun behind rain cloud",
                        "category": "Nature",
                        "aliases": ["sun_behind_rain_cloud"],
                        "tags": [],
                        "unicode": "1f326"
                    },
                    {
                        "emoji": "🌈",
                        "description": "rainbow",
                        "category": "Nature",
                        "aliases": ["rainbow"],
                        "tags": [],
                        "unicode": "1f308"
                    },
                    {
                        "emoji": "☁️",
                        "description": "cloud",
                        "category": "Nature",
                        "aliases": ["cloud"],
                        "tags": [],
                        "unicode": "2601"
                    },
                    {
                        "emoji": "🌧",
                        "description": "cloud with rain",
                        "category": "Nature",
                        "aliases": ["cloud_with_rain"],
                        "tags": [],
                        "unicode": "1f327"
                    },
                    {
                        "emoji": "⛈",
                        "description": "cloud with lightning and rain",
                        "category": "Nature",
                        "aliases": ["cloud_with_lightning_and_rain"],
                        "tags": [],
                        "unicode": "26c8"
                    },
                    {
                        "emoji": "🌩",
                        "description": "cloud with lightning",
                        "category": "Nature",
                        "aliases": ["cloud_with_lightning"],
                        "tags": [],
                        "unicode": "1f329"
                    },
                    {
                        "emoji": "🌨",
                        "description": "cloud with snow",
                        "category": "Nature",
                        "aliases": ["cloud_with_snow"],
                        "tags": [],
                        "unicode": "1f328"
                    },
                    {
                        "emoji": "☃️",
                        "description": "snowman",
                        "category": "Nature",
                        "aliases": ["snowman_with_snow"],
                        "tags": ["winter", "christmas"],
                        "unicode": "2603"
                    },
                    {
                        "emoji": "⛄️",
                        "description": "snowman without snow",
                        "category": "Nature",
                        "aliases": ["snowman"],
                        "tags": ["winter"],
                        "unicode": "26c4"
                    },
                    {
                        "emoji": "❄️",
                        "description": "snowflake",
                        "category": "Nature",
                        "aliases": ["snowflake"],
                        "tags": ["winter", "cold", "weather"],
                        "unicode": "2744"
                    },
                    {
                        "emoji": "🌬",
                        "description": "wind face",
                        "category": "Nature",
                        "aliases": ["wind_face"],
                        "tags": [],
                        "unicode": "1f32c"
                    },
                    {
                        "emoji": "💨",
                        "description": "dashing away",
                        "category": "Nature",
                        "aliases": ["dash"],
                        "tags": ["wind", "blow", "fast"],
                        "unicode": "1f4a8"
                    },
                    {
                        "emoji": "🌪",
                        "description": "tornado",
                        "category": "Nature",
                        "aliases": ["tornado"],
                        "tags": [],
                        "unicode": "1f32a"
                    },
                    {
                        "emoji": "🌫",
                        "description": "fog",
                        "category": "Nature",
                        "aliases": ["fog"],
                        "tags": [],
                        "unicode": "1f32b"
                    },
                    {
                        "emoji": "🌊",
                        "description": "water wave",
                        "category": "Nature",
                        "aliases": ["ocean"],
                        "tags": ["sea"],
                        "unicode": "1f30a"
                    },
                    {
                        "emoji": "💧",
                        "description": "droplet",
                        "category": "Nature",
                        "aliases": ["droplet"],
                        "tags": ["water"],
                        "unicode": "1f4a7"
                    },
                    {
                        "emoji": "💦",
                        "description": "sweat droplets",
                        "category": "Nature",
                        "aliases": ["sweat_drops"],
                        "tags": ["water", "workout"],
                        "unicode": "1f4a6"
                    },
                    {
                        "emoji": "☔️",
                        "description": "umbrella with rain drops",
                        "category": "Nature",
                        "aliases": ["umbrella"],
                        "tags": ["rain", "weather"],
                        "unicode": "2614"
                    },
                    {
                        "emoji": "🍏",
                        "description": "green apple",
                        "category": "Foods",
                        "aliases": ["green_apple"],
                        "tags": ["fruit"],
                        "unicode": "1f34f"
                    },
                    {
                        "emoji": "🍎",
                        "description": "red apple",
                        "category": "Foods",
                        "aliases": ["apple"],
                        "tags": [],
                        "unicode": "1f34e"
                    },
                    {
                        "emoji": "🍐",
                        "description": "pear",
                        "category": "Foods",
                        "aliases": ["pear"],
                        "tags": [],
                        "unicode": "1f350"
                    },
                    {
                        "emoji": "🍊",
                        "description": "tangerine",
                        "category": "Foods",
                        "aliases": ["tangerine", "orange", "mandarin"],
                        "tags": [],
                        "unicode": "1f34a"
                    },
                    {
                        "emoji": "🍋",
                        "description": "lemon",
                        "category": "Foods",
                        "aliases": ["lemon"],
                        "tags": [],
                        "unicode": "1f34b"
                    },
                    {
                        "emoji": "🍌",
                        "description": "banana",
                        "category": "Foods",
                        "aliases": ["banana"],
                        "tags": ["fruit"],
                        "unicode": "1f34c"
                    },
                    {
                        "emoji": "🍉",
                        "description": "watermelon",
                        "category": "Foods",
                        "aliases": ["watermelon"],
                        "tags": [],
                        "unicode": "1f349"
                    },
                    {
                        "emoji": "🍇",
                        "description": "grapes",
                        "category": "Foods",
                        "aliases": ["grapes"],
                        "tags": [],
                        "unicode": "1f347"
                    },
                    {
                        "emoji": "🍓",
                        "description": "strawberry",
                        "category": "Foods",
                        "aliases": ["strawberry"],
                        "tags": ["fruit"],
                        "unicode": "1f353"
                    },
                    {
                        "emoji": "🍈",
                        "description": "melon",
                        "category": "Foods",
                        "aliases": ["melon"],
                        "tags": [],
                        "unicode": "1f348"
                    },
                    {
                        "emoji": "🍒",
                        "description": "cherries",
                        "category": "Foods",
                        "aliases": ["cherries"],
                        "tags": ["fruit"],
                        "unicode": "1f352"
                    },
                    {
                        "emoji": "🍑",
                        "description": "peach",
                        "category": "Foods",
                        "aliases": ["peach"],
                        "tags": [],
                        "unicode": "1f351"
                    },
                    {
                        "emoji": "🍍",
                        "description": "pineapple",
                        "category": "Foods",
                        "aliases": ["pineapple"],
                        "tags": [],
                        "unicode": "1f34d"
                    },
                    {
                        "emoji": "🥝",
                        "description": "kiwi fruit",
                        "category": "Foods",
                        "aliases": ["kiwi_fruit"],
                        "tags": [],
                        "unicode": "1f95d"
                    },
                    {
                        "emoji": "🥑",
                        "description": "avocado",
                        "category": "Foods",
                        "aliases": ["avocado"],
                        "tags": [],
                        "unicode": "1f951"
                    },
                    {
                        "emoji": "🍅",
                        "description": "tomato",
                        "category": "Foods",
                        "aliases": ["tomato"],
                        "tags": [],
                        "unicode": "1f345"
                    },
                    {
                        "emoji": "🍆",
                        "description": "eggplant",
                        "category": "Foods",
                        "aliases": ["eggplant"],
                        "tags": ["aubergine"],
                        "unicode": "1f346"
                    },
                    {
                        "emoji": "🥒",
                        "description": "cucumber",
                        "category": "Foods",
                        "aliases": ["cucumber"],
                        "tags": [],
                        "unicode": "1f952"
                    },
                    {
                        "emoji": "🥕",
                        "description": "carrot",
                        "category": "Foods",
                        "aliases": ["carrot"],
                        "tags": [],
                        "unicode": "1f955"
                    },
                    {
                        "emoji": "🌽",
                        "description": "ear of corn",
                        "category": "Foods",
                        "aliases": ["corn"],
                        "tags": [],
                        "unicode": "1f33d"
                    },
                    {
                        "emoji": "🌶",
                        "description": "hot pepper",
                        "category": "Foods",
                        "aliases": ["hot_pepper"],
                        "tags": ["spicy"],
                        "unicode": "1f336"
                    },
                    {
                        "emoji": "🥔",
                        "description": "potato",
                        "category": "Foods",
                        "aliases": ["potato"],
                        "tags": [],
                        "unicode": "1f954"
                    },
                    {
                        "emoji": "🍠",
                        "description": "roasted sweet potato",
                        "category": "Foods",
                        "aliases": ["sweet_potato"],
                        "tags": [],
                        "unicode": "1f360"
                    },
                    {
                        "emoji": "🌰",
                        "description": "chestnut",
                        "category": "Foods",
                        "aliases": ["chestnut"],
                        "tags": [],
                        "unicode": "1f330"
                    },
                    {
                        "emoji": "🥜",
                        "description": "peanuts",
                        "category": "Foods",
                        "aliases": ["peanuts"],
                        "tags": [],
                        "unicode": "1f95c"
                    },
                    {
                        "emoji": "🍯",
                        "description": "honey pot",
                        "category": "Foods",
                        "aliases": ["honey_pot"],
                        "tags": [],
                        "unicode": "1f36f"
                    },
                    {
                        "emoji": "🥐",
                        "description": "croissant",
                        "category": "Foods",
                        "aliases": ["croissant"],
                        "tags": [],
                        "unicode": "1f950"
                    },
                    {
                        "emoji": "🍞",
                        "description": "bread",
                        "category": "Foods",
                        "aliases": ["bread"],
                        "tags": ["toast"],
                        "unicode": "1f35e"
                    },
                    {
                        "emoji": "🥖",
                        "description": "baguette bread",
                        "category": "Foods",
                        "aliases": ["baguette_bread"],
                        "tags": [],
                        "unicode": "1f956"
                    },
                    {
                        "emoji": "🧀",
                        "description": "cheese wedge",
                        "category": "Foods",
                        "aliases": ["cheese"],
                        "tags": [],
                        "unicode": "1f9c0"
                    },
                    {
                        "emoji": "🥚",
                        "description": "egg",
                        "category": "Foods",
                        "aliases": ["egg"],
                        "tags": [],
                        "unicode": "1f95a"
                    },
                    {
                        "emoji": "🍳",
                        "description": "cooking",
                        "category": "Foods",
                        "aliases": ["fried_egg"],
                        "tags": ["breakfast"],
                        "unicode": "1f373"
                    },
                    {
                        "emoji": "🥓",
                        "description": "bacon",
                        "category": "Foods",
                        "aliases": ["bacon"],
                        "tags": [],
                        "unicode": "1f953"
                    },
                    {
                        "emoji": "🥞",
                        "description": "pancakes",
                        "category": "Foods",
                        "aliases": ["pancakes"],
                        "tags": [],
                        "unicode": "1f95e"
                    },
                    {
                        "emoji": "🍤",
                        "description": "fried shrimp",
                        "category": "Foods",
                        "aliases": ["fried_shrimp"],
                        "tags": ["tempura"],
                        "unicode": "1f364"
                    },
                    {
                        "emoji": "🍗",
                        "description": "poultry leg",
                        "category": "Foods",
                        "aliases": ["poultry_leg"],
                        "tags": ["meat", "chicken"],
                        "unicode": "1f357"
                    },
                    {
                        "emoji": "🍖",
                        "description": "meat on bone",
                        "category": "Foods",
                        "aliases": ["meat_on_bone"],
                        "tags": [],
                        "unicode": "1f356"
                    },
                    {
                        "emoji": "🍕",
                        "description": "pizza",
                        "category": "Foods",
                        "aliases": ["pizza"],
                        "tags": [],
                        "unicode": "1f355"
                    },
                    {
                        "emoji": "🌭",
                        "description": "hot dog",
                        "category": "Foods",
                        "aliases": ["hotdog"],
                        "tags": [],
                        "unicode": "1f32d"
                    },
                    {
                        "emoji": "🍔",
                        "description": "hamburger",
                        "category": "Foods",
                        "aliases": ["hamburger"],
                        "tags": ["burger"],
                        "unicode": "1f354"
                    },
                    {
                        "emoji": "🍟",
                        "description": "french fries",
                        "category": "Foods",
                        "aliases": ["fries"],
                        "tags": [],
                        "unicode": "1f35f"
                    },
                    {
                        "emoji": "🥙",
                        "description": "stuffed flatbread",
                        "category": "Foods",
                        "aliases": ["stuffed_flatbread"],
                        "tags": [],
                        "unicode": "1f959"
                    },
                    {
                        "emoji": "🌮",
                        "description": "taco",
                        "category": "Foods",
                        "aliases": ["taco"],
                        "tags": [],
                        "unicode": "1f32e"
                    },
                    {
                        "emoji": "🌯",
                        "description": "burrito",
                        "category": "Foods",
                        "aliases": ["burrito"],
                        "tags": [],
                        "unicode": "1f32f"
                    },
                    {
                        "emoji": "🥗",
                        "description": "green salad",
                        "category": "Foods",
                        "aliases": ["green_salad"],
                        "tags": [],
                        "unicode": "1f957"
                    },
                    {
                        "emoji": "🥘",
                        "description": "shallow pan of food",
                        "category": "Foods",
                        "aliases": ["shallow_pan_of_food"],
                        "tags": ["paella", "curry"],
                        "unicode": "1f958"
                    },
                    {
                        "emoji": "🍝",
                        "description": "spaghetti",
                        "category": "Foods",
                        "aliases": ["spaghetti"],
                        "tags": ["pasta"],
                        "unicode": "1f35d"
                    },
                    {
                        "emoji": "🍜",
                        "description": "steaming bowl",
                        "category": "Foods",
                        "aliases": ["ramen"],
                        "tags": ["noodle"],
                        "unicode": "1f35c"
                    },
                    {
                        "emoji": "🍲",
                        "description": "pot of food",
                        "category": "Foods",
                        "aliases": ["stew"],
                        "tags": [],
                        "unicode": "1f372"
                    },
                    {
                        "emoji": "🍥",
                        "description": "fish cake with swirl",
                        "category": "Foods",
                        "aliases": ["fish_cake"],
                        "tags": [],
                        "unicode": "1f365"
                    },
                    {
                        "emoji": "🍣",
                        "description": "sushi",
                        "category": "Foods",
                        "aliases": ["sushi"],
                        "tags": [],
                        "unicode": "1f363"
                    },
                    {
                        "emoji": "🍱",
                        "description": "bento box",
                        "category": "Foods",
                        "aliases": ["bento"],
                        "tags": [],
                        "unicode": "1f371"
                    },
                    {
                        "emoji": "🍛",
                        "description": "curry rice",
                        "category": "Foods",
                        "aliases": ["curry"],
                        "tags": [],
                        "unicode": "1f35b"
                    },
                    {
                        "emoji": "🍚",
                        "description": "cooked rice",
                        "category": "Foods",
                        "aliases": ["rice"],
                        "tags": [],
                        "unicode": "1f35a"
                    },
                    {
                        "emoji": "🍙",
                        "description": "rice ball",
                        "category": "Foods",
                        "aliases": ["rice_ball"],
                        "tags": [],
                        "unicode": "1f359"
                    },
                    {
                        "emoji": "🍘",
                        "description": "rice cracker",
                        "category": "Foods",
                        "aliases": ["rice_cracker"],
                        "tags": [],
                        "unicode": "1f358"
                    },
                    {
                        "emoji": "🍢",
                        "description": "oden",
                        "category": "Foods",
                        "aliases": ["oden"],
                        "tags": [],
                        "unicode": "1f362"
                    },
                    {
                        "emoji": "🍡",
                        "description": "dango",
                        "category": "Foods",
                        "aliases": ["dango"],
                        "tags": [],
                        "unicode": "1f361"
                    },
                    {
                        "emoji": "🍧",
                        "description": "shaved ice",
                        "category": "Foods",
                        "aliases": ["shaved_ice"],
                        "tags": [],
                        "unicode": "1f367"
                    },
                    {
                        "emoji": "🍨",
                        "description": "ice cream",
                        "category": "Foods",
                        "aliases": ["ice_cream"],
                        "tags": [],
                        "unicode": "1f368"
                    },
                    {
                        "emoji": "🍦",
                        "description": "soft ice cream",
                        "category": "Foods",
                        "aliases": ["icecream"],
                        "tags": [],
                        "unicode": "1f366"
                    },
                    {
                        "emoji": "🍰",
                        "description": "shortcake",
                        "category": "Foods",
                        "aliases": ["cake"],
                        "tags": ["dessert"],
                        "unicode": "1f370"
                    },
                    {
                        "emoji": "🎂",
                        "description": "birthday cake",
                        "category": "Foods",
                        "aliases": ["birthday"],
                        "tags": ["party"],
                        "unicode": "1f382"
                    },
                    {
                        "emoji": "🍮",
                        "description": "custard",
                        "category": "Foods",
                        "aliases": ["custard"],
                        "tags": [],
                        "unicode": "1f36e"
                    },
                    {
                        "emoji": "🍭",
                        "description": "lollipop",
                        "category": "Foods",
                        "aliases": ["lollipop"],
                        "tags": [],
                        "unicode": "1f36d"
                    },
                    {
                        "emoji": "🍬",
                        "description": "candy",
                        "category": "Foods",
                        "aliases": ["candy"],
                        "tags": ["sweet"],
                        "unicode": "1f36c"
                    },
                    {
                        "emoji": "🍫",
                        "description": "chocolate bar",
                        "category": "Foods",
                        "aliases": ["chocolate_bar"],
                        "tags": [],
                        "unicode": "1f36b"
                    },
                    {
                        "emoji": "🍿",
                        "description": "popcorn",
                        "category": "Foods",
                        "aliases": ["popcorn"],
                        "tags": [],
                        "unicode": "1f37f"
                    },
                    {
                        "emoji": "🍩",
                        "description": "doughnut",
                        "category": "Foods",
                        "aliases": ["doughnut"],
                        "tags": [],
                        "unicode": "1f369"
                    },
                    {
                        "emoji": "🍪",
                        "description": "cookie",
                        "category": "Foods",
                        "aliases": ["cookie"],
                        "tags": [],
                        "unicode": "1f36a"
                    },
                    {
                        "emoji": "🥛",
                        "description": "glass of milk",
                        "category": "Foods",
                        "aliases": ["milk_glass"],
                        "tags": [],
                        "unicode": "1f95b"
                    },
                    {
                        "emoji": "🍼",
                        "description": "baby bottle",
                        "category": "Foods",
                        "aliases": ["baby_bottle"],
                        "tags": ["milk"],
                        "unicode": "1f37c"
                    },
                    {
                        "emoji": "☕️",
                        "description": "hot beverage",
                        "category": "Foods",
                        "aliases": ["coffee"],
                        "tags": ["cafe", "espresso"],
                        "unicode": "2615"
                    },
                    {
                        "emoji": "🍵",
                        "description": "teacup without handle",
                        "category": "Foods",
                        "aliases": ["tea"],
                        "tags": ["green", "breakfast"],
                        "unicode": "1f375"
                    },
                    {
                        "emoji": "🍶",
                        "description": "sake",
                        "category": "Foods",
                        "aliases": ["sake"],
                        "tags": [],
                        "unicode": "1f376"
                    },
                    {
                        "emoji": "🍺",
                        "description": "beer mug",
                        "category": "Foods",
                        "aliases": ["beer"],
                        "tags": ["drink"],
                        "unicode": "1f37a"
                    },
                    {
                        "emoji": "🍻",
                        "description": "clinking beer mugs",
                        "category": "Foods",
                        "aliases": ["beers"],
                        "tags": ["drinks"],
                        "unicode": "1f37b"
                    },
                    {
                        "emoji": "🥂",
                        "description": "clinking glasses",
                        "category": "Foods",
                        "aliases": ["clinking_glasses"],
                        "tags": ["cheers", "toast"],
                        "unicode": "1f942"
                    },
                    {
                        "emoji": "🍷",
                        "description": "wine glass",
                        "category": "Foods",
                        "aliases": ["wine_glass"],
                        "tags": [],
                        "unicode": "1f377"
                    },
                    {
                        "emoji": "🥃",
                        "description": "tumbler glass",
                        "category": "Foods",
                        "aliases": ["tumbler_glass"],
                        "tags": ["whisky"],
                        "unicode": "1f943"
                    },
                    {
                        "emoji": "🍸",
                        "description": "cocktail glass",
                        "category": "Foods",
                        "aliases": ["cocktail"],
                        "tags": ["drink"],
                        "unicode": "1f378"
                    },
                    {
                        "emoji": "🍹",
                        "description": "tropical drink",
                        "category": "Foods",
                        "aliases": ["tropical_drink"],
                        "tags": ["summer", "vacation"],
                        "unicode": "1f379"
                    },
                    {
                        "emoji": "🍾",
                        "description": "bottle with popping cork",
                        "category": "Foods",
                        "aliases": ["champagne"],
                        "tags": ["bottle", "bubbly", "celebration"],
                        "unicode": "1f37e"
                    },
                    {
                        "emoji": "🥄",
                        "description": "spoon",
                        "category": "Foods",
                        "aliases": ["spoon"],
                        "tags": [],
                        "unicode": "1f944"
                    },
                    {
                        "emoji": "🍴",
                        "description": "fork and knife",
                        "category": "Foods",
                        "aliases": ["fork_and_knife"],
                        "tags": ["cutlery"],
                        "unicode": "1f374"
                    },
                    {
                        "emoji": "🍽",
                        "description": "fork and knife with plate",
                        "category": "Foods",
                        "aliases": ["plate_with_cutlery"],
                        "tags": ["dining", "dinner"],
                        "unicode": "1f37d"
                    },
                    {
                        "emoji": "⚽️",
                        "description": "soccer ball",
                        "category": "Activity",
                        "aliases": ["soccer"],
                        "tags": ["sports"],
                        "unicode": "26bd"
                    },
                    {
                        "emoji": "🏀",
                        "description": "basketball",
                        "category": "Activity",
                        "aliases": ["basketball"],
                        "tags": ["sports"],
                        "unicode": "1f3c0"
                    },
                    {
                        "emoji": "🏈",
                        "description": "american football",
                        "category": "Activity",
                        "aliases": ["football"],
                        "tags": ["sports"],
                        "unicode": "1f3c8"
                    },
                    {
                        "emoji": "⚾️",
                        "description": "baseball",
                        "category": "Activity",
                        "aliases": ["baseball"],
                        "tags": ["sports"],
                        "unicode": "26be"
                    },
                    {
                        "emoji": "🎾",
                        "description": "tennis",
                        "category": "Activity",
                        "aliases": ["tennis"],
                        "tags": ["sports"],
                        "unicode": "1f3be"
                    },
                    {
                        "emoji": "🏐",
                        "description": "volleyball",
                        "category": "Activity",
                        "aliases": ["volleyball"],
                        "tags": [],
                        "unicode": "1f3d0"
                    },
                    {
                        "emoji": "🏉",
                        "description": "rugby football",
                        "category": "Activity",
                        "aliases": ["rugby_football"],
                        "tags": [],
                        "unicode": "1f3c9"
                    },
                    {
                        "emoji": "🎱",
                        "description": "pool 8 ball",
                        "category": "Activity",
                        "aliases": ["8ball"],
                        "tags": ["pool", "billiards"],
                        "unicode": "1f3b1"
                    },
                    {
                        "emoji": "🏓",
                        "description": "ping pong",
                        "category": "Activity",
                        "aliases": ["ping_pong"],
                        "tags": [],
                        "unicode": "1f3d3"
                    },
                    {
                        "emoji": "🏸",
                        "description": "badminton",
                        "category": "Activity",
                        "aliases": ["badminton"],
                        "tags": [],
                        "unicode": "1f3f8"
                    },
                    {
                        "emoji": "🥅",
                        "description": "goal net",
                        "category": "Activity",
                        "aliases": ["goal_net"],
                        "tags": [],
                        "unicode": "1f945"
                    },
                    {
                        "emoji": "🏒",
                        "description": "ice hockey",
                        "category": "Activity",
                        "aliases": ["ice_hockey"],
                        "tags": [],
                        "unicode": "1f3d2"
                    },
                    {
                        "emoji": "🏑",
                        "description": "field hockey",
                        "category": "Activity",
                        "aliases": ["field_hockey"],
                        "tags": [],
                        "unicode": "1f3d1"
                    },
                    {
                        "emoji": "🏏",
                        "description": "cricket",
                        "category": "Activity",
                        "aliases": ["cricket"],
                        "tags": [],
                        "unicode": "1f3cf"
                    },
                    {
                        "emoji": "⛳️",
                        "description": "flag in hole",
                        "category": "Activity",
                        "aliases": ["golf"],
                        "tags": [],
                        "unicode": "26f3"
                    },
                    {
                        "emoji": "🏹",
                        "description": "bow and arrow",
                        "category": "Activity",
                        "aliases": ["bow_and_arrow"],
                        "tags": ["archery"],
                        "unicode": "1f3f9"
                    },
                    {
                        "emoji": "🎣",
                        "description": "fishing pole",
                        "category": "Activity",
                        "aliases": ["fishing_pole_and_fish"],
                        "tags": [],
                        "unicode": "1f3a3"
                    },
                    {
                        "emoji": "🥊",
                        "description": "boxing glove",
                        "category": "Activity",
                        "aliases": ["boxing_glove"],
                        "tags": [],
                        "unicode": "1f94a"
                    },
                    {
                        "emoji": "🥋",
                        "description": "martial arts uniform",
                        "category": "Activity",
                        "aliases": ["martial_arts_uniform"],
                        "tags": [],
                        "unicode": "1f94b"
                    },
                    {
                        "emoji": "⛸",
                        "description": "ice skate",
                        "category": "Activity",
                        "aliases": ["ice_skate"],
                        "tags": ["skating"],
                        "unicode": "26f8"
                    },
                    {
                        "emoji": "🎿",
                        "description": "skis",
                        "category": "Activity",
                        "aliases": ["ski"],
                        "tags": [],
                        "unicode": "1f3bf"
                    },
                    {
                        "emoji": "⛷",
                        "description": "skier",
                        "category": "Activity",
                        "aliases": ["skier"],
                        "tags": [],
                        "unicode": "26f7"
                    },
                    {
                        "emoji": "🏂",
                        "description": "snowboarder",
                        "category": "Activity",
                        "aliases": ["snowboarder"],
                        "tags": [],
                        "unicode": "1f3c2"
                    },
                    {
                        "emoji": "🏋️‍♀️",
                        "description": "woman lifting weights",
                        "category": "Activity",
                        "aliases": ["weight_lifting_woman"],
                        "tags": ["gym", "workout"],
                        "unicode": "1f3cb-2640"
                    },
                    {
                        "emoji": "🏋",
                        "description": "person lifting weights",
                        "category": "Activity",
                        "aliases": ["weight_lifting_man"],
                        "tags": ["gym", "workout"],
                        "unicode": "1f3cb"
                    },
                    {
                        "emoji": "🤺",
                        "description": "person fencing",
                        "category": "Activity",
                        "aliases": ["person_fencing"],
                        "tags": [],
                        "unicode": "1f93a"
                    },
                    {
                        "emoji": "🤼‍♀",
                        "description": "women wrestling",
                        "category": "Activity",
                        "aliases": ["women_wrestling"],
                        "tags": [],
                        "unicode": "1f93c-2640"
                    },
                    {
                        "emoji": "🤼‍♂",
                        "description": "men wrestling",
                        "category": "Activity",
                        "aliases": ["men_wrestling"],
                        "tags": [],
                        "unicode": "1f93c-2642"
                    },
                    {
                        "emoji": "🤸‍♀",
                        "description": "woman cartwheeling",
                        "category": "Activity",
                        "aliases": ["woman_cartwheeling"],
                        "tags": [],
                        "unicode": "1f938-2640"
                    },
                    {
                        "emoji": "🤸‍♂",
                        "description": "man cartwheeling",
                        "category": "Activity",
                        "aliases": ["man_cartwheeling"],
                        "tags": [],
                        "unicode": "1f938-2642"
                    },
                    {
                        "emoji": "⛹️‍♀️",
                        "description": "woman bouncing ball",
                        "category": "Activity",
                        "aliases": ["basketball_woman"],
                        "tags": [],
                        "unicode": "26f9-2640"
                    },
                    {
                        "emoji": "⛹",
                        "description": "person bouncing ball",
                        "category": "Activity",
                        "aliases": ["basketball_man"],
                        "tags": [],
                        "unicode": "26f9"
                    },
                    {
                        "emoji": "🤾‍♀",
                        "description": "woman playing handball",
                        "category": "Activity",
                        "aliases": ["woman_playing_handball"],
                        "tags": [],
                        "unicode": "1f93e-2640"
                    },
                    {
                        "emoji": "🤾‍♂",
                        "description": "man playing handball",
                        "category": "Activity",
                        "aliases": ["man_playing_handball"],
                        "tags": [],
                        "unicode": "1f93e-2642"
                    },
                    {
                        "emoji": "🏌️‍♀️",
                        "description": "woman golfing",
                        "category": "Activity",
                        "aliases": ["golfing_woman"],
                        "tags": [],
                        "unicode": "1f3cc-2640"
                    },
                    {
                        "emoji": "🏌",
                        "description": "person golfing",
                        "category": "Activity",
                        "aliases": ["golfing_man"],
                        "tags": [],
                        "unicode": "1f3cc"
                    },
                    {
                        "emoji": "🏄‍♀",
                        "description": "woman surfing",
                        "category": "Activity",
                        "aliases": ["surfing_woman"],
                        "tags": [],
                        "unicode": "1f3c4-2640"
                    },
                    {
                        "emoji": "🏄",
                        "description": "person surfing",
                        "category": "Activity",
                        "aliases": ["surfing_man", "surfer"],
                        "tags": [],
                        "unicode": "1f3c4"
                    },
                    {
                        "emoji": "🏊‍♀",
                        "description": "woman swimming",
                        "category": "Activity",
                        "aliases": ["swimming_woman"],
                        "tags": [],
                        "unicode": "1f3ca-2640"
                    },
                    {
                        "emoji": "🏊",
                        "description": "person swimming",
                        "category": "Activity",
                        "aliases": ["swimming_man", "swimmer"],
                        "tags": [],
                        "unicode": "1f3ca"
                    },
                    {
                        "emoji": "🤽‍♀",
                        "description": "woman playing water polo",
                        "category": "Activity",
                        "aliases": ["woman_playing_water_polo"],
                        "tags": [],
                        "unicode": "1f93d-2640"
                    },
                    {
                        "emoji": "🤽‍♂",
                        "description": "man playing water polo",
                        "category": "Activity",
                        "aliases": ["man_playing_water_polo"],
                        "tags": [],
                        "unicode": "1f93d-2642"
                    },
                    {
                        "emoji": "🚣‍♀",
                        "description": "woman rowing boat",
                        "category": "Activity",
                        "aliases": ["rowing_woman"],
                        "tags": [],
                        "unicode": "1f6a3-2640"
                    },
                    {
                        "emoji": "🚣",
                        "description": "person rowing boat",
                        "category": "Activity",
                        "aliases": ["rowing_man", "rowboat"],
                        "tags": [],
                        "unicode": "1f6a3"
                    },
                    {
                        "emoji": "🏇",
                        "description": "horse racing",
                        "category": "Activity",
                        "aliases": ["horse_racing"],
                        "tags": [],
                        "unicode": "1f3c7"
                    },
                    {
                        "emoji": "🚴‍♀",
                        "description": "woman biking",
                        "category": "Activity",
                        "aliases": ["biking_woman"],
                        "tags": [],
                        "unicode": "1f6b4-2640"
                    },
                    {
                        "emoji": "🚴",
                        "description": "person biking",
                        "category": "Activity",
                        "aliases": ["biking_man", "bicyclist"],
                        "tags": [],
                        "unicode": "1f6b4"
                    },
                    {
                        "emoji": "🚵‍♀",
                        "description": "woman mountain biking",
                        "category": "Activity",
                        "aliases": ["mountain_biking_woman"],
                        "tags": [],
                        "unicode": "1f6b5-2640"
                    },
                    {
                        "emoji": "🚵",
                        "description": "person mountain biking",
                        "category": "Activity",
                        "aliases": ["mountain_biking_man", "mountain_bicyclist"],
                        "tags": [],
                        "unicode": "1f6b5"
                    },
                    {
                        "emoji": "🎽",
                        "description": "running shirt",
                        "category": "Activity",
                        "aliases": ["running_shirt_with_sash"],
                        "tags": ["marathon"],
                        "unicode": "1f3bd"
                    },
                    {
                        "emoji": "🏅",
                        "description": "sports medal",
                        "category": "Activity",
                        "aliases": ["medal_sports"],
                        "tags": ["gold", "winner"],
                        "unicode": "1f3c5"
                    },
                    {
                        "emoji": "🎖",
                        "description": "military medal",
                        "category": "Activity",
                        "aliases": ["medal_military"],
                        "tags": [],
                        "unicode": "1f396"
                    },
                    {
                        "emoji": "🥇",
                        "description": "1st place medal",
                        "category": "Activity",
                        "aliases": ["1st_place_medal"],
                        "tags": ["gold"],
                        "unicode": "1f947"
                    },
                    {
                        "emoji": "🥈",
                        "description": "2nd place medal",
                        "category": "Activity",
                        "aliases": ["2nd_place_medal"],
                        "tags": ["silver"],
                        "unicode": "1f948"
                    },
                    {
                        "emoji": "🥉",
                        "description": "3rd place medal",
                        "category": "Activity",
                        "aliases": ["3rd_place_medal"],
                        "tags": ["bronze"],
                        "unicode": "1f949"
                    },
                    {
                        "emoji": "🏆",
                        "description": "trophy",
                        "category": "Activity",
                        "aliases": ["trophy"],
                        "tags": ["award", "contest", "winner"],
                        "unicode": "1f3c6"
                    },
                    {
                        "emoji": "🏵",
                        "description": "rosette",
                        "category": "Activity",
                        "aliases": ["rosette"],
                        "tags": [],
                        "unicode": "1f3f5"
                    },
                    {
                        "emoji": "🎗",
                        "description": "reminder ribbon",
                        "category": "Activity",
                        "aliases": ["reminder_ribbon"],
                        "tags": [],
                        "unicode": "1f397"
                    },
                    {
                        "emoji": "🎫",
                        "description": "ticket",
                        "category": "Activity",
                        "aliases": ["ticket"],
                        "tags": [],
                        "unicode": "1f3ab"
                    },
                    {
                        "emoji": "🎟",
                        "description": "admission tickets",
                        "category": "Activity",
                        "aliases": ["tickets"],
                        "tags": [],
                        "unicode": "1f39f"
                    },
                    {
                        "emoji": "🎪",
                        "description": "circus tent",
                        "category": "Activity",
                        "aliases": ["circus_tent"],
                        "tags": [],
                        "unicode": "1f3aa"
                    },
                    {
                        "emoji": "🤹‍♀",
                        "description": "woman juggling",
                        "category": "Activity",
                        "aliases": ["woman_juggling"],
                        "tags": [],
                        "unicode": "1f939-2640"
                    },
                    {
                        "emoji": "🤹‍♂",
                        "description": "man juggling",
                        "category": "Activity",
                        "aliases": ["man_juggling"],
                        "tags": [],
                        "unicode": "1f939-2642"
                    },
                    {
                        "emoji": "🎭",
                        "description": "performing arts",
                        "category": "Activity",
                        "aliases": ["performing_arts"],
                        "tags": ["theater", "drama"],
                        "unicode": "1f3ad"
                    },
                    {
                        "emoji": "🎨",
                        "description": "artist palette",
                        "category": "Activity",
                        "aliases": ["art"],
                        "tags": ["design", "paint"],
                        "unicode": "1f3a8"
                    },
                    {
                        "emoji": "🎬",
                        "description": "clapper board",
                        "category": "Activity",
                        "aliases": ["clapper"],
                        "tags": ["film"],
                        "unicode": "1f3ac"
                    },
                    {
                        "emoji": "🎤",
                        "description": "microphone",
                        "category": "Activity",
                        "aliases": ["microphone"],
                        "tags": ["sing"],
                        "unicode": "1f3a4"
                    },
                    {
                        "emoji": "🎧",
                        "description": "headphone",
                        "category": "Activity",
                        "aliases": ["headphones"],
                        "tags": ["music", "earphones"],
                        "unicode": "1f3a7"
                    },
                    {
                        "emoji": "🎼",
                        "description": "musical score",
                        "category": "Activity",
                        "aliases": ["musical_score"],
                        "tags": [],
                        "unicode": "1f3bc"
                    },
                    {
                        "emoji": "🎹",
                        "description": "musical keyboard",
                        "category": "Activity",
                        "aliases": ["musical_keyboard"],
                        "tags": ["piano"],
                        "unicode": "1f3b9"
                    },
                    {
                        "emoji": "🥁",
                        "description": "drum",
                        "category": "Activity",
                        "aliases": ["drum"],
                        "tags": [],
                        "unicode": "1f941"
                    },
                    {
                        "emoji": "🎷",
                        "description": "saxophone",
                        "category": "Activity",
                        "aliases": ["saxophone"],
                        "tags": [],
                        "unicode": "1f3b7"
                    },
                    {
                        "emoji": "🎺",
                        "description": "trumpet",
                        "category": "Activity",
                        "aliases": ["trumpet"],
                        "tags": [],
                        "unicode": "1f3ba"
                    },
                    {
                        "emoji": "🎸",
                        "description": "guitar",
                        "category": "Activity",
                        "aliases": ["guitar"],
                        "tags": ["rock"],
                        "unicode": "1f3b8"
                    },
                    {
                        "emoji": "🎻",
                        "description": "violin",
                        "category": "Activity",
                        "aliases": ["violin"],
                        "tags": [],
                        "unicode": "1f3bb"
                    },
                    {
                        "emoji": "🎲",
                        "description": "game die",
                        "category": "Activity",
                        "aliases": ["game_die"],
                        "tags": ["dice", "gambling"],
                        "unicode": "1f3b2"
                    },
                    {
                        "emoji": "🎯",
                        "description": "direct hit",
                        "category": "Activity",
                        "aliases": ["dart"],
                        "tags": ["target"],
                        "unicode": "1f3af"
                    },
                    {
                        "emoji": "🎳",
                        "description": "bowling",
                        "category": "Activity",
                        "aliases": ["bowling"],
                        "tags": [],
                        "unicode": "1f3b3"
                    },
                    {
                        "emoji": "🎮",
                        "description": "video game",
                        "category": "Activity",
                        "aliases": ["video_game"],
                        "tags": ["play", "controller", "console"],
                        "unicode": "1f3ae"
                    },
                    {
                        "emoji": "🎰",
                        "description": "slot machine",
                        "category": "Activity",
                        "aliases": ["slot_machine"],
                        "tags": [],
                        "unicode": "1f3b0"
                    },
                    {
                        "emoji": "🚗",
                        "description": "automobile",
                        "category": "Places",
                        "aliases": ["car", "red_car"],
                        "tags": [],
                        "unicode": "1f697"
                    },
                    {
                        "emoji": "🚕",
                        "description": "taxi",
                        "category": "Places",
                        "aliases": ["taxi"],
                        "tags": [],
                        "unicode": "1f695"
                    },
                    {
                        "emoji": "🚙",
                        "description": "sport utility vehicle",
                        "category": "Places",
                        "aliases": ["blue_car"],
                        "tags": [],
                        "unicode": "1f699"
                    },
                    {
                        "emoji": "🚌",
                        "description": "bus",
                        "category": "Places",
                        "aliases": ["bus"],
                        "tags": [],
                        "unicode": "1f68c"
                    },
                    {
                        "emoji": "🚎",
                        "description": "trolleybus",
                        "category": "Places",
                        "aliases": ["trolleybus"],
                        "tags": [],
                        "unicode": "1f68e"
                    },
                    {
                        "emoji": "🏎",
                        "description": "racing car",
                        "category": "Places",
                        "aliases": ["racing_car"],
                        "tags": [],
                        "unicode": "1f3ce"
                    },
                    {
                        "emoji": "🚓",
                        "description": "police car",
                        "category": "Places",
                        "aliases": ["police_car"],
                        "tags": [],
                        "unicode": "1f693"
                    },
                    {
                        "emoji": "🚑",
                        "description": "ambulance",
                        "category": "Places",
                        "aliases": ["ambulance"],
                        "tags": [],
                        "unicode": "1f691"
                    },
                    {
                        "emoji": "🚒",
                        "description": "fire engine",
                        "category": "Places",
                        "aliases": ["fire_engine"],
                        "tags": [],
                        "unicode": "1f692"
                    },
                    {
                        "emoji": "🚐",
                        "description": "minibus",
                        "category": "Places",
                        "aliases": ["minibus"],
                        "tags": [],
                        "unicode": "1f690"
                    },
                    {
                        "emoji": "🚚",
                        "description": "delivery truck",
                        "category": "Places",
                        "aliases": ["truck"],
                        "tags": [],
                        "unicode": "1f69a"
                    },
                    {
                        "emoji": "🚛",
                        "description": "articulated lorry",
                        "category": "Places",
                        "aliases": ["articulated_lorry"],
                        "tags": [],
                        "unicode": "1f69b"
                    },
                    {
                        "emoji": "🚜",
                        "description": "tractor",
                        "category": "Places",
                        "aliases": ["tractor"],
                        "tags": [],
                        "unicode": "1f69c"
                    },
                    {
                        "emoji": "🛴",
                        "description": "kick scooter",
                        "category": "Places",
                        "aliases": ["kick_scooter"],
                        "tags": [],
                        "unicode": "1f6f4"
                    },
                    {
                        "emoji": "🚲",
                        "description": "bicycle",
                        "category": "Places",
                        "aliases": ["bike"],
                        "tags": ["bicycle"],
                        "unicode": "1f6b2"
                    },
                    {
                        "emoji": "🛵",
                        "description": "motor scooter",
                        "category": "Places",
                        "aliases": ["motor_scooter"],
                        "tags": [],
                        "unicode": "1f6f5"
                    },
                    {
                        "emoji": "🏍",
                        "description": "motorcycle",
                        "category": "Places",
                        "aliases": ["motorcycle"],
                        "tags": [],
                        "unicode": "1f3cd"
                    },
                    {
                        "emoji": "🚨",
                        "description": "police car light",
                        "category": "Places",
                        "aliases": ["rotating_light"],
                        "tags": ["911", "emergency"],
                        "unicode": "1f6a8"
                    },
                    {
                        "emoji": "🚔",
                        "description": "oncoming police car",
                        "category": "Places",
                        "aliases": ["oncoming_police_car"],
                        "tags": [],
                        "unicode": "1f694"
                    },
                    {
                        "emoji": "🚍",
                        "description": "oncoming bus",
                        "category": "Places",
                        "aliases": ["oncoming_bus"],
                        "tags": [],
                        "unicode": "1f68d"
                    },
                    {
                        "emoji": "🚘",
                        "description": "oncoming automobile",
                        "category": "Places",
                        "aliases": ["oncoming_automobile"],
                        "tags": [],
                        "unicode": "1f698"
                    },
                    {
                        "emoji": "🚖",
                        "description": "oncoming taxi",
                        "category": "Places",
                        "aliases": ["oncoming_taxi"],
                        "tags": [],
                        "unicode": "1f696"
                    },
                    {
                        "emoji": "🚡",
                        "description": "aerial tramway",
                        "category": "Places",
                        "aliases": ["aerial_tramway"],
                        "tags": [],
                        "unicode": "1f6a1"
                    },
                    {
                        "emoji": "🚠",
                        "description": "mountain cableway",
                        "category": "Places",
                        "aliases": ["mountain_cableway"],
                        "tags": [],
                        "unicode": "1f6a0"
                    },
                    {
                        "emoji": "🚟",
                        "description": "suspension railway",
                        "category": "Places",
                        "aliases": ["suspension_railway"],
                        "tags": [],
                        "unicode": "1f69f"
                    },
                    {
                        "emoji": "🚃",
                        "description": "railway car",
                        "category": "Places",
                        "aliases": ["railway_car"],
                        "tags": [],
                        "unicode": "1f683"
                    },
                    {
                        "emoji": "🚋",
                        "description": "tram car",
                        "category": "Places",
                        "aliases": ["train"],
                        "tags": [],
                        "unicode": "1f68b"
                    },
                    {
                        "emoji": "🚞",
                        "description": "mountain railway",
                        "category": "Places",
                        "aliases": ["mountain_railway"],
                        "tags": [],
                        "unicode": "1f69e"
                    },
                    {
                        "emoji": "🚝",
                        "description": "monorail",
                        "category": "Places",
                        "aliases": ["monorail"],
                        "tags": [],
                        "unicode": "1f69d"
                    },
                    {
                        "emoji": "🚄",
                        "description": "high-speed train",
                        "category": "Places",
                        "aliases": ["bullettrain_side"],
                        "tags": ["train"],
                        "unicode": "1f684"
                    },
                    {
                        "emoji": "🚅",
                        "description": "high-speed train with bullet nose",
                        "category": "Places",
                        "aliases": ["bullettrain_front"],
                        "tags": ["train"],
                        "unicode": "1f685"
                    },
                    {
                        "emoji": "🚈",
                        "description": "light rail",
                        "category": "Places",
                        "aliases": ["light_rail"],
                        "tags": [],
                        "unicode": "1f688"
                    },
                    {
                        "emoji": "🚂",
                        "description": "locomotive",
                        "category": "Places",
                        "aliases": ["steam_locomotive"],
                        "tags": ["train"],
                        "unicode": "1f682"
                    },
                    {
                        "emoji": "🚆",
                        "description": "train",
                        "category": "Places",
                        "aliases": ["train2"],
                        "tags": [],
                        "unicode": "1f686"
                    },
                    {
                        "emoji": "🚇",
                        "description": "metro",
                        "category": "Places",
                        "aliases": ["metro"],
                        "tags": [],
                        "unicode": "1f687"
                    },
                    {
                        "emoji": "🚊",
                        "description": "tram",
                        "category": "Places",
                        "aliases": ["tram"],
                        "tags": [],
                        "unicode": "1f68a"
                    },
                    {
                        "emoji": "🚉",
                        "description": "station",
                        "category": "Places",
                        "aliases": ["station"],
                        "tags": [],
                        "unicode": "1f689"
                    },
                    {
                        "emoji": "🚁",
                        "description": "helicopter",
                        "category": "Places",
                        "aliases": ["helicopter"],
                        "tags": [],
                        "unicode": "1f681"
                    },
                    {
                        "emoji": "🛩",
                        "description": "small airplane",
                        "category": "Places",
                        "aliases": ["small_airplane"],
                        "tags": ["flight"],
                        "unicode": "1f6e9"
                    },
                    {
                        "emoji": "✈️",
                        "description": "airplane",
                        "category": "Places",
                        "aliases": ["airplane"],
                        "tags": ["flight"],
                        "unicode": "2708"
                    },
                    {
                        "emoji": "🛫",
                        "description": "airplane departure",
                        "category": "Places",
                        "aliases": ["flight_departure"],
                        "tags": [],
                        "unicode": "1f6eb"
                    },
                    {
                        "emoji": "🛬",
                        "description": "airplane arrival",
                        "category": "Places",
                        "aliases": ["flight_arrival"],
                        "tags": [],
                        "unicode": "1f6ec"
                    },
                    {
                        "emoji": "🚀",
                        "description": "rocket",
                        "category": "Places",
                        "aliases": ["rocket"],
                        "tags": ["ship", "launch"],
                        "unicode": "1f680"
                    },
                    {
                        "emoji": "🛰",
                        "description": "satellite",
                        "category": "Places",
                        "aliases": ["artificial_satellite"],
                        "tags": ["orbit", "space"],
                        "unicode": "1f6f0"
                    },
                    {
                        "emoji": "💺",
                        "description": "seat",
                        "category": "Places",
                        "aliases": ["seat"],
                        "tags": [],
                        "unicode": "1f4ba"
                    },
                    {
                        "emoji": "🛶",
                        "description": "canoe",
                        "category": "Places",
                        "aliases": ["canoe"],
                        "tags": [],
                        "unicode": "1f6f6"
                    },
                    {
                        "emoji": "⛵️",
                        "description": "sailboat",
                        "category": "Places",
                        "aliases": ["boat", "sailboat"],
                        "tags": [],
                        "unicode": "26f5"
                    },
                    {
                        "emoji": "🛥",
                        "description": "motor boat",
                        "category": "Places",
                        "aliases": ["motor_boat"],
                        "tags": [],
                        "unicode": "1f6e5"
                    },
                    {
                        "emoji": "🚤",
                        "description": "speedboat",
                        "category": "Places",
                        "aliases": ["speedboat"],
                        "tags": ["ship"],
                        "unicode": "1f6a4"
                    },
                    {
                        "emoji": "🛳",
                        "description": "passenger ship",
                        "category": "Places",
                        "aliases": ["passenger_ship"],
                        "tags": ["cruise"],
                        "unicode": "1f6f3"
                    },
                    {
                        "emoji": "⛴",
                        "description": "ferry",
                        "category": "Places",
                        "aliases": ["ferry"],
                        "tags": [],
                        "unicode": "26f4"
                    },
                    {
                        "emoji": "🚢",
                        "description": "ship",
                        "category": "Places",
                        "aliases": ["ship"],
                        "tags": [],
                        "unicode": "1f6a2"
                    },
                    {
                        "emoji": "⚓️",
                        "description": "anchor",
                        "category": "Places",
                        "aliases": ["anchor"],
                        "tags": ["ship"],
                        "unicode": "2693"
                    },
                    {
                        "emoji": "🚧",
                        "description": "construction",
                        "category": "Places",
                        "aliases": ["construction"],
                        "tags": ["wip"],
                        "unicode": "1f6a7"
                    },
                    {
                        "emoji": "⛽️",
                        "description": "fuel pump",
                        "category": "Places",
                        "aliases": ["fuelpump"],
                        "tags": [],
                        "unicode": "26fd"
                    },
                    {
                        "emoji": "🚏",
                        "description": "bus stop",
                        "category": "Places",
                        "aliases": ["busstop"],
                        "tags": [],
                        "unicode": "1f68f"
                    },
                    {
                        "emoji": "🚦",
                        "description": "vertical traffic light",
                        "category": "Places",
                        "aliases": ["vertical_traffic_light"],
                        "tags": ["semaphore"],
                        "unicode": "1f6a6"
                    },
                    {
                        "emoji": "🚥",
                        "description": "horizontal traffic light",
                        "category": "Places",
                        "aliases": ["traffic_light"],
                        "tags": [],
                        "unicode": "1f6a5"
                    },
                    {
                        "emoji": "🗺",
                        "description": "world map",
                        "category": "Places",
                        "aliases": ["world_map"],
                        "tags": ["travel"],
                        "unicode": "1f5fa"
                    },
                    {
                        "emoji": "🗿",
                        "description": "moai",
                        "category": "Places",
                        "aliases": ["moyai"],
                        "tags": ["stone"],
                        "unicode": "1f5ff"
                    },
                    {
                        "emoji": "🗽",
                        "description": "Statue of Liberty",
                        "category": "Places",
                        "aliases": ["statue_of_liberty"],
                        "tags": [],
                        "unicode": "1f5fd"
                    },
                    {
                        "emoji": "⛲️",
                        "description": "fountain",
                        "category": "Places",
                        "aliases": ["fountain"],
                        "tags": [],
                        "unicode": "26f2"
                    },
                    {
                        "emoji": "🗼",
                        "description": "Tokyo tower",
                        "category": "Places",
                        "aliases": ["tokyo_tower"],
                        "tags": [],
                        "unicode": "1f5fc"
                    },
                    {
                        "emoji": "🏰",
                        "description": "castle",
                        "category": "Places",
                        "aliases": ["european_castle"],
                        "tags": [],
                        "unicode": "1f3f0"
                    },
                    {
                        "emoji": "🏯",
                        "description": "Japanese castle",
                        "category": "Places",
                        "aliases": ["japanese_castle"],
                        "tags": [],
                        "unicode": "1f3ef"
                    },
                    {
                        "emoji": "🏟",
                        "description": "stadium",
                        "category": "Places",
                        "aliases": ["stadium"],
                        "tags": [],
                        "unicode": "1f3df"
                    },
                    {
                        "emoji": "🎡",
                        "description": "ferris wheel",
                        "category": "Places",
                        "aliases": ["ferris_wheel"],
                        "tags": [],
                        "unicode": "1f3a1"
                    },
                    {
                        "emoji": "🎢",
                        "description": "roller coaster",
                        "category": "Places",
                        "aliases": ["roller_coaster"],
                        "tags": [],
                        "unicode": "1f3a2"
                    },
                    {
                        "emoji": "🎠",
                        "description": "carousel horse",
                        "category": "Places",
                        "aliases": ["carousel_horse"],
                        "tags": [],
                        "unicode": "1f3a0"
                    },
                    {
                        "emoji": "⛱",
                        "description": "umbrella on ground",
                        "category": "Places",
                        "aliases": ["parasol_on_ground"],
                        "tags": ["beach_umbrella"],
                        "unicode": "26f1"
                    },
                    {
                        "emoji": "🏖",
                        "description": "beach with umbrella",
                        "category": "Places",
                        "aliases": ["beach_umbrella"],
                        "tags": [],
                        "unicode": "1f3d6"
                    },
                    {
                        "emoji": "🏝",
                        "description": "desert island",
                        "category": "Places",
                        "aliases": ["desert_island"],
                        "tags": [],
                        "unicode": "1f3dd"
                    },
                    {
                        "emoji": "⛰",
                        "description": "mountain",
                        "category": "Places",
                        "aliases": ["mountain"],
                        "tags": [],
                        "unicode": "26f0"
                    },
                    {
                        "emoji": "🏔",
                        "description": "snow-capped mountain",
                        "category": "Places",
                        "aliases": ["mountain_snow"],
                        "tags": [],
                        "unicode": "1f3d4"
                    },
                    {
                        "emoji": "🗻",
                        "description": "mount fuji",
                        "category": "Places",
                        "aliases": ["mount_fuji"],
                        "tags": [],
                        "unicode": "1f5fb"
                    },
                    {
                        "emoji": "🌋",
                        "description": "volcano",
                        "category": "Places",
                        "aliases": ["volcano"],
                        "tags": [],
                        "unicode": "1f30b"
                    },
                    {
                        "emoji": "🏜",
                        "description": "desert",
                        "category": "Places",
                        "aliases": ["desert"],
                        "tags": [],
                        "unicode": "1f3dc"
                    },
                    {
                        "emoji": "🏕",
                        "description": "camping",
                        "category": "Places",
                        "aliases": ["camping"],
                        "tags": [],
                        "unicode": "1f3d5"
                    },
                    {
                        "emoji": "⛺️",
                        "description": "tent",
                        "category": "Places",
                        "aliases": ["tent"],
                        "tags": ["camping"],
                        "unicode": "26fa"
                    },
                    {
                        "emoji": "🛤",
                        "description": "railway track",
                        "category": "Places",
                        "aliases": ["railway_track"],
                        "tags": [],
                        "unicode": "1f6e4"
                    },
                    {
                        "emoji": "🛣",
                        "description": "motorway",
                        "category": "Places",
                        "aliases": ["motorway"],
                        "tags": [],
                        "unicode": "1f6e3"
                    },
                    {
                        "emoji": "🏗",
                        "description": "building construction",
                        "category": "Places",
                        "aliases": ["building_construction"],
                        "tags": [],
                        "unicode": "1f3d7"
                    },
                    {
                        "emoji": "🏭",
                        "description": "factory",
                        "category": "Places",
                        "aliases": ["factory"],
                        "tags": [],
                        "unicode": "1f3ed"
                    },
                    {
                        "emoji": "🏠",
                        "description": "house",
                        "category": "Places",
                        "aliases": ["house"],
                        "tags": [],
                        "unicode": "1f3e0"
                    },
                    {
                        "emoji": "🏡",
                        "description": "house with garden",
                        "category": "Places",
                        "aliases": ["house_with_garden"],
                        "tags": [],
                        "unicode": "1f3e1"
                    },
                    {
                        "emoji": "🏘",
                        "description": "house",
                        "category": "Places",
                        "aliases": ["houses"],
                        "tags": [],
                        "unicode": "1f3d8"
                    },
                    {
                        "emoji": "🏚",
                        "description": "derelict house",
                        "category": "Places",
                        "aliases": ["derelict_house"],
                        "tags": [],
                        "unicode": "1f3da"
                    },
                    {
                        "emoji": "🏢",
                        "description": "office building",
                        "category": "Places",
                        "aliases": ["office"],
                        "tags": [],
                        "unicode": "1f3e2"
                    },
                    {
                        "emoji": "🏬",
                        "description": "department store",
                        "category": "Places",
                        "aliases": ["department_store"],
                        "tags": [],
                        "unicode": "1f3ec"
                    },
                    {
                        "emoji": "🏣",
                        "description": "Japanese post office",
                        "category": "Places",
                        "aliases": ["post_office"],
                        "tags": [],
                        "unicode": "1f3e3"
                    },
                    {
                        "emoji": "🏤",
                        "description": "post office",
                        "category": "Places",
                        "aliases": ["european_post_office"],
                        "tags": [],
                        "unicode": "1f3e4"
                    },
                    {
                        "emoji": "🏥",
                        "description": "hospital",
                        "category": "Places",
                        "aliases": ["hospital"],
                        "tags": [],
                        "unicode": "1f3e5"
                    },
                    {
                        "emoji": "🏦",
                        "description": "bank",
                        "category": "Places",
                        "aliases": ["bank"],
                        "tags": [],
                        "unicode": "1f3e6"
                    },
                    {
                        "emoji": "🏨",
                        "description": "hotel",
                        "category": "Places",
                        "aliases": ["hotel"],
                        "tags": [],
                        "unicode": "1f3e8"
                    },
                    {
                        "emoji": "🏪",
                        "description": "convenience store",
                        "category": "Places",
                        "aliases": ["convenience_store"],
                        "tags": [],
                        "unicode": "1f3ea"
                    },
                    {
                        "emoji": "🏫",
                        "description": "school",
                        "category": "Places",
                        "aliases": ["school"],
                        "tags": [],
                        "unicode": "1f3eb"
                    },
                    {
                        "emoji": "🏩",
                        "description": "love hotel",
                        "category": "Places",
                        "aliases": ["love_hotel"],
                        "tags": [],
                        "unicode": "1f3e9"
                    },
                    {
                        "emoji": "💒",
                        "description": "wedding",
                        "category": "Places",
                        "aliases": ["wedding"],
                        "tags": ["marriage"],
                        "unicode": "1f492"
                    },
                    {
                        "emoji": "🏛",
                        "description": "classical building",
                        "category": "Places",
                        "aliases": ["classical_building"],
                        "tags": [],
                        "unicode": "1f3db"
                    },
                    {
                        "emoji": "⛪️",
                        "description": "church",
                        "category": "Places",
                        "aliases": ["church"],
                        "tags": [],
                        "unicode": "26ea"
                    },
                    {
                        "emoji": "🕌",
                        "description": "mosque",
                        "category": "Places",
                        "aliases": ["mosque"],
                        "tags": [],
                        "unicode": "1f54c"
                    },
                    {
                        "emoji": "🕍",
                        "description": "synagogue",
                        "category": "Places",
                        "aliases": ["synagogue"],
                        "tags": [],
                        "unicode": "1f54d"
                    },
                    {
                        "emoji": "🕋",
                        "description": "kaaba",
                        "category": "Places",
                        "aliases": ["kaaba"],
                        "tags": [],
                        "unicode": "1f54b"
                    },
                    {
                        "emoji": "⛩",
                        "description": "shinto shrine",
                        "category": "Places",
                        "aliases": ["shinto_shrine"],
                        "tags": [],
                        "unicode": "26e9"
                    },
                    {
                        "emoji": "🗾",
                        "description": "map of Japan",
                        "category": "Places",
                        "aliases": ["japan"],
                        "tags": [],
                        "unicode": "1f5fe"
                    },
                    {
                        "emoji": "🎑",
                        "description": "moon viewing ceremony",
                        "category": "Places",
                        "aliases": ["rice_scene"],
                        "tags": [],
                        "unicode": "1f391"
                    },
                    {
                        "emoji": "🏞",
                        "description": "national park",
                        "category": "Places",
                        "aliases": ["national_park"],
                        "tags": [],
                        "unicode": "1f3de"
                    },
                    {
                        "emoji": "🌅",
                        "description": "sunrise",
                        "category": "Places",
                        "aliases": ["sunrise"],
                        "tags": [],
                        "unicode": "1f305"
                    },
                    {
                        "emoji": "🌄",
                        "description": "sunrise over mountains",
                        "category": "Places",
                        "aliases": ["sunrise_over_mountains"],
                        "tags": [],
                        "unicode": "1f304"
                    },
                    {
                        "emoji": "🌠",
                        "description": "shooting star",
                        "category": "Places",
                        "aliases": ["stars"],
                        "tags": [],
                        "unicode": "1f320"
                    },
                    {
                        "emoji": "🎇",
                        "description": "sparkler",
                        "category": "Places",
                        "aliases": ["sparkler"],
                        "tags": [],
                        "unicode": "1f387"
                    },
                    {
                        "emoji": "🎆",
                        "description": "fireworks",
                        "category": "Places",
                        "aliases": ["fireworks"],
                        "tags": ["festival", "celebration"],
                        "unicode": "1f386"
                    },
                    {
                        "emoji": "🌇",
                        "description": "sunset",
                        "category": "Places",
                        "aliases": ["city_sunrise"],
                        "tags": [],
                        "unicode": "1f307"
                    },
                    {
                        "emoji": "🌆",
                        "description": "cityscape at dusk",
                        "category": "Places",
                        "aliases": ["city_sunset"],
                        "tags": [],
                        "unicode": "1f306"
                    },
                    {
                        "emoji": "🏙",
                        "description": "cityscape",
                        "category": "Places",
                        "aliases": ["cityscape"],
                        "tags": ["skyline"],
                        "unicode": "1f3d9"
                    },
                    {
                        "emoji": "🌃",
                        "description": "night with stars",
                        "category": "Places",
                        "aliases": ["night_with_stars"],
                        "tags": [],
                        "unicode": "1f303"
                    },
                    {
                        "emoji": "🌌",
                        "description": "milky way",
                        "category": "Places",
                        "aliases": ["milky_way"],
                        "tags": [],
                        "unicode": "1f30c"
                    },
                    {
                        "emoji": "🌉",
                        "description": "bridge at night",
                        "category": "Places",
                        "aliases": ["bridge_at_night"],
                        "tags": [],
                        "unicode": "1f309"
                    },
                    {
                        "emoji": "🌁",
                        "description": "foggy",
                        "category": "Places",
                        "aliases": ["foggy"],
                        "tags": ["karl"],
                        "unicode": "1f301"
                    },
                    {
                        "emoji": "⌚️",
                        "description": "watch",
                        "category": "Objects",
                        "aliases": ["watch"],
                        "tags": ["time"],
                        "unicode": "231a"
                    },
                    {
                        "emoji": "📱",
                        "description": "mobile phone",
                        "category": "Objects",
                        "aliases": ["iphone"],
                        "tags": ["smartphone", "mobile"],
                        "unicode": "1f4f1"
                    },
                    {
                        "emoji": "📲",
                        "description": "mobile phone with arrow",
                        "category": "Objects",
                        "aliases": ["calling"],
                        "tags": ["call", "incoming"],
                        "unicode": "1f4f2"
                    },
                    {
                        "emoji": "💻",
                        "description": "laptop computer",
                        "category": "Objects",
                        "aliases": ["computer"],
                        "tags": ["desktop", "screen"],
                        "unicode": "1f4bb"
                    },
                    {
                        "emoji": "⌨️",
                        "description": "keyboard",
                        "category": "Objects",
                        "aliases": ["keyboard"],
                        "tags": [],
                        "unicode": "2328"
                    },
                    {
                        "emoji": "🖥",
                        "description": "desktop computer",
                        "category": "Objects",
                        "aliases": ["desktop_computer"],
                        "tags": [],
                        "unicode": "1f5a5"
                    },
                    {
                        "emoji": "🖨",
                        "description": "printer",
                        "category": "Objects",
                        "aliases": ["printer"],
                        "tags": [],
                        "unicode": "1f5a8"
                    },
                    {
                        "emoji": "🖱",
                        "description": "computer mouse",
                        "category": "Objects",
                        "aliases": ["computer_mouse"],
                        "tags": [],
                        "unicode": "1f5b1"
                    },
                    {
                        "emoji": "🖲",
                        "description": "trackball",
                        "category": "Objects",
                        "aliases": ["trackball"],
                        "tags": [],
                        "unicode": "1f5b2"
                    },
                    {
                        "emoji": "🕹",
                        "description": "joystick",
                        "category": "Objects",
                        "aliases": ["joystick"],
                        "tags": [],
                        "unicode": "1f579"
                    },
                    {
                        "emoji": "🗜",
                        "description": "clamp",
                        "category": "Objects",
                        "aliases": ["clamp"],
                        "tags": [],
                        "unicode": "1f5dc"
                    },
                    {
                        "emoji": "💽",
                        "description": "computer disk",
                        "category": "Objects",
                        "aliases": ["minidisc"],
                        "tags": [],
                        "unicode": "1f4bd"
                    },
                    {
                        "emoji": "💾",
                        "description": "floppy disk",
                        "category": "Objects",
                        "aliases": ["floppy_disk"],
                        "tags": ["save"],
                        "unicode": "1f4be"
                    },
                    {
                        "emoji": "💿",
                        "description": "optical disk",
                        "category": "Objects",
                        "aliases": ["cd"],
                        "tags": [],
                        "unicode": "1f4bf"
                    },
                    {
                        "emoji": "📀",
                        "description": "dvd",
                        "category": "Objects",
                        "aliases": ["dvd"],
                        "tags": [],
                        "unicode": "1f4c0"
                    },
                    {
                        "emoji": "📼",
                        "description": "videocassette",
                        "category": "Objects",
                        "aliases": ["vhs"],
                        "tags": [],
                        "unicode": "1f4fc"
                    },
                    {
                        "emoji": "📷",
                        "description": "camera",
                        "category": "Objects",
                        "aliases": ["camera"],
                        "tags": ["photo"],
                        "unicode": "1f4f7"
                    },
                    {
                        "emoji": "📸",
                        "description": "camera with flash",
                        "category": "Objects",
                        "aliases": ["camera_flash"],
                        "tags": ["photo"],
                        "unicode": "1f4f8"
                    },
                    {
                        "emoji": "📹",
                        "description": "video camera",
                        "category": "Objects",
                        "aliases": ["video_camera"],
                        "tags": [],
                        "unicode": "1f4f9"
                    },
                    {
                        "emoji": "🎥",
                        "description": "movie camera",
                        "category": "Objects",
                        "aliases": ["movie_camera"],
                        "tags": ["film", "video"],
                        "unicode": "1f3a5"
                    },
                    {
                        "emoji": "📽",
                        "description": "film projector",
                        "category": "Objects",
                        "aliases": ["film_projector"],
                        "tags": [],
                        "unicode": "1f4fd"
                    },
                    {
                        "emoji": "🎞",
                        "description": "film frames",
                        "category": "Objects",
                        "aliases": ["film_strip"],
                        "tags": [],
                        "unicode": "1f39e"
                    },
                    {
                        "emoji": "📞",
                        "description": "telephone receiver",
                        "category": "Objects",
                        "aliases": ["telephone_receiver"],
                        "tags": ["phone", "call"],
                        "unicode": "1f4de"
                    },
                    {
                        "emoji": "☎️",
                        "description": "telephone",
                        "category": "Objects",
                        "aliases": ["phone", "telephone"],
                        "tags": [],
                        "unicode": "260e"
                    },
                    {
                        "emoji": "📟",
                        "description": "pager",
                        "category": "Objects",
                        "aliases": ["pager"],
                        "tags": [],
                        "unicode": "1f4df"
                    },
                    {
                        "emoji": "📠",
                        "description": "fax machine",
                        "category": "Objects",
                        "aliases": ["fax"],
                        "tags": [],
                        "unicode": "1f4e0"
                    },
                    {
                        "emoji": "📺",
                        "description": "television",
                        "category": "Objects",
                        "aliases": ["tv"],
                        "tags": [],
                        "unicode": "1f4fa"
                    },
                    {
                        "emoji": "📻",
                        "description": "radio",
                        "category": "Objects",
                        "aliases": ["radio"],
                        "tags": ["podcast"],
                        "unicode": "1f4fb"
                    },
                    {
                        "emoji": "🎙",
                        "description": "studio microphone",
                        "category": "Objects",
                        "aliases": ["studio_microphone"],
                        "tags": ["podcast"],
                        "unicode": "1f399"
                    },
                    {
                        "emoji": "🎚",
                        "description": "level slider",
                        "category": "Objects",
                        "aliases": ["level_slider"],
                        "tags": [],
                        "unicode": "1f39a"
                    },
                    {
                        "emoji": "🎛",
                        "description": "control knobs",
                        "category": "Objects",
                        "aliases": ["control_knobs"],
                        "tags": [],
                        "unicode": "1f39b"
                    },
                    {
                        "emoji": "⏱",
                        "description": "stopwatch",
                        "category": "Objects",
                        "aliases": ["stopwatch"],
                        "tags": [],
                        "unicode": "23f1"
                    },
                    {
                        "emoji": "⏲",
                        "description": "timer clock",
                        "category": "Objects",
                        "aliases": ["timer_clock"],
                        "tags": [],
                        "unicode": "23f2"
                    },
                    {
                        "emoji": "⏰",
                        "description": "alarm clock",
                        "category": "Objects",
                        "aliases": ["alarm_clock"],
                        "tags": ["morning"],
                        "unicode": "23f0"
                    },
                    {
                        "emoji": "🕰",
                        "description": "mantelpiece clock",
                        "category": "Objects",
                        "aliases": ["mantelpiece_clock"],
                        "tags": [],
                        "unicode": "1f570"
                    },
                    {
                        "emoji": "⌛️",
                        "description": "hourglass",
                        "category": "Objects",
                        "aliases": ["hourglass"],
                        "tags": ["time"],
                        "unicode": "231b"
                    },
                    {
                        "emoji": "⏳",
                        "description": "hourglass with flowing sand",
                        "category": "Objects",
                        "aliases": ["hourglass_flowing_sand"],
                        "tags": ["time"],
                        "unicode": "23f3"
                    },
                    {
                        "emoji": "📡",
                        "description": "satellite antenna",
                        "category": "Objects",
                        "aliases": ["satellite"],
                        "tags": ["signal"],
                        "unicode": "1f4e1"
                    },
                    {
                        "emoji": "🔋",
                        "description": "battery",
                        "category": "Objects",
                        "aliases": ["battery"],
                        "tags": ["power"],
                        "unicode": "1f50b"
                    },
                    {
                        "emoji": "🔌",
                        "description": "electric plug",
                        "category": "Objects",
                        "aliases": ["electric_plug"],
                        "tags": [],
                        "unicode": "1f50c"
                    },
                    {
                        "emoji": "💡",
                        "description": "light bulb",
                        "category": "Objects",
                        "aliases": ["bulb"],
                        "tags": ["idea", "light"],
                        "unicode": "1f4a1"
                    },
                    {
                        "emoji": "🔦",
                        "description": "flashlight",
                        "category": "Objects",
                        "aliases": ["flashlight"],
                        "tags": [],
                        "unicode": "1f526"
                    },
                    {
                        "emoji": "🕯",
                        "description": "candle",
                        "category": "Objects",
                        "aliases": ["candle"],
                        "tags": [],
                        "unicode": "1f56f"
                    },
                    {
                        "emoji": "🗑",
                        "description": "wastebasket",
                        "category": "Objects",
                        "aliases": ["wastebasket"],
                        "tags": ["trash"],
                        "unicode": "1f5d1"
                    },
                    {
                        "emoji": "🛢",
                        "description": "oil drum",
                        "category": "Objects",
                        "aliases": ["oil_drum"],
                        "tags": [],
                        "unicode": "1f6e2"
                    },
                    {
                        "emoji": "💸",
                        "description": "money with wings",
                        "category": "Objects",
                        "aliases": ["money_with_wings"],
                        "tags": ["dollar"],
                        "unicode": "1f4b8"
                    },
                    {
                        "emoji": "💵",
                        "description": "dollar banknote",
                        "category": "Objects",
                        "aliases": ["dollar"],
                        "tags": ["money"],
                        "unicode": "1f4b5"
                    },
                    {
                        "emoji": "💴",
                        "description": "yen banknote",
                        "category": "Objects",
                        "aliases": ["yen"],
                        "tags": [],
                        "unicode": "1f4b4"
                    },
                    {
                        "emoji": "💶",
                        "description": "euro banknote",
                        "category": "Objects",
                        "aliases": ["euro"],
                        "tags": [],
                        "unicode": "1f4b6"
                    },
                    {
                        "emoji": "💷",
                        "description": "pound banknote",
                        "category": "Objects",
                        "aliases": ["pound"],
                        "tags": [],
                        "unicode": "1f4b7"
                    },
                    {
                        "emoji": "💰",
                        "description": "money bag",
                        "category": "Objects",
                        "aliases": ["moneybag"],
                        "tags": ["dollar", "cream"],
                        "unicode": "1f4b0"
                    },
                    {
                        "emoji": "💳",
                        "description": "credit card",
                        "category": "Objects",
                        "aliases": ["credit_card"],
                        "tags": ["subscription"],
                        "unicode": "1f4b3"
                    },
                    {
                        "emoji": "💎",
                        "description": "gem stone",
                        "category": "Objects",
                        "aliases": ["gem"],
                        "tags": ["diamond"],
                        "unicode": "1f48e"
                    },
                    {
                        "emoji": "⚖️",
                        "description": "balance scale",
                        "category": "Objects",
                        "aliases": ["balance_scale"],
                        "tags": [],
                        "unicode": "2696"
                    },
                    {
                        "emoji": "🔧",
                        "description": "wrench",
                        "category": "Objects",
                        "aliases": ["wrench"],
                        "tags": ["tool"],
                        "unicode": "1f527"
                    },
                    {
                        "emoji": "🔨",
                        "description": "hammer",
                        "category": "Objects",
                        "aliases": ["hammer"],
                        "tags": ["tool"],
                        "unicode": "1f528"
                    },
                    {
                        "emoji": "⚒",
                        "description": "hammer and pick",
                        "category": "Objects",
                        "aliases": ["hammer_and_pick"],
                        "tags": [],
                        "unicode": "2692"
                    },
                    {
                        "emoji": "🛠",
                        "description": "hammer and wrench",
                        "category": "Objects",
                        "aliases": ["hammer_and_wrench"],
                        "tags": [],
                        "unicode": "1f6e0"
                    },
                    {
                        "emoji": "⛏",
                        "description": "pick",
                        "category": "Objects",
                        "aliases": ["pick"],
                        "tags": [],
                        "unicode": "26cf"
                    },
                    {
                        "emoji": "🔩",
                        "description": "nut and bolt",
                        "category": "Objects",
                        "aliases": ["nut_and_bolt"],
                        "tags": [],
                        "unicode": "1f529"
                    },
                    {
                        "emoji": "⚙️",
                        "description": "gear",
                        "category": "Objects",
                        "aliases": ["gear"],
                        "tags": [],
                        "unicode": "2699"
                    },
                    {
                        "emoji": "⛓",
                        "description": "chains",
                        "category": "Objects",
                        "aliases": ["chains"],
                        "tags": [],
                        "unicode": "26d3"
                    },
                    {
                        "emoji": "🔫",
                        "description": "pistol",
                        "category": "Objects",
                        "aliases": ["gun"],
                        "tags": ["shoot", "weapon"],
                        "unicode": "1f52b"
                    },
                    {
                        "emoji": "💣",
                        "description": "bomb",
                        "category": "Objects",
                        "aliases": ["bomb"],
                        "tags": ["boom"],
                        "unicode": "1f4a3"
                    },
                    {
                        "emoji": "🔪",
                        "description": "kitchen knife",
                        "category": "Objects",
                        "aliases": ["hocho", "knife"],
                        "tags": ["cut", "chop"],
                        "unicode": "1f52a"
                    },
                    {
                        "emoji": "🗡",
                        "description": "dagger",
                        "category": "Objects",
                        "aliases": ["dagger"],
                        "tags": [],
                        "unicode": "1f5e1"
                    },
                    {
                        "emoji": "⚔️",
                        "description": "crossed swords",
                        "category": "Objects",
                        "aliases": ["crossed_swords"],
                        "tags": [],
                        "unicode": "2694"
                    },
                    {
                        "emoji": "🛡",
                        "description": "shield",
                        "category": "Objects",
                        "aliases": ["shield"],
                        "tags": [],
                        "unicode": "1f6e1"
                    },
                    {
                        "emoji": "🚬",
                        "description": "cigarette",
                        "category": "Objects",
                        "aliases": ["smoking"],
                        "tags": ["cigarette"],
                        "unicode": "1f6ac"
                    },
                    {
                        "emoji": "⚰️",
                        "description": "coffin",
                        "category": "Objects",
                        "aliases": ["coffin"],
                        "tags": ["funeral"],
                        "unicode": "26b0"
                    },
                    {
                        "emoji": "⚱️",
                        "description": "funeral urn",
                        "category": "Objects",
                        "aliases": ["funeral_urn"],
                        "tags": [],
                        "unicode": "26b1"
                    },
                    {
                        "emoji": "🏺",
                        "description": "amphora",
                        "category": "Objects",
                        "aliases": ["amphora"],
                        "tags": [],
                        "unicode": "1f3fa"
                    },
                    {
                        "emoji": "🔮",
                        "description": "crystal ball",
                        "category": "Objects",
                        "aliases": ["crystal_ball"],
                        "tags": ["fortune"],
                        "unicode": "1f52e"
                    },
                    {
                        "emoji": "📿",
                        "description": "prayer beads",
                        "category": "Objects",
                        "aliases": ["prayer_beads"],
                        "tags": [],
                        "unicode": "1f4ff"
                    },
                    {
                        "emoji": "💈",
                        "description": "barber pole",
                        "category": "Objects",
                        "aliases": ["barber"],
                        "tags": [],
                        "unicode": "1f488"
                    },
                    {
                        "emoji": "⚗️",
                        "description": "alembic",
                        "category": "Objects",
                        "aliases": ["alembic"],
                        "tags": [],
                        "unicode": "2697"
                    },
                    {
                        "emoji": "🔭",
                        "description": "telescope",
                        "category": "Objects",
                        "aliases": ["telescope"],
                        "tags": [],
                        "unicode": "1f52d"
                    },
                    {
                        "emoji": "🔬",
                        "description": "microscope",
                        "category": "Objects",
                        "aliases": ["microscope"],
                        "tags": ["science", "laboratory", "investigate"],
                        "unicode": "1f52c"
                    },
                    {
                        "emoji": "🕳",
                        "description": "hole",
                        "category": "Objects",
                        "aliases": ["hole"],
                        "tags": [],
                        "unicode": "1f573"
                    },
                    {
                        "emoji": "💊",
                        "description": "pill",
                        "category": "Objects",
                        "aliases": ["pill"],
                        "tags": ["health", "medicine"],
                        "unicode": "1f48a"
                    },
                    {
                        "emoji": "💉",
                        "description": "syringe",
                        "category": "Objects",
                        "aliases": ["syringe"],
                        "tags": ["health", "hospital", "needle"],
                        "unicode": "1f489"
                    },
                    {
                        "emoji": "🌡",
                        "description": "thermometer",
                        "category": "Objects",
                        "aliases": ["thermometer"],
                        "tags": [],
                        "unicode": "1f321"
                    },
                    {
                        "emoji": "🚽",
                        "description": "toilet",
                        "category": "Objects",
                        "aliases": ["toilet"],
                        "tags": ["wc"],
                        "unicode": "1f6bd"
                    },
                    {
                        "emoji": "🚰",
                        "description": "potable water",
                        "category": "Objects",
                        "aliases": ["potable_water"],
                        "tags": [],
                        "unicode": "1f6b0"
                    },
                    {
                        "emoji": "🚿",
                        "description": "shower",
                        "category": "Objects",
                        "aliases": ["shower"],
                        "tags": ["bath"],
                        "unicode": "1f6bf"
                    },
                    {
                        "emoji": "🛁",
                        "description": "bathtub",
                        "category": "Objects",
                        "aliases": ["bathtub"],
                        "tags": [],
                        "unicode": "1f6c1"
                    },
                    {
                        "emoji": "🛀",
                        "description": "person taking bath",
                        "category": "Objects",
                        "aliases": ["bath"],
                        "tags": ["shower"],
                        "unicode": "1f6c0"
                    },
                    {
                        "emoji": "🛎",
                        "description": "bellhop bell",
                        "category": "Objects",
                        "aliases": ["bellhop_bell"],
                        "tags": [],
                        "unicode": "1f6ce"
                    },
                    {
                        "emoji": "🔑",
                        "description": "key",
                        "category": "Objects",
                        "aliases": ["key"],
                        "tags": ["lock", "password"],
                        "unicode": "1f511"
                    },
                    {
                        "emoji": "🗝",
                        "description": "old key",
                        "category": "Objects",
                        "aliases": ["old_key"],
                        "tags": [],
                        "unicode": "1f5dd"
                    },
                    {
                        "emoji": "🚪",
                        "description": "door",
                        "category": "Objects",
                        "aliases": ["door"],
                        "tags": [],
                        "unicode": "1f6aa"
                    },
                    {
                        "emoji": "🛋",
                        "description": "couch and lamp",
                        "category": "Objects",
                        "aliases": ["couch_and_lamp"],
                        "tags": [],
                        "unicode": "1f6cb"
                    },
                    {
                        "emoji": "🛏",
                        "description": "bed",
                        "category": "Objects",
                        "aliases": ["bed"],
                        "tags": [],
                        "unicode": "1f6cf"
                    },
                    {
                        "emoji": "🛌",
                        "description": "person in bed",
                        "category": "Objects",
                        "aliases": ["sleeping_bed"],
                        "tags": [],
                        "unicode": "1f6cc"
                    },
                    {
                        "emoji": "🖼",
                        "description": "framed picture",
                        "category": "Objects",
                        "aliases": ["framed_picture"],
                        "tags": [],
                        "unicode": "1f5bc"
                    },
                    {
                        "emoji": "🛍",
                        "description": "shopping bags",
                        "category": "Objects",
                        "aliases": ["shopping"],
                        "tags": ["bags"],
                        "unicode": "1f6cd"
                    },
                    {
                        "emoji": "🛒",
                        "description": "shopping cart",
                        "category": "Objects",
                        "aliases": ["shopping_cart"],
                        "tags": [],
                        "unicode": "1f6d2"
                    },
                    {
                        "emoji": "🎁",
                        "description": "wrapped gift",
                        "category": "Objects",
                        "aliases": ["gift"],
                        "tags": ["present", "birthday", "christmas"],
                        "unicode": "1f381"
                    },
                    {
                        "emoji": "🎈",
                        "description": "balloon",
                        "category": "Objects",
                        "aliases": ["balloon"],
                        "tags": ["party", "birthday"],
                        "unicode": "1f388"
                    },
                    {
                        "emoji": "🎏",
                        "description": "carp streamer",
                        "category": "Objects",
                        "aliases": ["flags"],
                        "tags": [],
                        "unicode": "1f38f"
                    },
                    {
                        "emoji": "🎀",
                        "description": "ribbon",
                        "category": "Objects",
                        "aliases": ["ribbon"],
                        "tags": [],
                        "unicode": "1f380"
                    },
                    {
                        "emoji": "🎊",
                        "description": "confetti ball",
                        "category": "Objects",
                        "aliases": ["confetti_ball"],
                        "tags": [],
                        "unicode": "1f38a"
                    },
                    {
                        "emoji": "🎉",
                        "description": "party popper",
                        "category": "Objects",
                        "aliases": ["tada"],
                        "tags": ["hooray", "party"],
                        "unicode": "1f389"
                    },
                    {
                        "emoji": "🎎",
                        "description": "Japanese dolls",
                        "category": "Objects",
                        "aliases": ["dolls"],
                        "tags": [],
                        "unicode": "1f38e"
                    },
                    {
                        "emoji": "🏮",
                        "description": "red paper lantern",
                        "category": "Objects",
                        "aliases": ["izakaya_lantern", "lantern"],
                        "tags": [],
                        "unicode": "1f3ee"
                    },
                    {
                        "emoji": "🎐",
                        "description": "wind chime",
                        "category": "Objects",
                        "aliases": ["wind_chime"],
                        "tags": [],
                        "unicode": "1f390"
                    },
                    {
                        "emoji": "✉️",
                        "description": "envelope",
                        "category": "Objects",
                        "aliases": ["email", "envelope"],
                        "tags": ["letter"],
                        "unicode": "2709"
                    },
                    {
                        "emoji": "📩",
                        "description": "envelope with arrow",
                        "category": "Objects",
                        "aliases": ["envelope_with_arrow"],
                        "tags": [],
                        "unicode": "1f4e9"
                    },
                    {
                        "emoji": "📨",
                        "description": "incoming envelope",
                        "category": "Objects",
                        "aliases": ["incoming_envelope"],
                        "tags": [],
                        "unicode": "1f4e8"
                    },
                    {
                        "emoji": "📧",
                        "description": "e-mail",
                        "category": "Objects",
                        "aliases": ["e-mail"],
                        "tags": [],
                        "unicode": "1f4e7"
                    },
                    {
                        "emoji": "💌",
                        "description": "love letter",
                        "category": "Objects",
                        "aliases": ["love_letter"],
                        "tags": ["email", "envelope"],
                        "unicode": "1f48c"
                    },
                    {
                        "emoji": "📥",
                        "description": "inbox tray",
                        "category": "Objects",
                        "aliases": ["inbox_tray"],
                        "tags": [],
                        "unicode": "1f4e5"
                    },
                    {
                        "emoji": "📤",
                        "description": "outbox tray",
                        "category": "Objects",
                        "aliases": ["outbox_tray"],
                        "tags": [],
                        "unicode": "1f4e4"
                    },
                    {
                        "emoji": "📦",
                        "description": "package",
                        "category": "Objects",
                        "aliases": ["package"],
                        "tags": ["shipping"],
                        "unicode": "1f4e6"
                    },
                    {
                        "emoji": "🏷",
                        "description": "label",
                        "category": "Objects",
                        "aliases": ["label"],
                        "tags": ["tag"],
                        "unicode": "1f3f7"
                    },
                    {
                        "emoji": "📪",
                        "description": "closed mailbox with lowered flag",
                        "category": "Objects",
                        "aliases": ["mailbox_closed"],
                        "tags": [],
                        "unicode": "1f4ea"
                    },
                    {
                        "emoji": "📫",
                        "description": "closed mailbox with raised flag",
                        "category": "Objects",
                        "aliases": ["mailbox"],
                        "tags": [],
                        "unicode": "1f4eb"
                    },
                    {
                        "emoji": "📬",
                        "description": "open mailbox with raised flag",
                        "category": "Objects",
                        "aliases": ["mailbox_with_mail"],
                        "tags": [],
                        "unicode": "1f4ec"
                    },
                    {
                        "emoji": "📭",
                        "description": "open mailbox with lowered flag",
                        "category": "Objects",
                        "aliases": ["mailbox_with_no_mail"],
                        "tags": [],
                        "unicode": "1f4ed"
                    },
                    {
                        "emoji": "📮",
                        "description": "postbox",
                        "category": "Objects",
                        "aliases": ["postbox"],
                        "tags": [],
                        "unicode": "1f4ee"
                    },
                    {
                        "emoji": "📯",
                        "description": "postal horn",
                        "category": "Objects",
                        "aliases": ["postal_horn"],
                        "tags": [],
                        "unicode": "1f4ef"
                    },
                    {
                        "emoji": "📜",
                        "description": "scroll",
                        "category": "Objects",
                        "aliases": ["scroll"],
                        "tags": ["document"],
                        "unicode": "1f4dc"
                    },
                    {
                        "emoji": "📃",
                        "description": "page with curl",
                        "category": "Objects",
                        "aliases": ["page_with_curl"],
                        "tags": [],
                        "unicode": "1f4c3"
                    },
                    {
                        "emoji": "📄",
                        "description": "page facing up",
                        "category": "Objects",
                        "aliases": ["page_facing_up"],
                        "tags": ["document"],
                        "unicode": "1f4c4"
                    },
                    {
                        "emoji": "📑",
                        "description": "bookmark tabs",
                        "category": "Objects",
                        "aliases": ["bookmark_tabs"],
                        "tags": [],
                        "unicode": "1f4d1"
                    },
                    {
                        "emoji": "📊",
                        "description": "bar chart",
                        "category": "Objects",
                        "aliases": ["bar_chart"],
                        "tags": ["stats", "metrics"],
                        "unicode": "1f4ca"
                    },
                    {
                        "emoji": "📈",
                        "description": "chart increasing",
                        "category": "Objects",
                        "aliases": ["chart_with_upwards_trend"],
                        "tags": ["graph", "metrics"],
                        "unicode": "1f4c8"
                    },
                    {
                        "emoji": "📉",
                        "description": "chart decreasing",
                        "category": "Objects",
                        "aliases": ["chart_with_downwards_trend"],
                        "tags": ["graph", "metrics"],
                        "unicode": "1f4c9"
                    },
                    {
                        "emoji": "🗒",
                        "description": "spiral notepad",
                        "category": "Objects",
                        "aliases": ["spiral_notepad"],
                        "tags": [],
                        "unicode": "1f5d2"
                    },
                    {
                        "emoji": "🗓",
                        "description": "spiral calendar",
                        "category": "Objects",
                        "aliases": ["spiral_calendar"],
                        "tags": [],
                        "unicode": "1f5d3"
                    },
                    {
                        "emoji": "📆",
                        "description": "tear-off calendar",
                        "category": "Objects",
                        "aliases": ["calendar"],
                        "tags": ["schedule"],
                        "unicode": "1f4c6"
                    },
                    {
                        "emoji": "📅",
                        "description": "calendar",
                        "category": "Objects",
                        "aliases": ["date"],
                        "tags": ["calendar", "schedule"],
                        "unicode": "1f4c5"
                    },
                    {
                        "emoji": "📇",
                        "description": "card index",
                        "category": "Objects",
                        "aliases": ["card_index"],
                        "tags": [],
                        "unicode": "1f4c7"
                    },
                    {
                        "emoji": "🗃",
                        "description": "card file box",
                        "category": "Objects",
                        "aliases": ["card_file_box"],
                        "tags": [],
                        "unicode": "1f5c3"
                    },
                    {
                        "emoji": "🗳",
                        "description": "ballot box with ballot",
                        "category": "Objects",
                        "aliases": ["ballot_box"],
                        "tags": [],
                        "unicode": "1f5f3"
                    },
                    {
                        "emoji": "🗄",
                        "description": "file cabinet",
                        "category": "Objects",
                        "aliases": ["file_cabinet"],
                        "tags": [],
                        "unicode": "1f5c4"
                    },
                    {
                        "emoji": "📋",
                        "description": "clipboard",
                        "category": "Objects",
                        "aliases": ["clipboard"],
                        "tags": [],
                        "unicode": "1f4cb"
                    },
                    {
                        "emoji": "📁",
                        "description": "file folder",
                        "category": "Objects",
                        "aliases": ["file_folder"],
                        "tags": ["directory"],
                        "unicode": "1f4c1"
                    },
                    {
                        "emoji": "📂",
                        "description": "open file folder",
                        "category": "Objects",
                        "aliases": ["open_file_folder"],
                        "tags": [],
                        "unicode": "1f4c2"
                    },
                    {
                        "emoji": "🗂",
                        "description": "card index dividers",
                        "category": "Objects",
                        "aliases": ["card_index_dividers"],
                        "tags": [],
                        "unicode": "1f5c2"
                    },
                    {
                        "emoji": "🗞",
                        "description": "rolled-up newspaper",
                        "category": "Objects",
                        "aliases": ["newspaper_roll"],
                        "tags": ["press"],
                        "unicode": "1f5de"
                    },
                    {
                        "emoji": "📰",
                        "description": "newspaper",
                        "category": "Objects",
                        "aliases": ["newspaper"],
                        "tags": ["press"],
                        "unicode": "1f4f0"
                    },
                    {
                        "emoji": "📓",
                        "description": "notebook",
                        "category": "Objects",
                        "aliases": ["notebook"],
                        "tags": [],
                        "unicode": "1f4d3"
                    },
                    {
                        "emoji": "📔",
                        "description": "notebook with decorative cover",
                        "category": "Objects",
                        "aliases": ["notebook_with_decorative_cover"],
                        "tags": [],
                        "unicode": "1f4d4"
                    },
                    {
                        "emoji": "📒",
                        "description": "ledger",
                        "category": "Objects",
                        "aliases": ["ledger"],
                        "tags": [],
                        "unicode": "1f4d2"
                    },
                    {
                        "emoji": "📕",
                        "description": "closed book",
                        "category": "Objects",
                        "aliases": ["closed_book"],
                        "tags": [],
                        "unicode": "1f4d5"
                    },
                    {
                        "emoji": "📗",
                        "description": "green book",
                        "category": "Objects",
                        "aliases": ["green_book"],
                        "tags": [],
                        "unicode": "1f4d7"
                    },
                    {
                        "emoji": "📘",
                        "description": "blue book",
                        "category": "Objects",
                        "aliases": ["blue_book"],
                        "tags": [],
                        "unicode": "1f4d8"
                    },
                    {
                        "emoji": "📙",
                        "description": "orange book",
                        "category": "Objects",
                        "aliases": ["orange_book"],
                        "tags": [],
                        "unicode": "1f4d9"
                    },
                    {
                        "emoji": "📚",
                        "description": "books",
                        "category": "Objects",
                        "aliases": ["books"],
                        "tags": ["library"],
                        "unicode": "1f4da"
                    },
                    {
                        "emoji": "📖",
                        "description": "open book",
                        "category": "Objects",
                        "aliases": ["book", "open_book"],
                        "tags": [],
                        "unicode": "1f4d6"
                    },
                    {
                        "emoji": "🔖",
                        "description": "bookmark",
                        "category": "Objects",
                        "aliases": ["bookmark"],
                        "tags": [],
                        "unicode": "1f516"
                    },
                    {
                        "emoji": "🔗",
                        "description": "link",
                        "category": "Objects",
                        "aliases": ["link"],
                        "tags": [],
                        "unicode": "1f517"
                    },
                    {
                        "emoji": "📎",
                        "description": "paperclip",
                        "category": "Objects",
                        "aliases": ["paperclip"],
                        "tags": [],
                        "unicode": "1f4ce"
                    },
                    {
                        "emoji": "🖇",
                        "description": "linked paperclips",
                        "category": "Objects",
                        "aliases": ["paperclips"],
                        "tags": [],
                        "unicode": "1f587"
                    },
                    {
                        "emoji": "📐",
                        "description": "triangular ruler",
                        "category": "Objects",
                        "aliases": ["triangular_ruler"],
                        "tags": [],
                        "unicode": "1f4d0"
                    },
                    {
                        "emoji": "📏",
                        "description": "straight ruler",
                        "category": "Objects",
                        "aliases": ["straight_ruler"],
                        "tags": [],
                        "unicode": "1f4cf"
                    },
                    {
                        "emoji": "📌",
                        "description": "pushpin",
                        "category": "Objects",
                        "aliases": ["pushpin"],
                        "tags": ["location"],
                        "unicode": "1f4cc"
                    },
                    {
                        "emoji": "📍",
                        "description": "round pushpin",
                        "category": "Objects",
                        "aliases": ["round_pushpin"],
                        "tags": ["location"],
                        "unicode": "1f4cd"
                    },
                    {
                        "emoji": "✂️",
                        "description": "scissors",
                        "category": "Objects",
                        "aliases": ["scissors"],
                        "tags": ["cut"],
                        "unicode": "2702"
                    },
                    {
                        "emoji": "🖊",
                        "description": "pen",
                        "category": "Objects",
                        "aliases": ["pen"],
                        "tags": [],
                        "unicode": "1f58a"
                    },
                    {
                        "emoji": "🖋",
                        "description": "fountain pen",
                        "category": "Objects",
                        "aliases": ["fountain_pen"],
                        "tags": [],
                        "unicode": "1f58b"
                    },
                    {
                        "emoji": "✒️",
                        "description": "black nib",
                        "category": "Objects",
                        "aliases": ["black_nib"],
                        "tags": [],
                        "unicode": "2712"
                    },
                    {
                        "emoji": "🖌",
                        "description": "paintbrush",
                        "category": "Objects",
                        "aliases": ["paintbrush"],
                        "tags": [],
                        "unicode": "1f58c"
                    },
                    {
                        "emoji": "🖍",
                        "description": "crayon",
                        "category": "Objects",
                        "aliases": ["crayon"],
                        "tags": [],
                        "unicode": "1f58d"
                    },
                    {
                        "emoji": "📝",
                        "description": "memo",
                        "category": "Objects",
                        "aliases": ["memo", "pencil"],
                        "tags": ["document", "note"],
                        "unicode": "1f4dd"
                    },
                    {
                        "emoji": "✏️",
                        "description": "pencil",
                        "category": "Objects",
                        "aliases": ["pencil2"],
                        "tags": [],
                        "unicode": "270f"
                    },
                    {
                        "emoji": "🔍",
                        "description": "left-pointing magnifying glass",
                        "category": "Objects",
                        "aliases": ["mag"],
                        "tags": ["search", "zoom"],
                        "unicode": "1f50d"
                    },
                    {
                        "emoji": "🔎",
                        "description": "right-pointing magnifying glass",
                        "category": "Objects",
                        "aliases": ["mag_right"],
                        "tags": [],
                        "unicode": "1f50e"
                    },
                    {
                        "emoji": "🔏",
                        "description": "locked with pen",
                        "category": "Objects",
                        "aliases": ["lock_with_ink_pen"],
                        "tags": [],
                        "unicode": "1f50f"
                    },
                    {
                        "emoji": "🔐",
                        "description": "locked with key",
                        "category": "Objects",
                        "aliases": ["closed_lock_with_key"],
                        "tags": ["security"],
                        "unicode": "1f510"
                    },
                    {
                        "emoji": "🔒",
                        "description": "locked",
                        "category": "Objects",
                        "aliases": ["lock"],
                        "tags": ["security", "private"],
                        "unicode": "1f512"
                    },
                    {
                        "emoji": "🔓",
                        "description": "unlocked",
                        "category": "Objects",
                        "aliases": ["unlock"],
                        "tags": ["security"],
                        "unicode": "1f513"
                    },
                    {
                        "emoji": "❤️",
                        "description": "red heart",
                        "category": "Symbols",
                        "aliases": ["heart"],
                        "tags": ["love"],
                        "unicode": "2764"
                    },
                    {
                        "emoji": "💛",
                        "description": "yellow heart",
                        "category": "Symbols",
                        "aliases": ["yellow_heart"],
                        "tags": [],
                        "unicode": "1f49b"
                    },
                    {
                        "emoji": "💚",
                        "description": "green heart",
                        "category": "Symbols",
                        "aliases": ["green_heart"],
                        "tags": [],
                        "unicode": "1f49a"
                    },
                    {
                        "emoji": "💙",
                        "description": "blue heart",
                        "category": "Symbols",
                        "aliases": ["blue_heart"],
                        "tags": [],
                        "unicode": "1f499"
                    },
                    {
                        "emoji": "💜",
                        "description": "purple heart",
                        "category": "Symbols",
                        "aliases": ["purple_heart"],
                        "tags": [],
                        "unicode": "1f49c"
                    },
                    {
                        "emoji": "🖤",
                        "description": "black heart",
                        "category": "Symbols",
                        "aliases": ["black_heart"],
                        "tags": [],
                        "unicode": "1f5a4"
                    },
                    {
                        "emoji": "💔",
                        "description": "broken heart",
                        "category": "Symbols",
                        "aliases": ["broken_heart"],
                        "tags": [],
                        "unicode": "1f494"
                    },
                    {
                        "emoji": "❣️",
                        "description": "heavy heart exclamation",
                        "category": "Symbols",
                        "aliases": ["heavy_heart_exclamation"],
                        "tags": [],
                        "unicode": "2763"
                    },
                    {
                        "emoji": "💕",
                        "description": "two hearts",
                        "category": "Symbols",
                        "aliases": ["two_hearts"],
                        "tags": [],
                        "unicode": "1f495"
                    },
                    {
                        "emoji": "💞",
                        "description": "revolving hearts",
                        "category": "Symbols",
                        "aliases": ["revolving_hearts"],
                        "tags": [],
                        "unicode": "1f49e"
                    },
                    {
                        "emoji": "💓",
                        "description": "beating heart",
                        "category": "Symbols",
                        "aliases": ["heartbeat"],
                        "tags": [],
                        "unicode": "1f493"
                    },
                    {
                        "emoji": "💗",
                        "description": "growing heart",
                        "category": "Symbols",
                        "aliases": ["heartpulse"],
                        "tags": [],
                        "unicode": "1f497"
                    },
                    {
                        "emoji": "💖",
                        "description": "sparkling heart",
                        "category": "Symbols",
                        "aliases": ["sparkling_heart"],
                        "tags": [],
                        "unicode": "1f496"
                    },
                    {
                        "emoji": "💘",
                        "description": "heart with arrow",
                        "category": "Symbols",
                        "aliases": ["cupid"],
                        "tags": ["love", "heart"],
                        "unicode": "1f498"
                    },
                    {
                        "emoji": "💝",
                        "description": "heart with ribbon",
                        "category": "Symbols",
                        "aliases": ["gift_heart"],
                        "tags": ["chocolates"],
                        "unicode": "1f49d"
                    },
                    {
                        "emoji": "💟",
                        "description": "heart decoration",
                        "category": "Symbols",
                        "aliases": ["heart_decoration"],
                        "tags": [],
                        "unicode": "1f49f"
                    },
                    {
                        "emoji": "☮️",
                        "description": "peace symbol",
                        "category": "Symbols",
                        "aliases": ["peace_symbol"],
                        "tags": [],
                        "unicode": "262e"
                    },
                    {
                        "emoji": "✝️",
                        "description": "latin cross",
                        "category": "Symbols",
                        "aliases": ["latin_cross"],
                        "tags": [],
                        "unicode": "271d"
                    },
                    {
                        "emoji": "☪️",
                        "description": "star and crescent",
                        "category": "Symbols",
                        "aliases": ["star_and_crescent"],
                        "tags": [],
                        "unicode": "262a"
                    },
                    {
                        "emoji": "🕉",
                        "description": "om",
                        "category": "Symbols",
                        "aliases": ["om"],
                        "tags": [],
                        "unicode": "1f549"
                    },
                    {
                        "emoji": "☸️",
                        "description": "wheel of dharma",
                        "category": "Symbols",
                        "aliases": ["wheel_of_dharma"],
                        "tags": [],
                        "unicode": "2638"
                    },
                    {
                        "emoji": "✡️",
                        "description": "star of David",
                        "category": "Symbols",
                        "aliases": ["star_of_david"],
                        "tags": [],
                        "unicode": "2721"
                    },
                    {
                        "emoji": "🔯",
                        "description": "dotted six-pointed star",
                        "category": "Symbols",
                        "aliases": ["six_pointed_star"],
                        "tags": [],
                        "unicode": "1f52f"
                    },
                    {
                        "emoji": "🕎",
                        "description": "menorah",
                        "category": "Symbols",
                        "aliases": ["menorah"],
                        "tags": [],
                        "unicode": "1f54e"
                    },
                    {
                        "emoji": "☯️",
                        "description": "yin yang",
                        "category": "Symbols",
                        "aliases": ["yin_yang"],
                        "tags": [],
                        "unicode": "262f"
                    },
                    {
                        "emoji": "☦️",
                        "description": "orthodox cross",
                        "category": "Symbols",
                        "aliases": ["orthodox_cross"],
                        "tags": [],
                        "unicode": "2626"
                    },
                    {
                        "emoji": "🛐",
                        "description": "place of worship",
                        "category": "Symbols",
                        "aliases": ["place_of_worship"],
                        "tags": [],
                        "unicode": "1f6d0"
                    },
                    {
                        "emoji": "⛎",
                        "description": "Ophiuchus",
                        "category": "Symbols",
                        "aliases": ["ophiuchus"],
                        "tags": [],
                        "unicode": "26ce"
                    },
                    {
                        "emoji": "♈️",
                        "description": "Aries",
                        "category": "Symbols",
                        "aliases": ["aries"],
                        "tags": [],
                        "unicode": "2648"
                    },
                    {
                        "emoji": "♉️",
                        "description": "Taurus",
                        "category": "Symbols",
                        "aliases": ["taurus"],
                        "tags": [],
                        "unicode": "2649"
                    },
                    {
                        "emoji": "♊️",
                        "description": "Gemini",
                        "category": "Symbols",
                        "aliases": ["gemini"],
                        "tags": [],
                        "unicode": "264a"
                    },
                    {
                        "emoji": "♋️",
                        "description": "Cancer",
                        "category": "Symbols",
                        "aliases": ["cancer"],
                        "tags": [],
                        "unicode": "264b"
                    },
                    {
                        "emoji": "♌️",
                        "description": "Leo",
                        "category": "Symbols",
                        "aliases": ["leo"],
                        "tags": [],
                        "unicode": "264c"
                    },
                    {
                        "emoji": "♍️",
                        "description": "Virgo",
                        "category": "Symbols",
                        "aliases": ["virgo"],
                        "tags": [],
                        "unicode": "264d"
                    },
                    {
                        "emoji": "♎️",
                        "description": "Libra",
                        "category": "Symbols",
                        "aliases": ["libra"],
                        "tags": [],
                        "unicode": "264e"
                    },
                    {
                        "emoji": "♏️",
                        "description": "Scorpius",
                        "category": "Symbols",
                        "aliases": ["scorpius"],
                        "tags": [],
                        "unicode": "264f"
                    },
                    {
                        "emoji": "♐️",
                        "description": "Sagittarius",
                        "category": "Symbols",
                        "aliases": ["sagittarius"],
                        "tags": [],
                        "unicode": "2650"
                    },
                    {
                        "emoji": "♑️",
                        "description": "Capricorn",
                        "category": "Symbols",
                        "aliases": ["capricorn"],
                        "tags": [],
                        "unicode": "2651"
                    },
                    {
                        "emoji": "♒️",
                        "description": "Aquarius",
                        "category": "Symbols",
                        "aliases": ["aquarius"],
                        "tags": [],
                        "unicode": "2652"
                    },
                    {
                        "emoji": "♓️",
                        "description": "Pisces",
                        "category": "Symbols",
                        "aliases": ["pisces"],
                        "tags": [],
                        "unicode": "2653"
                    },
                    {
                        "emoji": "🆔",
                        "description": "ID button",
                        "category": "Symbols",
                        "aliases": ["id"],
                        "tags": [],
                        "unicode": "1f194"
                    },
                    {
                        "emoji": "⚛️",
                        "description": "atom symbol",
                        "category": "Symbols",
                        "aliases": ["atom_symbol"],
                        "tags": [],
                        "unicode": "269b"
                    },
                    {
                        "emoji": "🉑",
                        "description": "Japanese “acceptable” button",
                        "category": "Symbols",
                        "aliases": ["accept"],
                        "tags": [],
                        "unicode": "1f251"
                    },
                    {
                        "emoji": "☢️",
                        "description": "radioactive",
                        "category": "Symbols",
                        "aliases": ["radioactive"],
                        "tags": [],
                        "unicode": "2622"
                    },
                    {
                        "emoji": "☣️",
                        "description": "biohazard",
                        "category": "Symbols",
                        "aliases": ["biohazard"],
                        "tags": [],
                        "unicode": "2623"
                    },
                    {
                        "emoji": "📴",
                        "description": "mobile phone off",
                        "category": "Symbols",
                        "aliases": ["mobile_phone_off"],
                        "tags": ["mute", "off"],
                        "unicode": "1f4f4"
                    },
                    {
                        "emoji": "📳",
                        "description": "vibration mode",
                        "category": "Symbols",
                        "aliases": ["vibration_mode"],
                        "tags": [],
                        "unicode": "1f4f3"
                    },
                    {
                        "emoji": "🈶",
                        "description": "Japanese “not free of charge” button",
                        "category": "Symbols",
                        "aliases": ["u6709"],
                        "tags": [],
                        "unicode": "1f236"
                    },
                    {
                        "emoji": "🈚️",
                        "description": "Japanese “free of charge” button",
                        "category": "Symbols",
                        "aliases": ["u7121"],
                        "tags": [],
                        "unicode": "1f21a"
                    },
                    {
                        "emoji": "🈸",
                        "description": "Japanese “application” button",
                        "category": "Symbols",
                        "aliases": ["u7533"],
                        "tags": [],
                        "unicode": "1f238"
                    },
                    {
                        "emoji": "🈺",
                        "description": "Japanese “open for business” button",
                        "category": "Symbols",
                        "aliases": ["u55b6"],
                        "tags": [],
                        "unicode": "1f23a"
                    },
                    {
                        "emoji": "🈷️",
                        "description": "Japanese “monthly amount” button",
                        "category": "Symbols",
                        "aliases": ["u6708"],
                        "tags": [],
                        "unicode": "1f237"
                    },
                    {
                        "emoji": "✴️",
                        "description": "eight-pointed star",
                        "category": "Symbols",
                        "aliases": ["eight_pointed_black_star"],
                        "tags": [],
                        "unicode": "2734"
                    },
                    {
                        "emoji": "🆚",
                        "description": "VS button",
                        "category": "Symbols",
                        "aliases": ["vs"],
                        "tags": [],
                        "unicode": "1f19a"
                    },
                    {
                        "emoji": "💮",
                        "description": "white flower",
                        "category": "Symbols",
                        "aliases": ["white_flower"],
                        "tags": [],
                        "unicode": "1f4ae"
                    },
                    {
                        "emoji": "🉐",
                        "description": "Japanese “bargain” button",
                        "category": "Symbols",
                        "aliases": ["ideograph_advantage"],
                        "tags": [],
                        "unicode": "1f250"
                    },
                    {
                        "emoji": "㊙️",
                        "description": "Japanese “secret” button",
                        "category": "Symbols",
                        "aliases": ["secret"],
                        "tags": [],
                        "unicode": "3299"
                    },
                    {
                        "emoji": "㊗️",
                        "description": "Japanese “congratulations” button",
                        "category": "Symbols",
                        "aliases": ["congratulations"],
                        "tags": [],
                        "unicode": "3297"
                    },
                    {
                        "emoji": "🈴",
                        "description": "Japanese “passing grade” button",
                        "category": "Symbols",
                        "aliases": ["u5408"],
                        "tags": [],
                        "unicode": "1f234"
                    },
                    {
                        "emoji": "🈵",
                        "description": "Japanese “no vacancy” button",
                        "category": "Symbols",
                        "aliases": ["u6e80"],
                        "tags": [],
                        "unicode": "1f235"
                    },
                    {
                        "emoji": "🈹",
                        "description": "Japanese “discount” button",
                        "category": "Symbols",
                        "aliases": ["u5272"],
                        "tags": [],
                        "unicode": "1f239"
                    },
                    {
                        "emoji": "🈲",
                        "description": "Japanese “prohibited” button",
                        "category": "Symbols",
                        "aliases": ["u7981"],
                        "tags": [],
                        "unicode": "1f232"
                    },
                    {
                        "emoji": "🅰️",
                        "description": "A button (blood type)",
                        "category": "Symbols",
                        "aliases": ["a"],
                        "tags": [],
                        "unicode": "1f170"
                    },
                    {
                        "emoji": "🅱️",
                        "description": "B button (blood type)",
                        "category": "Symbols",
                        "aliases": ["b"],
                        "tags": [],
                        "unicode": "1f171"
                    },
                    {
                        "emoji": "🆎",
                        "description": "AB button (blood type)",
                        "category": "Symbols",
                        "aliases": ["ab"],
                        "tags": [],
                        "unicode": "1f18e"
                    },
                    {
                        "emoji": "🆑",
                        "description": "CL button",
                        "category": "Symbols",
                        "aliases": ["cl"],
                        "tags": [],
                        "unicode": "1f191"
                    },
                    {
                        "emoji": "🅾️",
                        "description": "O button (blood type)",
                        "category": "Symbols",
                        "aliases": ["o2"],
                        "tags": [],
                        "unicode": "1f17e"
                    },
                    {
                        "emoji": "🆘",
                        "description": "SOS button",
                        "category": "Symbols",
                        "aliases": ["sos"],
                        "tags": ["help", "emergency"],
                        "unicode": "1f198"
                    },
                    {
                        "emoji": "❌",
                        "description": "cross mark",
                        "category": "Symbols",
                        "aliases": ["x"],
                        "tags": [],
                        "unicode": "274c"
                    },
                    {
                        "emoji": "⭕️",
                        "description": "heavy large circle",
                        "category": "Symbols",
                        "aliases": ["o"],
                        "tags": [],
                        "unicode": "2b55"
                    },
                    {
                        "emoji": "🛑",
                        "description": "stop sign",
                        "category": "Symbols",
                        "aliases": ["stop_sign"],
                        "tags": [],
                        "unicode": "1f6d1"
                    },
                    {
                        "emoji": "⛔️",
                        "description": "no entry",
                        "category": "Symbols",
                        "aliases": ["no_entry"],
                        "tags": ["limit"],
                        "unicode": "26d4"
                    },
                    {
                        "emoji": "📛",
                        "description": "name badge",
                        "category": "Symbols",
                        "aliases": ["name_badge"],
                        "tags": [],
                        "unicode": "1f4db"
                    },
                    {
                        "emoji": "🚫",
                        "description": "prohibited",
                        "category": "Symbols",
                        "aliases": ["no_entry_sign"],
                        "tags": ["block", "forbidden"],
                        "unicode": "1f6ab"
                    },
                    {
                        "emoji": "💯",
                        "description": "hundred points",
                        "category": "Symbols",
                        "aliases": ["100"],
                        "tags": ["score", "perfect"],
                        "unicode": "1f4af"
                    },
                    {
                        "emoji": "💢",
                        "description": "anger symbol",
                        "category": "Symbols",
                        "aliases": ["anger"],
                        "tags": ["angry"],
                        "unicode": "1f4a2"
                    },
                    {
                        "emoji": "♨️",
                        "description": "hot springs",
                        "category": "Symbols",
                        "aliases": ["hotsprings"],
                        "tags": [],
                        "unicode": "2668"
                    },
                    {
                        "emoji": "🚷",
                        "description": "no pedestrians",
                        "category": "Symbols",
                        "aliases": ["no_pedestrians"],
                        "tags": [],
                        "unicode": "1f6b7"
                    },
                    {
                        "emoji": "🚯",
                        "description": "no littering",
                        "category": "Symbols",
                        "aliases": ["do_not_litter"],
                        "tags": [],
                        "unicode": "1f6af"
                    },
                    {
                        "emoji": "🚳",
                        "description": "no bicycles",
                        "category": "Symbols",
                        "aliases": ["no_bicycles"],
                        "tags": [],
                        "unicode": "1f6b3"
                    },
                    {
                        "emoji": "🚱",
                        "description": "non-potable water",
                        "category": "Symbols",
                        "aliases": ["non-potable_water"],
                        "tags": [],
                        "unicode": "1f6b1"
                    },
                    {
                        "emoji": "🔞",
                        "description": "no one under eighteen",
                        "category": "Symbols",
                        "aliases": ["underage"],
                        "tags": [],
                        "unicode": "1f51e"
                    },
                    {
                        "emoji": "📵",
                        "description": "no mobile phones",
                        "category": "Symbols",
                        "aliases": ["no_mobile_phones"],
                        "tags": [],
                        "unicode": "1f4f5"
                    },
                    {
                        "emoji": "🚭",
                        "description": "no smoking",
                        "category": "Symbols",
                        "aliases": ["no_smoking"],
                        "tags": [],
                        "unicode": "1f6ad"
                    },
                    {
                        "emoji": "❗️",
                        "description": "exclamation mark",
                        "category": "Symbols",
                        "aliases": ["exclamation", "heavy_exclamation_mark"],
                        "tags": ["bang"],
                        "unicode": "2757"
                    },
                    {
                        "emoji": "❕",
                        "description": "white exclamation mark",
                        "category": "Symbols",
                        "aliases": ["grey_exclamation"],
                        "tags": [],
                        "unicode": "2755"
                    },
                    {
                        "emoji": "❓",
                        "description": "question mark",
                        "category": "Symbols",
                        "aliases": ["question"],
                        "tags": ["confused"],
                        "unicode": "2753"
                    },
                    {
                        "emoji": "❔",
                        "description": "white question mark",
                        "category": "Symbols",
                        "aliases": ["grey_question"],
                        "tags": [],
                        "unicode": "2754"
                    },
                    {
                        "emoji": "‼️",
                        "description": "double exclamation mark",
                        "category": "Symbols",
                        "aliases": ["bangbang"],
                        "tags": [],
                        "unicode": "203c"
                    },
                    {
                        "emoji": "⁉️",
                        "description": "exclamation question mark",
                        "category": "Symbols",
                        "aliases": ["interrobang"],
                        "tags": [],
                        "unicode": "2049"
                    },
                    {
                        "emoji": "🔅",
                        "description": "dim button",
                        "category": "Symbols",
                        "aliases": ["low_brightness"],
                        "tags": [],
                        "unicode": "1f505"
                    },
                    {
                        "emoji": "🔆",
                        "description": "bright button",
                        "category": "Symbols",
                        "aliases": ["high_brightness"],
                        "tags": [],
                        "unicode": "1f506"
                    },
                    {
                        "emoji": "〽️",
                        "description": "part alternation mark",
                        "category": "Symbols",
                        "aliases": ["part_alternation_mark"],
                        "tags": [],
                        "unicode": "303d"
                    },
                    {
                        "emoji": "⚠️",
                        "description": "warning",
                        "category": "Symbols",
                        "aliases": ["warning"],
                        "tags": ["wip"],
                        "unicode": "26a0"
                    },
                    {
                        "emoji": "🚸",
                        "description": "children crossing",
                        "category": "Symbols",
                        "aliases": ["children_crossing"],
                        "tags": [],
                        "unicode": "1f6b8"
                    },
                    {
                        "emoji": "🔱",
                        "description": "trident emblem",
                        "category": "Symbols",
                        "aliases": ["trident"],
                        "tags": [],
                        "unicode": "1f531"
                    },
                    {
                        "emoji": "⚜️",
                        "description": "fleur-de-lis",
                        "category": "Symbols",
                        "aliases": ["fleur_de_lis"],
                        "tags": [],
                        "unicode": "269c"
                    },
                    {
                        "emoji": "🔰",
                        "description": "Japanese symbol for beginner",
                        "category": "Symbols",
                        "aliases": ["beginner"],
                        "tags": [],
                        "unicode": "1f530"
                    },
                    {
                        "emoji": "♻️",
                        "description": "recycling symbol",
                        "category": "Symbols",
                        "aliases": ["recycle"],
                        "tags": ["environment", "green"],
                        "unicode": "267b"
                    },
                    {
                        "emoji": "✅",
                        "description": "white heavy check mark",
                        "category": "Symbols",
                        "aliases": ["white_check_mark"],
                        "tags": [],
                        "unicode": "2705"
                    },
                    {
                        "emoji": "🈯️",
                        "description": "Japanese “reserved” button",
                        "category": "Symbols",
                        "aliases": ["u6307"],
                        "tags": [],
                        "unicode": "1f22f"
                    },
                    {
                        "emoji": "💹",
                        "description": "chart increasing with yen",
                        "category": "Symbols",
                        "aliases": ["chart"],
                        "tags": [],
                        "unicode": "1f4b9"
                    },
                    {
                        "emoji": "❇️",
                        "description": "sparkle",
                        "category": "Symbols",
                        "aliases": ["sparkle"],
                        "tags": [],
                        "unicode": "2747"
                    },
                    {
                        "emoji": "✳️",
                        "description": "eight-spoked asterisk",
                        "category": "Symbols",
                        "aliases": ["eight_spoked_asterisk"],
                        "tags": [],
                        "unicode": "2733"
                    },
                    {
                        "emoji": "❎",
                        "description": "cross mark button",
                        "category": "Symbols",
                        "aliases": ["negative_squared_cross_mark"],
                        "tags": [],
                        "unicode": "274e"
                    },
                    {
                        "emoji": "🌐",
                        "description": "globe with meridians",
                        "category": "Symbols",
                        "aliases": ["globe_with_meridians"],
                        "tags": ["world", "global", "international"],
                        "unicode": "1f310"
                    },
                    {
                        "emoji": "💠",
                        "description": "diamond with a dot",
                        "category": "Symbols",
                        "aliases": ["diamond_shape_with_a_dot_inside"],
                        "tags": [],
                        "unicode": "1f4a0"
                    },
                    {
                        "emoji": "Ⓜ️",
                        "description": "circled M",
                        "category": "Symbols",
                        "aliases": ["m"],
                        "tags": [],
                        "unicode": "24c2"
                    },
                    {
                        "emoji": "🌀",
                        "description": "cyclone",
                        "category": "Symbols",
                        "aliases": ["cyclone"],
                        "tags": ["swirl"],
                        "unicode": "1f300"
                    },
                    {
                        "emoji": "💤",
                        "description": "zzz",
                        "category": "Symbols",
                        "aliases": ["zzz"],
                        "tags": ["sleeping"],
                        "unicode": "1f4a4"
                    },
                    {
                        "emoji": "🏧",
                        "description": "ATM sign",
                        "category": "Symbols",
                        "aliases": ["atm"],
                        "tags": [],
                        "unicode": "1f3e7"
                    },
                    {
                        "emoji": "🚾",
                        "description": "water closet",
                        "category": "Symbols",
                        "aliases": ["wc"],
                        "tags": ["toilet", "restroom"],
                        "unicode": "1f6be"
                    },
                    {
                        "emoji": "♿️",
                        "description": "wheelchair symbol",
                        "category": "Symbols",
                        "aliases": ["wheelchair"],
                        "tags": ["accessibility"],
                        "unicode": "267f"
                    },
                    {
                        "emoji": "🅿️",
                        "description": "P button",
                        "category": "Symbols",
                        "aliases": ["parking"],
                        "tags": [],
                        "unicode": "1f17f"
                    },
                    {
                        "emoji": "🈳",
                        "description": "Japanese “vacancy” button",
                        "category": "Symbols",
                        "aliases": ["u7a7a"],
                        "tags": [],
                        "unicode": "1f233"
                    },
                    {
                        "emoji": "🈂️",
                        "description": "Japanese “service charge” button",
                        "category": "Symbols",
                        "aliases": ["sa"],
                        "tags": [],
                        "unicode": "1f202"
                    },
                    {
                        "emoji": "🛂",
                        "description": "passport control",
                        "category": "Symbols",
                        "aliases": ["passport_control"],
                        "tags": [],
                        "unicode": "1f6c2"
                    },
                    {
                        "emoji": "🛃",
                        "description": "customs",
                        "category": "Symbols",
                        "aliases": ["customs"],
                        "tags": [],
                        "unicode": "1f6c3"
                    },
                    {
                        "emoji": "🛄",
                        "description": "baggage claim",
                        "category": "Symbols",
                        "aliases": ["baggage_claim"],
                        "tags": ["airport"],
                        "unicode": "1f6c4"
                    },
                    {
                        "emoji": "🛅",
                        "description": "left luggage",
                        "category": "Symbols",
                        "aliases": ["left_luggage"],
                        "tags": [],
                        "unicode": "1f6c5"
                    },
                    {
                        "emoji": "🚹",
                        "description": "men’s room",
                        "category": "Symbols",
                        "aliases": ["mens"],
                        "tags": [],
                        "unicode": "1f6b9"
                    },
                    {
                        "emoji": "🚺",
                        "description": "women’s room",
                        "category": "Symbols",
                        "aliases": ["womens"],
                        "tags": [],
                        "unicode": "1f6ba"
                    },
                    {
                        "emoji": "🚼",
                        "description": "baby symbol",
                        "category": "Symbols",
                        "aliases": ["baby_symbol"],
                        "tags": [],
                        "unicode": "1f6bc"
                    },
                    {
                        "emoji": "🚻",
                        "description": "restroom",
                        "category": "Symbols",
                        "aliases": ["restroom"],
                        "tags": ["toilet"],
                        "unicode": "1f6bb"
                    },
                    {
                        "emoji": "🚮",
                        "description": "litter in bin sign",
                        "category": "Symbols",
                        "aliases": ["put_litter_in_its_place"],
                        "tags": [],
                        "unicode": "1f6ae"
                    },
                    {
                        "emoji": "🎦",
                        "description": "cinema",
                        "category": "Symbols",
                        "aliases": ["cinema"],
                        "tags": ["film", "movie"],
                        "unicode": "1f3a6"
                    },
                    {
                        "emoji": "📶",
                        "description": "antenna bars",
                        "category": "Symbols",
                        "aliases": ["signal_strength"],
                        "tags": ["wifi"],
                        "unicode": "1f4f6"
                    },
                    {
                        "emoji": "🈁",
                        "description": "Japanese “here” button",
                        "category": "Symbols",
                        "aliases": ["koko"],
                        "tags": [],
                        "unicode": "1f201"
                    },
                    {
                        "emoji": "🔣",
                        "description": "input symbols",
                        "category": "Symbols",
                        "aliases": ["symbols"],
                        "tags": [],
                        "unicode": "1f523"
                    },
                    {
                        "emoji": "ℹ️",
                        "description": "information",
                        "category": "Symbols",
                        "aliases": ["information_source"],
                        "tags": [],
                        "unicode": "2139"
                    },
                    {
                        "emoji": "🔤",
                        "description": "input latin letters",
                        "category": "Symbols",
                        "aliases": ["abc"],
                        "tags": ["alphabet"],
                        "unicode": "1f524"
                    },
                    {
                        "emoji": "🔡",
                        "description": "input latin lowercase",
                        "category": "Symbols",
                        "aliases": ["abcd"],
                        "tags": [],
                        "unicode": "1f521"
                    },
                    {
                        "emoji": "🔠",
                        "description": "input latin uppercase",
                        "category": "Symbols",
                        "aliases": ["capital_abcd"],
                        "tags": ["letters"],
                        "unicode": "1f520"
                    },
                    {
                        "emoji": "🆖",
                        "description": "NG button",
                        "category": "Symbols",
                        "aliases": ["ng"],
                        "tags": [],
                        "unicode": "1f196"
                    },
                    {
                        "emoji": "🆗",
                        "description": "OK button",
                        "category": "Symbols",
                        "aliases": ["ok"],
                        "tags": ["yes"],
                        "unicode": "1f197"
                    },
                    {
                        "emoji": "🆙",
                        "description": "UP! button",
                        "category": "Symbols",
                        "aliases": ["up"],
                        "tags": [],
                        "unicode": "1f199"
                    },
                    {
                        "emoji": "🆒",
                        "description": "COOL button",
                        "category": "Symbols",
                        "aliases": ["cool"],
                        "tags": [],
                        "unicode": "1f192"
                    },
                    {
                        "emoji": "🆕",
                        "description": "NEW button",
                        "category": "Symbols",
                        "aliases": ["new"],
                        "tags": ["fresh"],
                        "unicode": "1f195"
                    },
                    {
                        "emoji": "🆓",
                        "description": "FREE button",
                        "category": "Symbols",
                        "aliases": ["free"],
                        "tags": [],
                        "unicode": "1f193"
                    },
                    {
                        "emoji": "0️⃣",
                        "description": "keycap: 0",
                        "category": "Symbols",
                        "aliases": ["zero"],
                        "tags": [],
                        "unicode": "0030-20e3"
                    },
                    {
                        "emoji": "1️⃣",
                        "description": "keycap: 1",
                        "category": "Symbols",
                        "aliases": ["one"],
                        "tags": [],
                        "unicode": "0031-20e3"
                    },
                    {
                        "emoji": "2️⃣",
                        "description": "keycap: 2",
                        "category": "Symbols",
                        "aliases": ["two"],
                        "tags": [],
                        "unicode": "0032-20e3"
                    },
                    {
                        "emoji": "3️⃣",
                        "description": "keycap: 3",
                        "category": "Symbols",
                        "aliases": ["three"],
                        "tags": [],
                        "unicode": "0033-20e3"
                    },
                    {
                        "emoji": "4️⃣",
                        "description": "keycap: 4",
                        "category": "Symbols",
                        "aliases": ["four"],
                        "tags": [],
                        "unicode": "0034-20e3"
                    },
                    {
                        "emoji": "5️⃣",
                        "description": "keycap: 5",
                        "category": "Symbols",
                        "aliases": ["five"],
                        "tags": [],
                        "unicode": "0035-20e3"
                    },
                    {
                        "emoji": "6️⃣",
                        "description": "keycap: 6",
                        "category": "Symbols",
                        "aliases": ["six"],
                        "tags": [],
                        "unicode": "0036-20e3"
                    },
                    {
                        "emoji": "7️⃣",
                        "description": "keycap: 7",
                        "category": "Symbols",
                        "aliases": ["seven"],
                        "tags": [],
                        "unicode": "0037-20e3"
                    },
                    {
                        "emoji": "8️⃣",
                        "description": "keycap: 8",
                        "category": "Symbols",
                        "aliases": ["eight"],
                        "tags": [],
                        "unicode": "0038-20e3"
                    },
                    {
                        "emoji": "9️⃣",
                        "description": "keycap: 9",
                        "category": "Symbols",
                        "aliases": ["nine"],
                        "tags": [],
                        "unicode": "0039-20e3"
                    },
                    {
                        "emoji": "🔟",
                        "description": "keycap 10",
                        "category": "Symbols",
                        "aliases": ["keycap_ten"],
                        "tags": [],
                        "unicode": "1f51f"
                    },
                    {
                        "emoji": "🔢",
                        "description": "input numbers",
                        "category": "Symbols",
                        "aliases": ["1234"],
                        "tags": ["numbers"],
                        "unicode": "1f522"
                    },
                    {
                        "emoji": "#️⃣",
                        "description": "keycap: #",
                        "category": "Symbols",
                        "aliases": ["hash"],
                        "tags": ["number"],
                        "unicode": "0023-20e3"
                    },
                    {
                        "emoji": "*️⃣",
                        "description": "keycap: *",
                        "category": "Symbols",
                        "aliases": ["asterisk"],
                        "tags": [],
                        "unicode": "002a-20e3"
                    },
                    {
                        "emoji": "▶️",
                        "description": "play button",
                        "category": "Symbols",
                        "aliases": ["arrow_forward"],
                        "tags": [],
                        "unicode": "25b6"
                    },
                    {
                        "emoji": "⏸",
                        "description": "pause button",
                        "category": "Symbols",
                        "aliases": ["pause_button"],
                        "tags": [],
                        "unicode": "23f8"
                    },
                    {
                        "emoji": "⏯",
                        "description": "play or pause button",
                        "category": "Symbols",
                        "aliases": ["play_or_pause_button"],
                        "tags": [],
                        "unicode": "23ef"
                    },
                    {
                        "emoji": "⏹",
                        "description": "stop button",
                        "category": "Symbols",
                        "aliases": ["stop_button"],
                        "tags": [],
                        "unicode": "23f9"
                    },
                    {
                        "emoji": "⏺",
                        "description": "record button",
                        "category": "Symbols",
                        "aliases": ["record_button"],
                        "tags": [],
                        "unicode": "23fa"
                    },
                    {
                        "emoji": "⏭",
                        "description": "next track button",
                        "category": "Symbols",
                        "aliases": ["next_track_button"],
                        "tags": [],
                        "unicode": "23ed"
                    },
                    {
                        "emoji": "⏮",
                        "description": "last track button",
                        "category": "Symbols",
                        "aliases": ["previous_track_button"],
                        "tags": [],
                        "unicode": "23ee"
                    },
                    {
                        "emoji": "⏩",
                        "description": "fast-forward button",
                        "category": "Symbols",
                        "aliases": ["fast_forward"],
                        "tags": [],
                        "unicode": "23e9"
                    },
                    {
                        "emoji": "⏪",
                        "description": "fast reverse button",
                        "category": "Symbols",
                        "aliases": ["rewind"],
                        "tags": [],
                        "unicode": "23ea"
                    },
                    {
                        "emoji": "⏫",
                        "description": "fast up button",
                        "category": "Symbols",
                        "aliases": ["arrow_double_up"],
                        "tags": [],
                        "unicode": "23eb"
                    },
                    {
                        "emoji": "⏬",
                        "description": "fast down button",
                        "category": "Symbols",
                        "aliases": ["arrow_double_down"],
                        "tags": [],
                        "unicode": "23ec"
                    },
                    {
                        "emoji": "◀️",
                        "description": "reverse button",
                        "category": "Symbols",
                        "aliases": ["arrow_backward"],
                        "tags": [],
                        "unicode": "25c0"
                    },
                    {
                        "emoji": "🔼",
                        "description": "up button",
                        "category": "Symbols",
                        "aliases": ["arrow_up_small"],
                        "tags": [],
                        "unicode": "1f53c"
                    },
                    {
                        "emoji": "🔽",
                        "description": "down button",
                        "category": "Symbols",
                        "aliases": ["arrow_down_small"],
                        "tags": [],
                        "unicode": "1f53d"
                    },
                    {
                        "emoji": "➡️",
                        "description": "right arrow",
                        "category": "Symbols",
                        "aliases": ["arrow_right"],
                        "tags": [],
                        "unicode": "27a1"
                    },
                    {
                        "emoji": "⬅️",
                        "description": "left arrow",
                        "category": "Symbols",
                        "aliases": ["arrow_left"],
                        "tags": [],
                        "unicode": "2b05"
                    },
                    {
                        "emoji": "⬆️",
                        "description": "up arrow",
                        "category": "Symbols",
                        "aliases": ["arrow_up"],
                        "tags": [],
                        "unicode": "2b06"
                    },
                    {
                        "emoji": "⬇️",
                        "description": "down arrow",
                        "category": "Symbols",
                        "aliases": ["arrow_down"],
                        "tags": [],
                        "unicode": "2b07"
                    },
                    {
                        "emoji": "↗️",
                        "description": "up-right arrow",
                        "category": "Symbols",
                        "aliases": ["arrow_upper_right"],
                        "tags": [],
                        "unicode": "2197"
                    },
                    {
                        "emoji": "↘️",
                        "description": "down-right arrow",
                        "category": "Symbols",
                        "aliases": ["arrow_lower_right"],
                        "tags": [],
                        "unicode": "2198"
                    },
                    {
                        "emoji": "↙️",
                        "description": "down-left arrow",
                        "category": "Symbols",
                        "aliases": ["arrow_lower_left"],
                        "tags": [],
                        "unicode": "2199"
                    },
                    {
                        "emoji": "↖️",
                        "description": "up-left arrow",
                        "category": "Symbols",
                        "aliases": ["arrow_upper_left"],
                        "tags": [],
                        "unicode": "2196"
                    },
                    {
                        "emoji": "↕️",
                        "description": "up-down arrow",
                        "category": "Symbols",
                        "aliases": ["arrow_up_down"],
                        "tags": [],
                        "unicode": "2195"
                    },
                    {
                        "emoji": "↔️",
                        "description": "left-right arrow",
                        "category": "Symbols",
                        "aliases": ["left_right_arrow"],
                        "tags": [],
                        "unicode": "2194"
                    },
                    {
                        "emoji": "↪️",
                        "description": "left arrow curving right",
                        "category": "Symbols",
                        "aliases": ["arrow_right_hook"],
                        "tags": [],
                        "unicode": "21aa"
                    },
                    {
                        "emoji": "↩️",
                        "description": "right arrow curving left",
                        "category": "Symbols",
                        "aliases": ["leftwards_arrow_with_hook"],
                        "tags": ["return"],
                        "unicode": "21a9"
                    },
                    {
                        "emoji": "⤴️",
                        "description": "right arrow curving up",
                        "category": "Symbols",
                        "aliases": ["arrow_heading_up"],
                        "tags": [],
                        "unicode": "2934"
                    },
                    {
                        "emoji": "⤵️",
                        "description": "right arrow curving down",
                        "category": "Symbols",
                        "aliases": ["arrow_heading_down"],
                        "tags": [],
                        "unicode": "2935"
                    },
                    {
                        "emoji": "🔀",
                        "description": "shuffle tracks button",
                        "category": "Symbols",
                        "aliases": ["twisted_rightwards_arrows"],
                        "tags": ["shuffle"],
                        "unicode": "1f500"
                    },
                    {
                        "emoji": "🔁",
                        "description": "repeat button",
                        "category": "Symbols",
                        "aliases": ["repeat"],
                        "tags": ["loop"],
                        "unicode": "1f501"
                    },
                    {
                        "emoji": "🔂",
                        "description": "repeat single button",
                        "category": "Symbols",
                        "aliases": ["repeat_one"],
                        "tags": [],
                        "unicode": "1f502"
                    },
                    {
                        "emoji": "🔄",
                        "description": "anticlockwise arrows button",
                        "category": "Symbols",
                        "aliases": ["arrows_counterclockwise"],
                        "tags": ["sync"],
                        "unicode": "1f504"
                    },
                    {
                        "emoji": "🔃",
                        "description": "clockwise vertical arrows",
                        "category": "Symbols",
                        "aliases": ["arrows_clockwise"],
                        "tags": [],
                        "unicode": "1f503"
                    },
                    {
                        "emoji": "🎵",
                        "description": "musical note",
                        "category": "Symbols",
                        "aliases": ["musical_note"],
                        "tags": [],
                        "unicode": "1f3b5"
                    },
                    {
                        "emoji": "🎶",
                        "description": "musical notes",
                        "category": "Symbols",
                        "aliases": ["notes"],
                        "tags": ["music"],
                        "unicode": "1f3b6"
                    },
                    {
                        "emoji": "➕",
                        "description": "heavy plus sign",
                        "category": "Symbols",
                        "aliases": ["heavy_plus_sign"],
                        "tags": [],
                        "unicode": "2795"
                    },
                    {
                        "emoji": "➖",
                        "description": "heavy minus sign",
                        "category": "Symbols",
                        "aliases": ["heavy_minus_sign"],
                        "tags": [],
                        "unicode": "2796"
                    },
                    {
                        "emoji": "➗",
                        "description": "heavy division sign",
                        "category": "Symbols",
                        "aliases": ["heavy_division_sign"],
                        "tags": [],
                        "unicode": "2797"
                    },
                    {
                        "emoji": "✖️",
                        "description": "heavy multiplication x",
                        "category": "Symbols",
                        "aliases": ["heavy_multiplication_x"],
                        "tags": [],
                        "unicode": "2716"
                    },
                    {
                        "emoji": "💲",
                        "description": "heavy dollar sign",
                        "category": "Symbols",
                        "aliases": ["heavy_dollar_sign"],
                        "tags": [],
                        "unicode": "1f4b2"
                    },
                    {
                        "emoji": "💱",
                        "description": "currency exchange",
                        "category": "Symbols",
                        "aliases": ["currency_exchange"],
                        "tags": [],
                        "unicode": "1f4b1"
                    },
                    {
                        "emoji": "™️",
                        "description": "trade mark",
                        "category": "Symbols",
                        "aliases": ["tm"],
                        "tags": ["trademark"],
                        "unicode": "2122"
                    },
                    {
                        "emoji": "©️",
                        "description": "copyright",
                        "category": "Symbols",
                        "aliases": ["copyright"],
                        "tags": [],
                        "unicode": "00a9"
                    },
                    {
                        "emoji": "®️",
                        "description": "registered",
                        "category": "Symbols",
                        "aliases": ["registered"],
                        "tags": [],
                        "unicode": "00ae"
                    },
                    {
                        "emoji": "〰️",
                        "description": "wavy dash",
                        "category": "Symbols",
                        "aliases": ["wavy_dash"],
                        "tags": [],
                        "unicode": "3030"
                    },
                    {
                        "emoji": "➰",
                        "description": "curly loop",
                        "category": "Symbols",
                        "aliases": ["curly_loop"],
                        "tags": [],
                        "unicode": "27b0"
                    },
                    {
                        "emoji": "➿",
                        "description": "double curly loop",
                        "category": "Symbols",
                        "aliases": ["loop"],
                        "tags": [],
                        "unicode": "27bf"
                    },
                    {
                        "emoji": "🔚",
                        "description": "END arrow",
                        "category": "Symbols",
                        "aliases": ["end"],
                        "tags": [],
                        "unicode": "1f51a"
                    },
                    {
                        "emoji": "🔙",
                        "description": "BACK arrow",
                        "category": "Symbols",
                        "aliases": ["back"],
                        "tags": [],
                        "unicode": "1f519"
                    },
                    {
                        "emoji": "🔛",
                        "description": "ON! arrow",
                        "category": "Symbols",
                        "aliases": ["on"],
                        "tags": [],
                        "unicode": "1f51b"
                    },
                    {
                        "emoji": "🔝",
                        "description": "TOP arrow",
                        "category": "Symbols",
                        "aliases": ["top"],
                        "tags": [],
                        "unicode": "1f51d"
                    },
                    {
                        "emoji": "🔜",
                        "description": "SOON arrow",
                        "category": "Symbols",
                        "aliases": ["soon"],
                        "tags": [],
                        "unicode": "1f51c"
                    },
                    {
                        "emoji": "✔️",
                        "description": "heavy check mark",
                        "category": "Symbols",
                        "aliases": ["heavy_check_mark"],
                        "tags": [],
                        "unicode": "2714"
                    },
                    {
                        "emoji": "☑️",
                        "description": "ballot box with check",
                        "category": "Symbols",
                        "aliases": ["ballot_box_with_check"],
                        "tags": [],
                        "unicode": "2611"
                    },
                    {
                        "emoji": "🔘",
                        "description": "radio button",
                        "category": "Symbols",
                        "aliases": ["radio_button"],
                        "tags": [],
                        "unicode": "1f518"
                    },
                    {
                        "emoji": "⚪️",
                        "description": "white circle",
                        "category": "Symbols",
                        "aliases": ["white_circle"],
                        "tags": [],
                        "unicode": "26aa"
                    },
                    {
                        "emoji": "⚫️",
                        "description": "black circle",
                        "category": "Symbols",
                        "aliases": ["black_circle"],
                        "tags": [],
                        "unicode": "26ab"
                    },
                    {
                        "emoji": "🔴",
                        "description": "red circle",
                        "category": "Symbols",
                        "aliases": ["red_circle"],
                        "tags": [],
                        "unicode": "1f534"
                    },
                    {
                        "emoji": "🔵",
                        "description": "blue circle",
                        "category": "Symbols",
                        "aliases": ["large_blue_circle"],
                        "tags": [],
                        "unicode": "1f535"
                    },
                    {
                        "emoji": "🔺",
                        "description": "red triangle pointed up",
                        "category": "Symbols",
                        "aliases": ["small_red_triangle"],
                        "tags": [],
                        "unicode": "1f53a"
                    },
                    {
                        "emoji": "🔻",
                        "description": "red triangle pointed down",
                        "category": "Symbols",
                        "aliases": ["small_red_triangle_down"],
                        "tags": [],
                        "unicode": "1f53b"
                    },
                    {
                        "emoji": "🔸",
                        "description": "small orange diamond",
                        "category": "Symbols",
                        "aliases": ["small_orange_diamond"],
                        "tags": [],
                        "unicode": "1f538"
                    },
                    {
                        "emoji": "🔹",
                        "description": "small blue diamond",
                        "category": "Symbols",
                        "aliases": ["small_blue_diamond"],
                        "tags": [],
                        "unicode": "1f539"
                    },
                    {
                        "emoji": "🔶",
                        "description": "large orange diamond",
                        "category": "Symbols",
                        "aliases": ["large_orange_diamond"],
                        "tags": [],
                        "unicode": "1f536"
                    },
                    {
                        "emoji": "🔷",
                        "description": "large blue diamond",
                        "category": "Symbols",
                        "aliases": ["large_blue_diamond"],
                        "tags": [],
                        "unicode": "1f537"
                    },
                    {
                        "emoji": "🔳",
                        "description": "white square button",
                        "category": "Symbols",
                        "aliases": ["white_square_button"],
                        "tags": [],
                        "unicode": "1f533"
                    },
                    {
                        "emoji": "🔲",
                        "description": "black square button",
                        "category": "Symbols",
                        "aliases": ["black_square_button"],
                        "tags": [],
                        "unicode": "1f532"
                    },
                    {
                        "emoji": "▪️",
                        "description": "black small square",
                        "category": "Symbols",
                        "aliases": ["black_small_square"],
                        "tags": [],
                        "unicode": "25aa"
                    },
                    {
                        "emoji": "▫️",
                        "description": "white small square",
                        "category": "Symbols",
                        "aliases": ["white_small_square"],
                        "tags": [],
                        "unicode": "25ab"
                    },
                    {
                        "emoji": "◾️",
                        "description": "black medium-small square",
                        "category": "Symbols",
                        "aliases": ["black_medium_small_square"],
                        "tags": [],
                        "unicode": "25fe"
                    },
                    {
                        "emoji": "◽️",
                        "description": "white medium-small square",
                        "category": "Symbols",
                        "aliases": ["white_medium_small_square"],
                        "tags": [],
                        "unicode": "25fd"
                    },
                    {
                        "emoji": "◼️",
                        "description": "black medium square",
                        "category": "Symbols",
                        "aliases": ["black_medium_square"],
                        "tags": [],
                        "unicode": "25fc"
                    },
                    {
                        "emoji": "◻️",
                        "description": "white medium square",
                        "category": "Symbols",
                        "aliases": ["white_medium_square"],
                        "tags": [],
                        "unicode": "25fb"
                    },
                    {
                        "emoji": "⬛️",
                        "description": "black large square",
                        "category": "Symbols",
                        "aliases": ["black_large_square"],
                        "tags": [],
                        "unicode": "2b1b"
                    },
                    {
                        "emoji": "⬜️",
                        "description": "white large square",
                        "category": "Symbols",
                        "aliases": ["white_large_square"],
                        "tags": [],
                        "unicode": "2b1c"
                    },
                    {
                        "emoji": "🔈",
                        "description": "speaker low volume",
                        "category": "Symbols",
                        "aliases": ["speaker"],
                        "tags": [],
                        "unicode": "1f508"
                    },
                    {
                        "emoji": "🔇",
                        "description": "muted speaker",
                        "category": "Symbols",
                        "aliases": ["mute"],
                        "tags": ["sound", "volume"],
                        "unicode": "1f507"
                    },
                    {
                        "emoji": "🔉",
                        "description": "speaker medium volume",
                        "category": "Symbols",
                        "aliases": ["sound"],
                        "tags": ["volume"],
                        "unicode": "1f509"
                    },
                    {
                        "emoji": "🔊",
                        "description": "speaker high volume",
                        "category": "Symbols",
                        "aliases": ["loud_sound"],
                        "tags": ["volume"],
                        "unicode": "1f50a"
                    },
                    {
                        "emoji": "🔔",
                        "description": "bell",
                        "category": "Symbols",
                        "aliases": ["bell"],
                        "tags": ["sound", "notification"],
                        "unicode": "1f514"
                    },
                    {
                        "emoji": "🔕",
                        "description": "bell with slash",
                        "category": "Symbols",
                        "aliases": ["no_bell"],
                        "tags": ["volume", "off"],
                        "unicode": "1f515"
                    },
                    {
                        "emoji": "📣",
                        "description": "megaphone",
                        "category": "Symbols",
                        "aliases": ["mega"],
                        "tags": [],
                        "unicode": "1f4e3"
                    },
                    {
                        "emoji": "📢",
                        "description": "loudspeaker",
                        "category": "Symbols",
                        "aliases": ["loudspeaker"],
                        "tags": ["announcement"],
                        "unicode": "1f4e2"
                    },
                    {
                        "emoji": "👁‍🗨",
                        "description": "eye in speech bubble",
                        "category": "Symbols",
                        "aliases": ["eye_speech_bubble"],
                        "tags": [],
                        "unicode": "1f441-1f5e8"
                    },
                    {
                        "emoji": "💬",
                        "description": "speech balloon",
                        "category": "Symbols",
                        "aliases": ["speech_balloon"],
                        "tags": ["comment"],
                        "unicode": "1f4ac"
                    },
                    {
                        "emoji": "💭",
                        "description": "thought balloon",
                        "category": "Symbols",
                        "aliases": ["thought_balloon"],
                        "tags": ["thinking"],
                        "unicode": "1f4ad"
                    },
                    {
                        "emoji": "🗯",
                        "description": "right anger bubble",
                        "category": "Symbols",
                        "aliases": ["right_anger_bubble"],
                        "tags": [],
                        "unicode": "1f5ef"
                    },
                    {
                        "emoji": "♠️",
                        "description": "spade suit",
                        "category": "Symbols",
                        "aliases": ["spades"],
                        "tags": [],
                        "unicode": "2660"
                    },
                    {
                        "emoji": "♣️",
                        "description": "club suit",
                        "category": "Symbols",
                        "aliases": ["clubs"],
                        "tags": [],
                        "unicode": "2663"
                    },
                    {
                        "emoji": "♥️",
                        "description": "heart suit",
                        "category": "Symbols",
                        "aliases": ["hearts"],
                        "tags": [],
                        "unicode": "2665"
                    },
                    {
                        "emoji": "♦️",
                        "description": "diamond suit",
                        "category": "Symbols",
                        "aliases": ["diamonds"],
                        "tags": [],
                        "unicode": "2666"
                    },
                    {
                        "emoji": "🃏",
                        "description": "joker",
                        "category": "Symbols",
                        "aliases": ["black_joker"],
                        "tags": [],
                        "unicode": "1f0cf"
                    },
                    {
                        "emoji": "🎴",
                        "description": "flower playing cards",
                        "category": "Symbols",
                        "aliases": ["flower_playing_cards"],
                        "tags": [],
                        "unicode": "1f3b4"
                    },
                    {
                        "emoji": "🀄️",
                        "description": "mahjong red dragon",
                        "category": "Symbols",
                        "aliases": ["mahjong"],
                        "tags": [],
                        "unicode": "1f004"
                    },
                    {
                        "emoji": "🕐",
                        "description": "one o’clock",
                        "category": "Symbols",
                        "aliases": ["clock1"],
                        "tags": [],
                        "unicode": "1f550"
                    },
                    {
                        "emoji": "🕑",
                        "description": "two o’clock",
                        "category": "Symbols",
                        "aliases": ["clock2"],
                        "tags": [],
                        "unicode": "1f551"
                    },
                    {
                        "emoji": "🕒",
                        "description": "three o’clock",
                        "category": "Symbols",
                        "aliases": ["clock3"],
                        "tags": [],
                        "unicode": "1f552"
                    },
                    {
                        "emoji": "🕓",
                        "description": "four o’clock",
                        "category": "Symbols",
                        "aliases": ["clock4"],
                        "tags": [],
                        "unicode": "1f553"
                    },
                    {
                        "emoji": "🕔",
                        "description": "five o’clock",
                        "category": "Symbols",
                        "aliases": ["clock5"],
                        "tags": [],
                        "unicode": "1f554"
                    },
                    {
                        "emoji": "🕕",
                        "description": "six o’clock",
                        "category": "Symbols",
                        "aliases": ["clock6"],
                        "tags": [],
                        "unicode": "1f555"
                    },
                    {
                        "emoji": "🕖",
                        "description": "seven o’clock",
                        "category": "Symbols",
                        "aliases": ["clock7"],
                        "tags": [],
                        "unicode": "1f556"
                    },
                    {
                        "emoji": "🕗",
                        "description": "eight o’clock",
                        "category": "Symbols",
                        "aliases": ["clock8"],
                        "tags": [],
                        "unicode": "1f557"
                    },
                    {
                        "emoji": "🕘",
                        "description": "nine o’clock",
                        "category": "Symbols",
                        "aliases": ["clock9"],
                        "tags": [],
                        "unicode": "1f558"
                    },
                    {
                        "emoji": "🕙",
                        "description": "ten o’clock",
                        "category": "Symbols",
                        "aliases": ["clock10"],
                        "tags": [],
                        "unicode": "1f559"
                    },
                    {
                        "emoji": "🕚",
                        "description": "eleven o’clock",
                        "category": "Symbols",
                        "aliases": ["clock11"],
                        "tags": [],
                        "unicode": "1f55a"
                    },
                    {
                        "emoji": "🕛",
                        "description": "twelve o’clock",
                        "category": "Symbols",
                        "aliases": ["clock12"],
                        "tags": [],
                        "unicode": "1f55b"
                    },
                    {
                        "emoji": "🕜",
                        "description": "one-thirty",
                        "category": "Symbols",
                        "aliases": ["clock130"],
                        "tags": [],
                        "unicode": "1f55c"
                    },
                    {
                        "emoji": "🕝",
                        "description": "two-thirty",
                        "category": "Symbols",
                        "aliases": ["clock230"],
                        "tags": [],
                        "unicode": "1f55d"
                    },
                    {
                        "emoji": "🕞",
                        "description": "three-thirty",
                        "category": "Symbols",
                        "aliases": ["clock330"],
                        "tags": [],
                        "unicode": "1f55e"
                    },
                    {
                        "emoji": "🕟",
                        "description": "four-thirty",
                        "category": "Symbols",
                        "aliases": ["clock430"],
                        "tags": [],
                        "unicode": "1f55f"
                    },
                    {
                        "emoji": "🕠",
                        "description": "five-thirty",
                        "category": "Symbols",
                        "aliases": ["clock530"],
                        "tags": [],
                        "unicode": "1f560"
                    },
                    {
                        "emoji": "🕡",
                        "description": "six-thirty",
                        "category": "Symbols",
                        "aliases": ["clock630"],
                        "tags": [],
                        "unicode": "1f561"
                    },
                    {
                        "emoji": "🕢",
                        "description": "seven-thirty",
                        "category": "Symbols",
                        "aliases": ["clock730"],
                        "tags": [],
                        "unicode": "1f562"
                    },
                    {
                        "emoji": "🕣",
                        "description": "eight-thirty",
                        "category": "Symbols",
                        "aliases": ["clock830"],
                        "tags": [],
                        "unicode": "1f563"
                    },
                    {
                        "emoji": "🕤",
                        "description": "nine-thirty",
                        "category": "Symbols",
                        "aliases": ["clock930"],
                        "tags": [],
                        "unicode": "1f564"
                    },
                    {
                        "emoji": "🕥",
                        "description": "ten-thirty",
                        "category": "Symbols",
                        "aliases": ["clock1030"],
                        "tags": [],
                        "unicode": "1f565"
                    },
                    {
                        "emoji": "🕦",
                        "description": "eleven-thirty",
                        "category": "Symbols",
                        "aliases": ["clock1130"],
                        "tags": [],
                        "unicode": "1f566"
                    },
                    {
                        "emoji": "🕧",
                        "description": "twelve-thirty",
                        "category": "Symbols",
                        "aliases": ["clock1230"],
                        "tags": [],
                        "unicode": "1f567"
                    },
                    {
                        "emoji": "🏳️",
                        "description": "white flag",
                        "category": "Flags",
                        "aliases": ["white_flag"],
                        "tags": [],
                        "unicode": "1f3f3"
                    },
                    {
                        "emoji": "🏴",
                        "description": "black flag",
                        "category": "Flags",
                        "aliases": ["black_flag"],
                        "tags": [],
                        "unicode": "1f3f4"
                    },
                    {
                        "emoji": "🏁",
                        "description": "chequered flag",
                        "category": "Flags",
                        "aliases": ["checkered_flag"],
                        "tags": ["milestone", "finish"],
                        "unicode": "1f3c1"
                    },
                    {
                        "emoji": "🚩",
                        "description": "triangular flag",
                        "category": "Flags",
                        "aliases": ["triangular_flag_on_post"],
                        "tags": [],
                        "unicode": "1f6a9"
                    },
                    {
                        "emoji": "🏳️‍🌈",
                        "description": "rainbow flag",
                        "category": "Flags",
                        "aliases": ["rainbow_flag"],
                        "tags": ["pride"],
                        "unicode": "1f3f3-1f308"
                    },
                    {
                        "emoji": "🇦🇫",
                        "description": "Afghanistan",
                        "category": "Flags",
                        "aliases": ["afghanistan"],
                        "tags": [],
                        "unicode": "1f1e6-1f1eb"
                    },
                    {
                        "emoji": "🇦🇽",
                        "description": "Åland Islands",
                        "category": "Flags",
                        "aliases": ["aland_islands"],
                        "tags": [],
                        "unicode": "1f1e6-1f1fd"
                    },
                    {
                        "emoji": "🇦🇱",
                        "description": "Albania",
                        "category": "Flags",
                        "aliases": ["albania"],
                        "tags": [],
                        "unicode": "1f1e6-1f1f1"
                    },
                    {
                        "emoji": "🇩🇿",
                        "description": "Algeria",
                        "category": "Flags",
                        "aliases": ["algeria"],
                        "tags": [],
                        "unicode": "1f1e9-1f1ff"
                    },
                    {
                        "emoji": "🇦🇸",
                        "description": "American Samoa",
                        "category": "Flags",
                        "aliases": ["american_samoa"],
                        "tags": [],
                        "unicode": "1f1e6-1f1f8"
                    },
                    {
                        "emoji": "🇦🇩",
                        "description": "Andorra",
                        "category": "Flags",
                        "aliases": ["andorra"],
                        "tags": [],
                        "unicode": "1f1e6-1f1e9"
                    },
                    {
                        "emoji": "🇦🇴",
                        "description": "Angola",
                        "category": "Flags",
                        "aliases": ["angola"],
                        "tags": [],
                        "unicode": "1f1e6-1f1f4"
                    },
                    {
                        "emoji": "🇦🇮",
                        "description": "Anguilla",
                        "category": "Flags",
                        "aliases": ["anguilla"],
                        "tags": [],
                        "unicode": "1f1e6-1f1ee"
                    },
                    {
                        "emoji": "🇦🇶",
                        "description": "Antarctica",
                        "category": "Flags",
                        "aliases": ["antarctica"],
                        "tags": [],
                        "unicode": "1f1e6-1f1f6"
                    },
                    {
                        "emoji": "🇦🇬",
                        "description": "Antigua & Barbuda",
                        "category": "Flags",
                        "aliases": ["antigua_barbuda"],
                        "tags": [],
                        "unicode": "1f1e6-1f1ec"
                    },
                    {
                        "emoji": "🇦🇷",
                        "description": "Argentina",
                        "category": "Flags",
                        "aliases": ["argentina"],
                        "tags": [],
                        "unicode": "1f1e6-1f1f7"
                    },
                    {
                        "emoji": "🇦🇲",
                        "description": "Armenia",
                        "category": "Flags",
                        "aliases": ["armenia"],
                        "tags": [],
                        "unicode": "1f1e6-1f1f2"
                    },
                    {
                        "emoji": "🇦🇼",
                        "description": "Aruba",
                        "category": "Flags",
                        "aliases": ["aruba"],
                        "tags": [],
                        "unicode": "1f1e6-1f1fc"
                    },
                    {
                        "emoji": "🇦🇺",
                        "description": "Australia",
                        "category": "Flags",
                        "aliases": ["australia"],
                        "tags": [],
                        "unicode": "1f1e6-1f1fa"
                    },
                    {
                        "emoji": "🇦🇹",
                        "description": "Austria",
                        "category": "Flags",
                        "aliases": ["austria"],
                        "tags": [],
                        "unicode": "1f1e6-1f1f9"
                    },
                    {
                        "emoji": "🇦🇿",
                        "description": "Azerbaijan",
                        "category": "Flags",
                        "aliases": ["azerbaijan"],
                        "tags": [],
                        "unicode": "1f1e6-1f1ff"
                    },
                    {
                        "emoji": "🇧🇸",
                        "description": "Bahamas",
                        "category": "Flags",
                        "aliases": ["bahamas"],
                        "tags": [],
                        "unicode": "1f1e7-1f1f8"
                    },
                    {
                        "emoji": "🇧🇭",
                        "description": "Bahrain",
                        "category": "Flags",
                        "aliases": ["bahrain"],
                        "tags": [],
                        "unicode": "1f1e7-1f1ed"
                    },
                    {
                        "emoji": "🇧🇩",
                        "description": "Bangladesh",
                        "category": "Flags",
                        "aliases": ["bangladesh"],
                        "tags": [],
                        "unicode": "1f1e7-1f1e9"
                    },
                    {
                        "emoji": "🇧🇧",
                        "description": "Barbados",
                        "category": "Flags",
                        "aliases": ["barbados"],
                        "tags": [],
                        "unicode": "1f1e7-1f1e7"
                    },
                    {
                        "emoji": "🇧🇾",
                        "description": "Belarus",
                        "category": "Flags",
                        "aliases": ["belarus"],
                        "tags": [],
                        "unicode": "1f1e7-1f1fe"
                    },
                    {
                        "emoji": "🇧🇪",
                        "description": "Belgium",
                        "category": "Flags",
                        "aliases": ["belgium"],
                        "tags": [],
                        "unicode": "1f1e7-1f1ea"
                    },
                    {
                        "emoji": "🇧🇿",
                        "description": "Belize",
                        "category": "Flags",
                        "aliases": ["belize"],
                        "tags": [],
                        "unicode": "1f1e7-1f1ff"
                    },
                    {
                        "emoji": "🇧🇯",
                        "description": "Benin",
                        "category": "Flags",
                        "aliases": ["benin"],
                        "tags": [],
                        "unicode": "1f1e7-1f1ef"
                    },
                    {
                        "emoji": "🇧🇲",
                        "description": "Bermuda",
                        "category": "Flags",
                        "aliases": ["bermuda"],
                        "tags": [],
                        "unicode": "1f1e7-1f1f2"
                    },
                    {
                        "emoji": "🇧🇹",
                        "description": "Bhutan",
                        "category": "Flags",
                        "aliases": ["bhutan"],
                        "tags": [],
                        "unicode": "1f1e7-1f1f9"
                    },
                    {
                        "emoji": "🇧🇴",
                        "description": "Bolivia",
                        "category": "Flags",
                        "aliases": ["bolivia"],
                        "tags": [],
                        "unicode": "1f1e7-1f1f4"
                    },
                    {
                        "emoji": "🇧🇶",
                        "description": "Caribbean Netherlands",
                        "category": "Flags",
                        "aliases": ["caribbean_netherlands"],
                        "tags": [],
                        "unicode": "1f1e7-1f1f6"
                    },
                    {
                        "emoji": "🇧🇦",
                        "description": "Bosnia & Herzegovina",
                        "category": "Flags",
                        "aliases": ["bosnia_herzegovina"],
                        "tags": [],
                        "unicode": "1f1e7-1f1e6"
                    },
                    {
                        "emoji": "🇧🇼",
                        "description": "Botswana",
                        "category": "Flags",
                        "aliases": ["botswana"],
                        "tags": [],
                        "unicode": "1f1e7-1f1fc"
                    },
                    {
                        "emoji": "🇧🇷",
                        "description": "Brazil",
                        "category": "Flags",
                        "aliases": ["brazil"],
                        "tags": [],
                        "unicode": "1f1e7-1f1f7"
                    },
                    {
                        "emoji": "🇮🇴",
                        "description": "British Indian Ocean Territory",
                        "category": "Flags",
                        "aliases": ["british_indian_ocean_territory"],
                        "tags": [],
                        "unicode": "1f1ee-1f1f4"
                    },
                    {
                        "emoji": "🇻🇬",
                        "description": "British Virgin Islands",
                        "category": "Flags",
                        "aliases": ["british_virgin_islands"],
                        "tags": [],
                        "unicode": "1f1fb-1f1ec"
                    },
                    {
                        "emoji": "🇧🇳",
                        "description": "Brunei",
                        "category": "Flags",
                        "aliases": ["brunei"],
                        "tags": [],
                        "unicode": "1f1e7-1f1f3"
                    },
                    {
                        "emoji": "🇧🇬",
                        "description": "Bulgaria",
                        "category": "Flags",
                        "aliases": ["bulgaria"],
                        "tags": [],
                        "unicode": "1f1e7-1f1ec"
                    },
                    {
                        "emoji": "🇧🇫",
                        "description": "Burkina Faso",
                        "category": "Flags",
                        "aliases": ["burkina_faso"],
                        "tags": [],
                        "unicode": "1f1e7-1f1eb"
                    },
                    {
                        "emoji": "🇧🇮",
                        "description": "Burundi",
                        "category": "Flags",
                        "aliases": ["burundi"],
                        "tags": [],
                        "unicode": "1f1e7-1f1ee"
                    },
                    {
                        "emoji": "🇨🇻",
                        "description": "Cape Verde",
                        "category": "Flags",
                        "aliases": ["cape_verde"],
                        "tags": [],
                        "unicode": "1f1e8-1f1fb"
                    },
                    {
                        "emoji": "🇰🇭",
                        "description": "Cambodia",
                        "category": "Flags",
                        "aliases": ["cambodia"],
                        "tags": [],
                        "unicode": "1f1f0-1f1ed"
                    },
                    {
                        "emoji": "🇨🇲",
                        "description": "Cameroon",
                        "category": "Flags",
                        "aliases": ["cameroon"],
                        "tags": [],
                        "unicode": "1f1e8-1f1f2"
                    },
                    {
                        "emoji": "🇨🇦",
                        "description": "Canada",
                        "category": "Flags",
                        "aliases": ["canada"],
                        "tags": [],
                        "unicode": "1f1e8-1f1e6"
                    },
                    {
                        "emoji": "🇮🇨",
                        "description": "Canary Islands",
                        "category": "Flags",
                        "aliases": ["canary_islands"],
                        "tags": [],
                        "unicode": "1f1ee-1f1e8"
                    },
                    {
                        "emoji": "🇰🇾",
                        "description": "Cayman Islands",
                        "category": "Flags",
                        "aliases": ["cayman_islands"],
                        "tags": [],
                        "unicode": "1f1f0-1f1fe"
                    },
                    {
                        "emoji": "🇨🇫",
                        "description": "Central African Republic",
                        "category": "Flags",
                        "aliases": ["central_african_republic"],
                        "tags": [],
                        "unicode": "1f1e8-1f1eb"
                    },
                    {
                        "emoji": "🇹🇩",
                        "description": "Chad",
                        "category": "Flags",
                        "aliases": ["chad"],
                        "tags": [],
                        "unicode": "1f1f9-1f1e9"
                    },
                    {
                        "emoji": "🇨🇱",
                        "description": "Chile",
                        "category": "Flags",
                        "aliases": ["chile"],
                        "tags": [],
                        "unicode": "1f1e8-1f1f1"
                    },
                    {
                        "emoji": "🇨🇳",
                        "description": "China",
                        "category": "Flags",
                        "aliases": ["cn"],
                        "tags": ["china"],
                        "unicode": "1f1e8-1f1f3"
                    },
                    {
                        "emoji": "🇨🇽",
                        "description": "Christmas Island",
                        "category": "Flags",
                        "aliases": ["christmas_island"],
                        "tags": [],
                        "unicode": "1f1e8-1f1fd"
                    },
                    {
                        "emoji": "🇨🇨",
                        "description": "Cocos (Keeling) Islands",
                        "category": "Flags",
                        "aliases": ["cocos_islands"],
                        "tags": ["keeling"],
                        "unicode": "1f1e8-1f1e8"
                    },
                    {
                        "emoji": "🇨🇴",
                        "description": "Colombia",
                        "category": "Flags",
                        "aliases": ["colombia"],
                        "tags": [],
                        "unicode": "1f1e8-1f1f4"
                    },
                    {
                        "emoji": "🇰🇲",
                        "description": "Comoros",
                        "category": "Flags",
                        "aliases": ["comoros"],
                        "tags": [],
                        "unicode": "1f1f0-1f1f2"
                    },
                    {
                        "emoji": "🇨🇬",
                        "description": "Congo - Brazzaville",
                        "category": "Flags",
                        "aliases": ["congo_brazzaville"],
                        "tags": [],
                        "unicode": "1f1e8-1f1ec"
                    },
                    {
                        "emoji": "🇨🇩",
                        "description": "Congo - Kinshasa",
                        "category": "Flags",
                        "aliases": ["congo_kinshasa"],
                        "tags": [],
                        "unicode": "1f1e8-1f1e9"
                    },
                    {
                        "emoji": "🇨🇰",
                        "description": "Cook Islands",
                        "category": "Flags",
                        "aliases": ["cook_islands"],
                        "tags": [],
                        "unicode": "1f1e8-1f1f0"
                    },
                    {
                        "emoji": "🇨🇷",
                        "description": "Costa Rica",
                        "category": "Flags",
                        "aliases": ["costa_rica"],
                        "tags": [],
                        "unicode": "1f1e8-1f1f7"
                    },
                    {
                        "emoji": "🇨🇮",
                        "description": "Côte d’Ivoire",
                        "category": "Flags",
                        "aliases": ["cote_divoire"],
                        "tags": ["ivory"],
                        "unicode": "1f1e8-1f1ee"
                    },
                    {
                        "emoji": "🇭🇷",
                        "description": "Croatia",
                        "category": "Flags",
                        "aliases": ["croatia"],
                        "tags": [],
                        "unicode": "1f1ed-1f1f7"
                    },
                    {
                        "emoji": "🇨🇺",
                        "description": "Cuba",
                        "category": "Flags",
                        "aliases": ["cuba"],
                        "tags": [],
                        "unicode": "1f1e8-1f1fa"
                    },
                    {
                        "emoji": "🇨🇼",
                        "description": "Curaçao",
                        "category": "Flags",
                        "aliases": ["curacao"],
                        "tags": [],
                        "unicode": "1f1e8-1f1fc"
                    },
                    {
                        "emoji": "🇨🇾",
                        "description": "Cyprus",
                        "category": "Flags",
                        "aliases": ["cyprus"],
                        "tags": [],
                        "unicode": "1f1e8-1f1fe"
                    },
                    {
                        "emoji": "🇨🇿",
                        "description": "Czech Republic",
                        "category": "Flags",
                        "aliases": ["czech_republic"],
                        "tags": [],
                        "unicode": "1f1e8-1f1ff"
                    },
                    {
                        "emoji": "🇩🇰",
                        "description": "Denmark",
                        "category": "Flags",
                        "aliases": ["denmark"],
                        "tags": [],
                        "unicode": "1f1e9-1f1f0"
                    },
                    {
                        "emoji": "🇩🇯",
                        "description": "Djibouti",
                        "category": "Flags",
                        "aliases": ["djibouti"],
                        "tags": [],
                        "unicode": "1f1e9-1f1ef"
                    },
                    {
                        "emoji": "🇩🇲",
                        "description": "Dominica",
                        "category": "Flags",
                        "aliases": ["dominica"],
                        "tags": [],
                        "unicode": "1f1e9-1f1f2"
                    },
                    {
                        "emoji": "🇩🇴",
                        "description": "Dominican Republic",
                        "category": "Flags",
                        "aliases": ["dominican_republic"],
                        "tags": [],
                        "unicode": "1f1e9-1f1f4"
                    },
                    {
                        "emoji": "🇪🇨",
                        "description": "Ecuador",
                        "category": "Flags",
                        "aliases": ["ecuador"],
                        "tags": [],
                        "unicode": "1f1ea-1f1e8"
                    },
                    {
                        "emoji": "🇪🇬",
                        "description": "Egypt",
                        "category": "Flags",
                        "aliases": ["egypt"],
                        "tags": [],
                        "unicode": "1f1ea-1f1ec"
                    },
                    {
                        "emoji": "🇸🇻",
                        "description": "El Salvador",
                        "category": "Flags",
                        "aliases": ["el_salvador"],
                        "tags": [],
                        "unicode": "1f1f8-1f1fb"
                    },
                    {
                        "emoji": "🇬🇶",
                        "description": "Equatorial Guinea",
                        "category": "Flags",
                        "aliases": ["equatorial_guinea"],
                        "tags": [],
                        "unicode": "1f1ec-1f1f6"
                    },
                    {
                        "emoji": "🇪🇷",
                        "description": "Eritrea",
                        "category": "Flags",
                        "aliases": ["eritrea"],
                        "tags": [],
                        "unicode": "1f1ea-1f1f7"
                    },
                    {
                        "emoji": "🇪🇪",
                        "description": "Estonia",
                        "category": "Flags",
                        "aliases": ["estonia"],
                        "tags": [],
                        "unicode": "1f1ea-1f1ea"
                    },
                    {
                        "emoji": "🇪🇹",
                        "description": "Ethiopia",
                        "category": "Flags",
                        "aliases": ["ethiopia"],
                        "tags": [],
                        "unicode": "1f1ea-1f1f9"
                    },
                    {
                        "emoji": "🇪🇺",
                        "description": "European Union",
                        "category": "Flags",
                        "aliases": ["eu", "european_union"],
                        "tags": [],
                        "unicode": "1f1ea-1f1fa"
                    },
                    {
                        "emoji": "🇫🇰",
                        "description": "Falkland Islands",
                        "category": "Flags",
                        "aliases": ["falkland_islands"],
                        "tags": [],
                        "unicode": "1f1eb-1f1f0"
                    },
                    {
                        "emoji": "🇫🇴",
                        "description": "Faroe Islands",
                        "category": "Flags",
                        "aliases": ["faroe_islands"],
                        "tags": [],
                        "unicode": "1f1eb-1f1f4"
                    },
                    {
                        "emoji": "🇫🇯",
                        "description": "Fiji",
                        "category": "Flags",
                        "aliases": ["fiji"],
                        "tags": [],
                        "unicode": "1f1eb-1f1ef"
                    },
                    {
                        "emoji": "🇫🇮",
                        "description": "Finland",
                        "category": "Flags",
                        "aliases": ["finland"],
                        "tags": [],
                        "unicode": "1f1eb-1f1ee"
                    },
                    {
                        "emoji": "🇫🇷",
                        "description": "France",
                        "category": "Flags",
                        "aliases": ["fr"],
                        "tags": ["france", "french"],
                        "unicode": "1f1eb-1f1f7"
                    },
                    {
                        "emoji": "🇬🇫",
                        "description": "French Guiana",
                        "category": "Flags",
                        "aliases": ["french_guiana"],
                        "tags": [],
                        "unicode": "1f1ec-1f1eb"
                    },
                    {
                        "emoji": "🇵🇫",
                        "description": "French Polynesia",
                        "category": "Flags",
                        "aliases": ["french_polynesia"],
                        "tags": [],
                        "unicode": "1f1f5-1f1eb"
                    },
                    {
                        "emoji": "🇹🇫",
                        "description": "French Southern Territories",
                        "category": "Flags",
                        "aliases": ["french_southern_territories"],
                        "tags": [],
                        "unicode": "1f1f9-1f1eb"
                    },
                    {
                        "emoji": "🇬🇦",
                        "description": "Gabon",
                        "category": "Flags",
                        "aliases": ["gabon"],
                        "tags": [],
                        "unicode": "1f1ec-1f1e6"
                    },
                    {
                        "emoji": "🇬🇲",
                        "description": "Gambia",
                        "category": "Flags",
                        "aliases": ["gambia"],
                        "tags": [],
                        "unicode": "1f1ec-1f1f2"
                    },
                    {
                        "emoji": "🇬🇪",
                        "description": "Georgia",
                        "category": "Flags",
                        "aliases": ["georgia"],
                        "tags": [],
                        "unicode": "1f1ec-1f1ea"
                    },
                    {
                        "emoji": "🇩🇪",
                        "description": "Germany",
                        "category": "Flags",
                        "aliases": ["de"],
                        "tags": ["flag", "germany"],
                        "unicode": "1f1e9-1f1ea"
                    },
                    {
                        "emoji": "🇬🇭",
                        "description": "Ghana",
                        "category": "Flags",
                        "aliases": ["ghana"],
                        "tags": [],
                        "unicode": "1f1ec-1f1ed"
                    },
                    {
                        "emoji": "🇬🇮",
                        "description": "Gibraltar",
                        "category": "Flags",
                        "aliases": ["gibraltar"],
                        "tags": [],
                        "unicode": "1f1ec-1f1ee"
                    },
                    {
                        "emoji": "🇬🇷",
                        "description": "Greece",
                        "category": "Flags",
                        "aliases": ["greece"],
                        "tags": [],
                        "unicode": "1f1ec-1f1f7"
                    },
                    {
                        "emoji": "🇬🇱",
                        "description": "Greenland",
                        "category": "Flags",
                        "aliases": ["greenland"],
                        "tags": [],
                        "unicode": "1f1ec-1f1f1"
                    },
                    {
                        "emoji": "🇬🇩",
                        "description": "Grenada",
                        "category": "Flags",
                        "aliases": ["grenada"],
                        "tags": [],
                        "unicode": "1f1ec-1f1e9"
                    },
                    {
                        "emoji": "🇬🇵",
                        "description": "Guadeloupe",
                        "category": "Flags",
                        "aliases": ["guadeloupe"],
                        "tags": [],
                        "unicode": "1f1ec-1f1f5"
                    },
                    {
                        "emoji": "🇬🇺",
                        "description": "Guam",
                        "category": "Flags",
                        "aliases": ["guam"],
                        "tags": [],
                        "unicode": "1f1ec-1f1fa"
                    },
                    {
                        "emoji": "🇬🇹",
                        "description": "Guatemala",
                        "category": "Flags",
                        "aliases": ["guatemala"],
                        "tags": [],
                        "unicode": "1f1ec-1f1f9"
                    },
                    {
                        "emoji": "🇬🇬",
                        "description": "Guernsey",
                        "category": "Flags",
                        "aliases": ["guernsey"],
                        "tags": [],
                        "unicode": "1f1ec-1f1ec"
                    },
                    {
                        "emoji": "🇬🇳",
                        "description": "Guinea",
                        "category": "Flags",
                        "aliases": ["guinea"],
                        "tags": [],
                        "unicode": "1f1ec-1f1f3"
                    },
                    {
                        "emoji": "🇬🇼",
                        "description": "Guinea-Bissau",
                        "category": "Flags",
                        "aliases": ["guinea_bissau"],
                        "tags": [],
                        "unicode": "1f1ec-1f1fc"
                    },
                    {
                        "emoji": "🇬🇾",
                        "description": "Guyana",
                        "category": "Flags",
                        "aliases": ["guyana"],
                        "tags": [],
                        "unicode": "1f1ec-1f1fe"
                    },
                    {
                        "emoji": "🇭🇹",
                        "description": "Haiti",
                        "category": "Flags",
                        "aliases": ["haiti"],
                        "tags": [],
                        "unicode": "1f1ed-1f1f9"
                    },
                    {
                        "emoji": "🇭🇳",
                        "description": "Honduras",
                        "category": "Flags",
                        "aliases": ["honduras"],
                        "tags": [],
                        "unicode": "1f1ed-1f1f3"
                    },
                    {
                        "emoji": "🇭🇰",
                        "description": "Hong Kong SAR China",
                        "category": "Flags",
                        "aliases": ["hong_kong"],
                        "tags": [],
                        "unicode": "1f1ed-1f1f0"
                    },
                    {
                        "emoji": "🇭🇺",
                        "description": "Hungary",
                        "category": "Flags",
                        "aliases": ["hungary"],
                        "tags": [],
                        "unicode": "1f1ed-1f1fa"
                    },
                    {
                        "emoji": "🇮🇸",
                        "description": "Iceland",
                        "category": "Flags",
                        "aliases": ["iceland"],
                        "tags": [],
                        "unicode": "1f1ee-1f1f8"
                    },
                    {
                        "emoji": "🇮🇳",
                        "description": "India",
                        "category": "Flags",
                        "aliases": ["india"],
                        "tags": [],
                        "unicode": "1f1ee-1f1f3"
                    },
                    {
                        "emoji": "🇮🇩",
                        "description": "Indonesia",
                        "category": "Flags",
                        "aliases": ["indonesia"],
                        "tags": [],
                        "unicode": "1f1ee-1f1e9"
                    },
                    {
                        "emoji": "🇮🇷",
                        "description": "Iran",
                        "category": "Flags",
                        "aliases": ["iran"],
                        "tags": [],
                        "unicode": "1f1ee-1f1f7"
                    },
                    {
                        "emoji": "🇮🇶",
                        "description": "Iraq",
                        "category": "Flags",
                        "aliases": ["iraq"],
                        "tags": [],
                        "unicode": "1f1ee-1f1f6"
                    },
                    {
                        "emoji": "🇮🇪",
                        "description": "Ireland",
                        "category": "Flags",
                        "aliases": ["ireland"],
                        "tags": [],
                        "unicode": "1f1ee-1f1ea"
                    },
                    {
                        "emoji": "🇮🇲",
                        "description": "Isle of Man",
                        "category": "Flags",
                        "aliases": ["isle_of_man"],
                        "tags": [],
                        "unicode": "1f1ee-1f1f2"
                    },
                    {
                        "emoji": "🇮🇱",
                        "description": "Israel",
                        "category": "Flags",
                        "aliases": ["israel"],
                        "tags": [],
                        "unicode": "1f1ee-1f1f1"
                    },
                    {
                        "emoji": "🇮🇹",
                        "description": "Italy",
                        "category": "Flags",
                        "aliases": ["it"],
                        "tags": ["italy"],
                        "unicode": "1f1ee-1f1f9"
                    },
                    {
                        "emoji": "🇯🇲",
                        "description": "Jamaica",
                        "category": "Flags",
                        "aliases": ["jamaica"],
                        "tags": [],
                        "unicode": "1f1ef-1f1f2"
                    },
                    {
                        "emoji": "🇯🇵",
                        "description": "Japan",
                        "category": "Flags",
                        "aliases": ["jp"],
                        "tags": ["japan"],
                        "unicode": "1f1ef-1f1f5"
                    },
                    {
                        "emoji": "🎌",
                        "description": "crossed flags",
                        "category": "Flags",
                        "aliases": ["crossed_flags"],
                        "tags": [],
                        "unicode": "1f38c"
                    },
                    {
                        "emoji": "🇯🇪",
                        "description": "Jersey",
                        "category": "Flags",
                        "aliases": ["jersey"],
                        "tags": [],
                        "unicode": "1f1ef-1f1ea"
                    },
                    {
                        "emoji": "🇯🇴",
                        "description": "Jordan",
                        "category": "Flags",
                        "aliases": ["jordan"],
                        "tags": [],
                        "unicode": "1f1ef-1f1f4"
                    },
                    {
                        "emoji": "🇰🇿",
                        "description": "Kazakhstan",
                        "category": "Flags",
                        "aliases": ["kazakhstan"],
                        "tags": [],
                        "unicode": "1f1f0-1f1ff"
                    },
                    {
                        "emoji": "🇰🇪",
                        "description": "Kenya",
                        "category": "Flags",
                        "aliases": ["kenya"],
                        "tags": [],
                        "unicode": "1f1f0-1f1ea"
                    },
                    {
                        "emoji": "🇰🇮",
                        "description": "Kiribati",
                        "category": "Flags",
                        "aliases": ["kiribati"],
                        "tags": [],
                        "unicode": "1f1f0-1f1ee"
                    },
                    {
                        "emoji": "🇽🇰",
                        "description": "Kosovo",
                        "category": "Flags",
                        "aliases": ["kosovo"],
                        "tags": [],
                        "unicode": "1f1fd-1f1f0"
                    },
                    {
                        "emoji": "🇰🇼",
                        "description": "Kuwait",
                        "category": "Flags",
                        "aliases": ["kuwait"],
                        "tags": [],
                        "unicode": "1f1f0-1f1fc"
                    },
                    {
                        "emoji": "🇰🇬",
                        "description": "Kyrgyzstan",
                        "category": "Flags",
                        "aliases": ["kyrgyzstan"],
                        "tags": [],
                        "unicode": "1f1f0-1f1ec"
                    },
                    {
                        "emoji": "🇱🇦",
                        "description": "Laos",
                        "category": "Flags",
                        "aliases": ["laos"],
                        "tags": [],
                        "unicode": "1f1f1-1f1e6"
                    },
                    {
                        "emoji": "🇱🇻",
                        "description": "Latvia",
                        "category": "Flags",
                        "aliases": ["latvia"],
                        "tags": [],
                        "unicode": "1f1f1-1f1fb"
                    },
                    {
                        "emoji": "🇱🇧",
                        "description": "Lebanon",
                        "category": "Flags",
                        "aliases": ["lebanon"],
                        "tags": [],
                        "unicode": "1f1f1-1f1e7"
                    },
                    {
                        "emoji": "🇱🇸",
                        "description": "Lesotho",
                        "category": "Flags",
                        "aliases": ["lesotho"],
                        "tags": [],
                        "unicode": "1f1f1-1f1f8"
                    },
                    {
                        "emoji": "🇱🇷",
                        "description": "Liberia",
                        "category": "Flags",
                        "aliases": ["liberia"],
                        "tags": [],
                        "unicode": "1f1f1-1f1f7"
                    },
                    {
                        "emoji": "🇱🇾",
                        "description": "Libya",
                        "category": "Flags",
                        "aliases": ["libya"],
                        "tags": [],
                        "unicode": "1f1f1-1f1fe"
                    },
                    {
                        "emoji": "🇱🇮",
                        "description": "Liechtenstein",
                        "category": "Flags",
                        "aliases": ["liechtenstein"],
                        "tags": [],
                        "unicode": "1f1f1-1f1ee"
                    },
                    {
                        "emoji": "🇱🇹",
                        "description": "Lithuania",
                        "category": "Flags",
                        "aliases": ["lithuania"],
                        "tags": [],
                        "unicode": "1f1f1-1f1f9"
                    },
                    {
                        "emoji": "🇱🇺",
                        "description": "Luxembourg",
                        "category": "Flags",
                        "aliases": ["luxembourg"],
                        "tags": [],
                        "unicode": "1f1f1-1f1fa"
                    },
                    {
                        "emoji": "🇲🇴",
                        "description": "Macau SAR China",
                        "category": "Flags",
                        "aliases": ["macau"],
                        "tags": [],
                        "unicode": "1f1f2-1f1f4"
                    },
                    {
                        "emoji": "🇲🇰",
                        "description": "Macedonia",
                        "category": "Flags",
                        "aliases": ["macedonia"],
                        "tags": [],
                        "unicode": "1f1f2-1f1f0"
                    },
                    {
                        "emoji": "🇲🇬",
                        "description": "Madagascar",
                        "category": "Flags",
                        "aliases": ["madagascar"],
                        "tags": [],
                        "unicode": "1f1f2-1f1ec"
                    },
                    {
                        "emoji": "🇲🇼",
                        "description": "Malawi",
                        "category": "Flags",
                        "aliases": ["malawi"],
                        "tags": [],
                        "unicode": "1f1f2-1f1fc"
                    },
                    {
                        "emoji": "🇲🇾",
                        "description": "Malaysia",
                        "category": "Flags",
                        "aliases": ["malaysia"],
                        "tags": [],
                        "unicode": "1f1f2-1f1fe"
                    },
                    {
                        "emoji": "🇲🇻",
                        "description": "Maldives",
                        "category": "Flags",
                        "aliases": ["maldives"],
                        "tags": [],
                        "unicode": "1f1f2-1f1fb"
                    },
                    {
                        "emoji": "🇲🇱",
                        "description": "Mali",
                        "category": "Flags",
                        "aliases": ["mali"],
                        "tags": [],
                        "unicode": "1f1f2-1f1f1"
                    },
                    {
                        "emoji": "🇲🇹",
                        "description": "Malta",
                        "category": "Flags",
                        "aliases": ["malta"],
                        "tags": [],
                        "unicode": "1f1f2-1f1f9"
                    },
                    {
                        "emoji": "🇲🇭",
                        "description": "Marshall Islands",
                        "category": "Flags",
                        "aliases": ["marshall_islands"],
                        "tags": [],
                        "unicode": "1f1f2-1f1ed"
                    },
                    {
                        "emoji": "🇲🇶",
                        "description": "Martinique",
                        "category": "Flags",
                        "aliases": ["martinique"],
                        "tags": [],
                        "unicode": "1f1f2-1f1f6"
                    },
                    {
                        "emoji": "🇲🇷",
                        "description": "Mauritania",
                        "category": "Flags",
                        "aliases": ["mauritania"],
                        "tags": [],
                        "unicode": "1f1f2-1f1f7"
                    },
                    {
                        "emoji": "🇲🇺",
                        "description": "Mauritius",
                        "category": "Flags",
                        "aliases": ["mauritius"],
                        "tags": [],
                        "unicode": "1f1f2-1f1fa"
                    },
                    {
                        "emoji": "🇾🇹",
                        "description": "Mayotte",
                        "category": "Flags",
                        "aliases": ["mayotte"],
                        "tags": [],
                        "unicode": "1f1fe-1f1f9"
                    },
                    {
                        "emoji": "🇲🇽",
                        "description": "Mexico",
                        "category": "Flags",
                        "aliases": ["mexico"],
                        "tags": [],
                        "unicode": "1f1f2-1f1fd"
                    },
                    {
                        "emoji": "🇫🇲",
                        "description": "Micronesia",
                        "category": "Flags",
                        "aliases": ["micronesia"],
                        "tags": [],
                        "unicode": "1f1eb-1f1f2"
                    },
                    {
                        "emoji": "🇲🇩",
                        "description": "Moldova",
                        "category": "Flags",
                        "aliases": ["moldova"],
                        "tags": [],
                        "unicode": "1f1f2-1f1e9"
                    },
                    {
                        "emoji": "🇲🇨",
                        "description": "Monaco",
                        "category": "Flags",
                        "aliases": ["monaco"],
                        "tags": [],
                        "unicode": "1f1f2-1f1e8"
                    },
                    {
                        "emoji": "🇲🇳",
                        "description": "Mongolia",
                        "category": "Flags",
                        "aliases": ["mongolia"],
                        "tags": [],
                        "unicode": "1f1f2-1f1f3"
                    },
                    {
                        "emoji": "🇲🇪",
                        "description": "Montenegro",
                        "category": "Flags",
                        "aliases": ["montenegro"],
                        "tags": [],
                        "unicode": "1f1f2-1f1ea"
                    },
                    {
                        "emoji": "🇲🇸",
                        "description": "Montserrat",
                        "category": "Flags",
                        "aliases": ["montserrat"],
                        "tags": [],
                        "unicode": "1f1f2-1f1f8"
                    },
                    {
                        "emoji": "🇲🇦",
                        "description": "Morocco",
                        "category": "Flags",
                        "aliases": ["morocco"],
                        "tags": [],
                        "unicode": "1f1f2-1f1e6"
                    },
                    {
                        "emoji": "🇲🇿",
                        "description": "Mozambique",
                        "category": "Flags",
                        "aliases": ["mozambique"],
                        "tags": [],
                        "unicode": "1f1f2-1f1ff"
                    },
                    {
                        "emoji": "🇲🇲",
                        "description": "Myanmar (Burma)",
                        "category": "Flags",
                        "aliases": ["myanmar"],
                        "tags": ["burma"],
                        "unicode": "1f1f2-1f1f2"
                    },
                    {
                        "emoji": "🇳🇦",
                        "description": "Namibia",
                        "category": "Flags",
                        "aliases": ["namibia"],
                        "tags": [],
                        "unicode": "1f1f3-1f1e6"
                    },
                    {
                        "emoji": "🇳🇷",
                        "description": "Nauru",
                        "category": "Flags",
                        "aliases": ["nauru"],
                        "tags": [],
                        "unicode": "1f1f3-1f1f7"
                    },
                    {
                        "emoji": "🇳🇵",
                        "description": "Nepal",
                        "category": "Flags",
                        "aliases": ["nepal"],
                        "tags": [],
                        "unicode": "1f1f3-1f1f5"
                    },
                    {
                        "emoji": "🇳🇱",
                        "description": "Netherlands",
                        "category": "Flags",
                        "aliases": ["netherlands"],
                        "tags": [],
                        "unicode": "1f1f3-1f1f1"
                    },
                    {
                        "emoji": "🇳🇨",
                        "description": "New Caledonia",
                        "category": "Flags",
                        "aliases": ["new_caledonia"],
                        "tags": [],
                        "unicode": "1f1f3-1f1e8"
                    },
                    {
                        "emoji": "🇳🇿",
                        "description": "New Zealand",
                        "category": "Flags",
                        "aliases": ["new_zealand"],
                        "tags": [],
                        "unicode": "1f1f3-1f1ff"
                    },
                    {
                        "emoji": "🇳🇮",
                        "description": "Nicaragua",
                        "category": "Flags",
                        "aliases": ["nicaragua"],
                        "tags": [],
                        "unicode": "1f1f3-1f1ee"
                    },
                    {
                        "emoji": "🇳🇪",
                        "description": "Niger",
                        "category": "Flags",
                        "aliases": ["niger"],
                        "tags": [],
                        "unicode": "1f1f3-1f1ea"
                    },
                    {
                        "emoji": "🇳🇬",
                        "description": "Nigeria",
                        "category": "Flags",
                        "aliases": ["nigeria"],
                        "tags": [],
                        "unicode": "1f1f3-1f1ec"
                    },
                    {
                        "emoji": "🇳🇺",
                        "description": "Niue",
                        "category": "Flags",
                        "aliases": ["niue"],
                        "tags": [],
                        "unicode": "1f1f3-1f1fa"
                    },
                    {
                        "emoji": "🇳🇫",
                        "description": "Norfolk Island",
                        "category": "Flags",
                        "aliases": ["norfolk_island"],
                        "tags": [],
                        "unicode": "1f1f3-1f1eb"
                    },
                    {
                        "emoji": "🇲🇵",
                        "description": "Northern Mariana Islands",
                        "category": "Flags",
                        "aliases": ["northern_mariana_islands"],
                        "tags": [],
                        "unicode": "1f1f2-1f1f5"
                    },
                    {
                        "emoji": "🇰🇵",
                        "description": "North Korea",
                        "category": "Flags",
                        "aliases": ["north_korea"],
                        "tags": [],
                        "unicode": "1f1f0-1f1f5"
                    },
                    {
                        "emoji": "🇳🇴",
                        "description": "Norway",
                        "category": "Flags",
                        "aliases": ["norway"],
                        "tags": [],
                        "unicode": "1f1f3-1f1f4"
                    },
                    {
                        "emoji": "🇴🇲",
                        "description": "Oman",
                        "category": "Flags",
                        "aliases": ["oman"],
                        "tags": [],
                        "unicode": "1f1f4-1f1f2"
                    },
                    {
                        "emoji": "🇵🇰",
                        "description": "Pakistan",
                        "category": "Flags",
                        "aliases": ["pakistan"],
                        "tags": [],
                        "unicode": "1f1f5-1f1f0"
                    },
                    {
                        "emoji": "🇵🇼",
                        "description": "Palau",
                        "category": "Flags",
                        "aliases": ["palau"],
                        "tags": [],
                        "unicode": "1f1f5-1f1fc"
                    },
                    {
                        "emoji": "🇵🇸",
                        "description": "Palestinian Territories",
                        "category": "Flags",
                        "aliases": ["palestinian_territories"],
                        "tags": [],
                        "unicode": "1f1f5-1f1f8"
                    },
                    {
                        "emoji": "🇵🇦",
                        "description": "Panama",
                        "category": "Flags",
                        "aliases": ["panama"],
                        "tags": [],
                        "unicode": "1f1f5-1f1e6"
                    },
                    {
                        "emoji": "🇵🇬",
                        "description": "Papua New Guinea",
                        "category": "Flags",
                        "aliases": ["papua_new_guinea"],
                        "tags": [],
                        "unicode": "1f1f5-1f1ec"
                    },
                    {
                        "emoji": "🇵🇾",
                        "description": "Paraguay",
                        "category": "Flags",
                        "aliases": ["paraguay"],
                        "tags": [],
                        "unicode": "1f1f5-1f1fe"
                    },
                    {
                        "emoji": "🇵🇪",
                        "description": "Peru",
                        "category": "Flags",
                        "aliases": ["peru"],
                        "tags": [],
                        "unicode": "1f1f5-1f1ea"
                    },
                    {
                        "emoji": "🇵🇭",
                        "description": "Philippines",
                        "category": "Flags",
                        "aliases": ["philippines"],
                        "tags": [],
                        "unicode": "1f1f5-1f1ed"
                    },
                    {
                        "emoji": "🇵🇳",
                        "description": "Pitcairn Islands",
                        "category": "Flags",
                        "aliases": ["pitcairn_islands"],
                        "tags": [],
                        "unicode": "1f1f5-1f1f3"
                    },
                    {
                        "emoji": "🇵🇱",
                        "description": "Poland",
                        "category": "Flags",
                        "aliases": ["poland"],
                        "tags": [],
                        "unicode": "1f1f5-1f1f1"
                    },
                    {
                        "emoji": "🇵🇹",
                        "description": "Portugal",
                        "category": "Flags",
                        "aliases": ["portugal"],
                        "tags": [],
                        "unicode": "1f1f5-1f1f9"
                    },
                    {
                        "emoji": "🇵🇷",
                        "description": "Puerto Rico",
                        "category": "Flags",
                        "aliases": ["puerto_rico"],
                        "tags": [],
                        "unicode": "1f1f5-1f1f7"
                    },
                    {
                        "emoji": "🇶🇦",
                        "description": "Qatar",
                        "category": "Flags",
                        "aliases": ["qatar"],
                        "tags": [],
                        "unicode": "1f1f6-1f1e6"
                    },
                    {
                        "emoji": "🇷🇪",
                        "description": "Réunion",
                        "category": "Flags",
                        "aliases": ["reunion"],
                        "tags": [],
                        "unicode": "1f1f7-1f1ea"
                    },
                    {
                        "emoji": "🇷🇴",
                        "description": "Romania",
                        "category": "Flags",
                        "aliases": ["romania"],
                        "tags": [],
                        "unicode": "1f1f7-1f1f4"
                    },
                    {
                        "emoji": "🇷🇺",
                        "description": "Russia",
                        "category": "Flags",
                        "aliases": ["ru"],
                        "tags": ["russia"],
                        "unicode": "1f1f7-1f1fa"
                    },
                    {
                        "emoji": "🇷🇼",
                        "description": "Rwanda",
                        "category": "Flags",
                        "aliases": ["rwanda"],
                        "tags": [],
                        "unicode": "1f1f7-1f1fc"
                    },
                    {
                        "emoji": "🇧🇱",
                        "description": "St. Barthélemy",
                        "category": "Flags",
                        "aliases": ["st_barthelemy"],
                        "tags": [],
                        "unicode": "1f1e7-1f1f1"
                    },
                    {
                        "emoji": "🇸🇭",
                        "description": "St. Helena",
                        "category": "Flags",
                        "aliases": ["st_helena"],
                        "tags": [],
                        "unicode": "1f1f8-1f1ed"
                    },
                    {
                        "emoji": "🇰🇳",
                        "description": "St. Kitts & Nevis",
                        "category": "Flags",
                        "aliases": ["st_kitts_nevis"],
                        "tags": [],
                        "unicode": "1f1f0-1f1f3"
                    },
                    {
                        "emoji": "🇱🇨",
                        "description": "St. Lucia",
                        "category": "Flags",
                        "aliases": ["st_lucia"],
                        "tags": [],
                        "unicode": "1f1f1-1f1e8"
                    },
                    {
                        "emoji": "🇵🇲",
                        "description": "St. Pierre & Miquelon",
                        "category": "Flags",
                        "aliases": ["st_pierre_miquelon"],
                        "tags": [],
                        "unicode": "1f1f5-1f1f2"
                    },
                    {
                        "emoji": "🇻🇨",
                        "description": "St. Vincent & Grenadines",
                        "category": "Flags",
                        "aliases": ["st_vincent_grenadines"],
                        "tags": [],
                        "unicode": "1f1fb-1f1e8"
                    },
                    {
                        "emoji": "🇼🇸",
                        "description": "Samoa",
                        "category": "Flags",
                        "aliases": ["samoa"],
                        "tags": [],
                        "unicode": "1f1fc-1f1f8"
                    },
                    {
                        "emoji": "🇸🇲",
                        "description": "San Marino",
                        "category": "Flags",
                        "aliases": ["san_marino"],
                        "tags": [],
                        "unicode": "1f1f8-1f1f2"
                    },
                    {
                        "emoji": "🇸🇹",
                        "description": "São Tomé & Príncipe",
                        "category": "Flags",
                        "aliases": ["sao_tome_principe"],
                        "tags": [],
                        "unicode": "1f1f8-1f1f9"
                    },
                    {
                        "emoji": "🇸🇦",
                        "description": "Saudi Arabia",
                        "category": "Flags",
                        "aliases": ["saudi_arabia"],
                        "tags": [],
                        "unicode": "1f1f8-1f1e6"
                    },
                    {
                        "emoji": "🇸🇳",
                        "description": "Senegal",
                        "category": "Flags",
                        "aliases": ["senegal"],
                        "tags": [],
                        "unicode": "1f1f8-1f1f3"
                    },
                    {
                        "emoji": "🇷🇸",
                        "description": "Serbia",
                        "category": "Flags",
                        "aliases": ["serbia"],
                        "tags": [],
                        "unicode": "1f1f7-1f1f8"
                    },
                    {
                        "emoji": "🇸🇨",
                        "description": "Seychelles",
                        "category": "Flags",
                        "aliases": ["seychelles"],
                        "tags": [],
                        "unicode": "1f1f8-1f1e8"
                    },
                    {
                        "emoji": "🇸🇱",
                        "description": "Sierra Leone",
                        "category": "Flags",
                        "aliases": ["sierra_leone"],
                        "tags": [],
                        "unicode": "1f1f8-1f1f1"
                    },
                    {
                        "emoji": "🇸🇬",
                        "description": "Singapore",
                        "category": "Flags",
                        "aliases": ["singapore"],
                        "tags": [],
                        "unicode": "1f1f8-1f1ec"
                    },
                    {
                        "emoji": "🇸🇽",
                        "description": "Sint Maarten",
                        "category": "Flags",
                        "aliases": ["sint_maarten"],
                        "tags": [],
                        "unicode": "1f1f8-1f1fd"
                    },
                    {
                        "emoji": "🇸🇰",
                        "description": "Slovakia",
                        "category": "Flags",
                        "aliases": ["slovakia"],
                        "tags": [],
                        "unicode": "1f1f8-1f1f0"
                    },
                    {
                        "emoji": "🇸🇮",
                        "description": "Slovenia",
                        "category": "Flags",
                        "aliases": ["slovenia"],
                        "tags": [],
                        "unicode": "1f1f8-1f1ee"
                    },
                    {
                        "emoji": "🇸🇧",
                        "description": "Solomon Islands",
                        "category": "Flags",
                        "aliases": ["solomon_islands"],
                        "tags": [],
                        "unicode": "1f1f8-1f1e7"
                    },
                    {
                        "emoji": "🇸🇴",
                        "description": "Somalia",
                        "category": "Flags",
                        "aliases": ["somalia"],
                        "tags": [],
                        "unicode": "1f1f8-1f1f4"
                    },
                    {
                        "emoji": "🇿🇦",
                        "description": "South Africa",
                        "category": "Flags",
                        "aliases": ["south_africa"],
                        "tags": [],
                        "unicode": "1f1ff-1f1e6"
                    },
                    {
                        "emoji": "🇬🇸",
                        "description": "South Georgia & South Sandwich Islands",
                        "category": "Flags",
                        "aliases": ["south_georgia_south_sandwich_islands"],
                        "tags": [],
                        "unicode": "1f1ec-1f1f8"
                    },
                    {
                        "emoji": "🇰🇷",
                        "description": "South Korea",
                        "category": "Flags",
                        "aliases": ["kr"],
                        "tags": ["korea"],
                        "unicode": "1f1f0-1f1f7"
                    },
                    {
                        "emoji": "🇸🇸",
                        "description": "South Sudan",
                        "category": "Flags",
                        "aliases": ["south_sudan"],
                        "tags": [],
                        "unicode": "1f1f8-1f1f8"
                    },
                    {
                        "emoji": "🇪🇸",
                        "description": "Spain",
                        "category": "Flags",
                        "aliases": ["es"],
                        "tags": ["spain"],
                        "unicode": "1f1ea-1f1f8"
                    },
                    {
                        "emoji": "🇱🇰",
                        "description": "Sri Lanka",
                        "category": "Flags",
                        "aliases": ["sri_lanka"],
                        "tags": [],
                        "unicode": "1f1f1-1f1f0"
                    },
                    {
                        "emoji": "🇸🇩",
                        "description": "Sudan",
                        "category": "Flags",
                        "aliases": ["sudan"],
                        "tags": [],
                        "unicode": "1f1f8-1f1e9"
                    },
                    {
                        "emoji": "🇸🇷",
                        "description": "Suriname",
                        "category": "Flags",
                        "aliases": ["suriname"],
                        "tags": [],
                        "unicode": "1f1f8-1f1f7"
                    },
                    {
                        "emoji": "🇸🇿",
                        "description": "Swaziland",
                        "category": "Flags",
                        "aliases": ["swaziland"],
                        "tags": [],
                        "unicode": "1f1f8-1f1ff"
                    },
                    {
                        "emoji": "🇸🇪",
                        "description": "Sweden",
                        "category": "Flags",
                        "aliases": ["sweden"],
                        "tags": [],
                        "unicode": "1f1f8-1f1ea"
                    },
                    {
                        "emoji": "🇨🇭",
                        "description": "Switzerland",
                        "category": "Flags",
                        "aliases": ["switzerland"],
                        "tags": [],
                        "unicode": "1f1e8-1f1ed"
                    },
                    {
                        "emoji": "🇸🇾",
                        "description": "Syria",
                        "category": "Flags",
                        "aliases": ["syria"],
                        "tags": [],
                        "unicode": "1f1f8-1f1fe"
                    },
                    {
                        "emoji": "🇹🇼",
                        "description": "Taiwan",
                        "category": "Flags",
                        "aliases": ["taiwan"],
                        "tags": [],
                        "unicode": "1f1f9-1f1fc"
                    },
                    {
                        "emoji": "🇹🇯",
                        "description": "Tajikistan",
                        "category": "Flags",
                        "aliases": ["tajikistan"],
                        "tags": [],
                        "unicode": "1f1f9-1f1ef"
                    },
                    {
                        "emoji": "🇹🇿",
                        "description": "Tanzania",
                        "category": "Flags",
                        "aliases": ["tanzania"],
                        "tags": [],
                        "unicode": "1f1f9-1f1ff"
                    },
                    {
                        "emoji": "🇹🇭",
                        "description": "Thailand",
                        "category": "Flags",
                        "aliases": ["thailand"],
                        "tags": [],
                        "unicode": "1f1f9-1f1ed"
                    },
                    {
                        "emoji": "🇹🇱",
                        "description": "Timor-Leste",
                        "category": "Flags",
                        "aliases": ["timor_leste"],
                        "tags": [],
                        "unicode": "1f1f9-1f1f1"
                    },
                    {
                        "emoji": "🇹🇬",
                        "description": "Togo",
                        "category": "Flags",
                        "aliases": ["togo"],
                        "tags": [],
                        "unicode": "1f1f9-1f1ec"
                    },
                    {
                        "emoji": "🇹🇰",
                        "description": "Tokelau",
                        "category": "Flags",
                        "aliases": ["tokelau"],
                        "tags": [],
                        "unicode": "1f1f9-1f1f0"
                    },
                    {
                        "emoji": "🇹🇴",
                        "description": "Tonga",
                        "category": "Flags",
                        "aliases": ["tonga"],
                        "tags": [],
                        "unicode": "1f1f9-1f1f4"
                    },
                    {
                        "emoji": "🇹🇹",
                        "description": "Trinidad & Tobago",
                        "category": "Flags",
                        "aliases": ["trinidad_tobago"],
                        "tags": [],
                        "unicode": "1f1f9-1f1f9"
                    },
                    {
                        "emoji": "🇹🇳",
                        "description": "Tunisia",
                        "category": "Flags",
                        "aliases": ["tunisia"],
                        "tags": [],
                        "unicode": "1f1f9-1f1f3"
                    },
                    {
                        "emoji": "🇹🇷",
                        "description": "Turkey",
                        "category": "Flags",
                        "aliases": ["tr"],
                        "tags": ["turkey"],
                        "unicode": "1f1f9-1f1f7"
                    },
                    {
                        "emoji": "🇹🇲",
                        "description": "Turkmenistan",
                        "category": "Flags",
                        "aliases": ["turkmenistan"],
                        "tags": [],
                        "unicode": "1f1f9-1f1f2"
                    },
                    {
                        "emoji": "🇹🇨",
                        "description": "Turks & Caicos Islands",
                        "category": "Flags",
                        "aliases": ["turks_caicos_islands"],
                        "tags": [],
                        "unicode": "1f1f9-1f1e8"
                    },
                    {
                        "emoji": "🇹🇻",
                        "description": "Tuvalu",
                        "category": "Flags",
                        "aliases": ["tuvalu"],
                        "tags": [],
                        "unicode": "1f1f9-1f1fb"
                    },
                    {
                        "emoji": "🇺🇬",
                        "description": "Uganda",
                        "category": "Flags",
                        "aliases": ["uganda"],
                        "tags": [],
                        "unicode": "1f1fa-1f1ec"
                    },
                    {
                        "emoji": "🇺🇦",
                        "description": "Ukraine",
                        "category": "Flags",
                        "aliases": ["ukraine"],
                        "tags": [],
                        "unicode": "1f1fa-1f1e6"
                    },
                    {
                        "emoji": "🇦🇪",
                        "description": "United Arab Emirates",
                        "category": "Flags",
                        "aliases": ["united_arab_emirates"],
                        "tags": [],
                        "unicode": "1f1e6-1f1ea"
                    },
                    {
                        "emoji": "🇬🇧",
                        "description": "United Kingdom",
                        "category": "Flags",
                        "aliases": ["gb", "uk"],
                        "tags": ["flag", "british"],
                        "unicode": "1f1ec-1f1e7"
                    },
                    {
                        "emoji": "🇺🇸",
                        "description": "United States",
                        "category": "Flags",
                        "aliases": ["us"],
                        "tags": ["flag", "united", "america"],
                        "unicode": "1f1fa-1f1f8"
                    },
                    {
                        "emoji": "🇻🇮",
                        "description": "U.S. Virgin Islands",
                        "category": "Flags",
                        "aliases": ["us_virgin_islands"],
                        "tags": [],
                        "unicode": "1f1fb-1f1ee"
                    },
                    {
                        "emoji": "🇺🇾",
                        "description": "Uruguay",
                        "category": "Flags",
                        "aliases": ["uruguay"],
                        "tags": [],
                        "unicode": "1f1fa-1f1fe"
                    },
                    {
                        "emoji": "🇺🇿",
                        "description": "Uzbekistan",
                        "category": "Flags",
                        "aliases": ["uzbekistan"],
                        "tags": [],
                        "unicode": "1f1fa-1f1ff"
                    },
                    {
                        "emoji": "🇻🇺",
                        "description": "Vanuatu",
                        "category": "Flags",
                        "aliases": ["vanuatu"],
                        "tags": [],
                        "unicode": "1f1fb-1f1fa"
                    },
                    {
                        "emoji": "🇻🇦",
                        "description": "Vatican City",
                        "category": "Flags",
                        "aliases": ["vatican_city"],
                        "tags": [],
                        "unicode": "1f1fb-1f1e6"
                    },
                    {
                        "emoji": "🇻🇪",
                        "description": "Venezuela",
                        "category": "Flags",
                        "aliases": ["venezuela"],
                        "tags": [],
                        "unicode": "1f1fb-1f1ea"
                    },
                    {
                        "emoji": "🇻🇳",
                        "description": "Vietnam",
                        "category": "Flags",
                        "aliases": ["vietnam"],
                        "tags": [],
                        "unicode": "1f1fb-1f1f3"
                    },
                    {
                        "emoji": "🇼🇫",
                        "description": "Wallis & Futuna",
                        "category": "Flags",
                        "aliases": ["wallis_futuna"],
                        "tags": [],
                        "unicode": "1f1fc-1f1eb"
                    },
                    {
                        "emoji": "🇪🇭",
                        "description": "Western Sahara",
                        "category": "Flags",
                        "aliases": ["western_sahara"],
                        "tags": [],
                        "unicode": "1f1ea-1f1ed"
                    },
                    {
                        "emoji": "🇾🇪",
                        "description": "Yemen",
                        "category": "Flags",
                        "aliases": ["yemen"],
                        "tags": [],
                        "unicode": "1f1fe-1f1ea"
                    },
                    {
                        "emoji": "🇿🇲",
                        "description": "Zambia",
                        "category": "Flags",
                        "aliases": ["zambia"],
                        "tags": [],
                        "unicode": "1f1ff-1f1f2"
                    },
                    {
                        "emoji": "🇿🇼",
                        "description": "Zimbabwe",
                        "category": "Flags",
                        "aliases": ["zimbabwe"],
                        "tags": [],
                        "unicode": "1f1ff-1f1fc"
                    }
                ],
                "patternOpenAllTags": /<([a-z][a-z0-9]*)(?:[^>]*(\s(src|href|style)=['\"][^'\"]*['\"]))?[^>]*?>/gi,
                "patternCloseAllTags": /<\/([a-z][a-z0-9]*)>/gi,
                "patternOpenDivP": /<[div|p*](?:[^>]*(\s(src|href|style)=['\"][^'\"]*['\"]))?[^>]*?>/gi,
                "patternCloseDivP": /<\/[div|p*]>/gi,
                "patternBr": /<br(?:[^>]*(\s(src|href|style)=['\"][^'\"]*['\"]))?[^>]*?>/gi,
                "patternOpenTag": '@open@div_p@open@',
                "patternCloseTag": '@close@div_p@close@',
                "patternEmojis": /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
                "categoryEmojis": {
                    "people": {"unicodeImg": '1f603', "aliasesAr": 'رموز تعبيرية وأشخاص', "aliasesEn": 'Smileys & People'},
                    "nature": {"unicodeImg": '1f43b', "aliasesAr": 'حيوانات وطبيعة', "aliasesEn": 'Animals & Nature'},
                    "foods": {"unicodeImg": '1f354', "aliasesAr": 'أطعمة ومشروبات', "aliasesEn": 'Food & Drink'},
                    "activity": {"unicodeImg": '26bd', "aliasesAr": 'أنشطة', "aliasesEn": 'Activities'},
                    "places": {"unicodeImg": '1f696', "aliasesAr": 'سفر وأماكن', "aliasesEn": 'Travel & Places'},
                    "objects": {"unicodeImg": '1f4a1', "aliasesAr": 'أشياء', "aliasesEn": 'Objects'},
                    "symbols": {"unicodeImg": '2764', "aliasesAr": 'رموز', "aliasesEn": 'Symbols'},
                    "flags": {"unicodeImg": '1f3f3-1f308', "aliasesAr": 'أعلام', "aliasesEn": 'Flags'},
                },
                "nameStorage": 'emojis_recently_sent',
                "emojisSent": settings.saveRecentlySent === true ? JSON.parse(window.localStorage.getItem('emojis_recently_sent')) || [] : [],
                "classWrapper": 'editor-with-emojis',
                "classEditor": 'editor',
                "currentCategory": settings.openCategory === 'auto' ? 'people' : settings.openCategory,
                "buttonShowEmojis": ''
            },
            fns = {
                /* add emoji when clicked on emoji in editor
                *********************************************************************************/
                "pasteHtmlAtCaret": function(html) {
                    var sel, range;
                    if (window.getSelection) {
                        // IE9 and non-IE
                        sel = window.getSelection();
                        if (sel.getRangeAt && sel.rangeCount) {
                            range = sel.getRangeAt(0);
                            range.deleteContents();
                            var el = document.createElement("div");
                            el.innerHTML = html;
                            var frag = document.createDocumentFragment(), node, lastNode;
                            while ( (node = el.firstChild) ) { lastNode = frag.appendChild(node); }
                            range.insertNode(frag);
                            // Preserve the selection
                            if (lastNode) {
                                range = range.cloneRange();
                                range.setStartAfter(lastNode);
                                range.collapse(true);
                                sel.removeAllRanges();
                                sel.addRange(range);
                            }
                        }
                    } else if (document.selection && document.selection.type != "Control") {
                        // IE < 9
                        document.selection.createRange().pasteHTML(html);
                    }
                },
                /* convert emoji character to unicode
                *********************************************************************************/
                "emojiUnicode": function(emoji) {
                    emoji = emoji.replace(/\ufe0f|\u200d/gm, ''); // strips unicode variation selector and zero-width joiner
                    var i = 0, x = 0, c = 0, p = 0, r = [], unicode = [];
                    while (i < emoji.length) {
                        c = emoji.charCodeAt(i++);
                        if (p){
                            r.push((65536+(p-55296<<10)+(c-56320)).toString(16));
                            p = 0;
                        } else if (55296 <= c && c <= 56319){
                            p = c;
                        } else {
                            r.push(c.toString(16));
                        }
                    }
                    for (x = 0; x < r.length; x++) {
                        if (r[0].length < 4) {
                            r[0] = '00' + r[0];
                        }
                        unicode.push(r[x]);
                    }
                    return unicode.join('-');
                },
                /* convert unicode to emoji character
                *********************************************************************************/
                "emojiChar": function(code) {
                    var arr = code.split('-'),
                        emoji = [];
                    if (arr.length === 1) {
                        return String.fromCodePoint('0x' + code);
                    } else {
                        for (let i = 0; i < arr.length; i++) {
                            emoji.push(String.fromCodePoint('0x' + arr[i]));
                        }
                    }
                    return emoji.join('');
                },
                /* handel image for view
                *********************************************************************************/
                "createImgView": function(unicode) {
                    return '<span class="emojition"><img draggable="false" src="' + settings.srcFileEmojis + unicode + settings.imageExt + '"><span class="char">' + fns.emojiChar(unicode) + '</span></span>'; 
                },
                /* handel image in editor
                *********************************************************************************/
                "createImgEditor": function(unicode, name) {
                    return '<img class="emoji emojition_inside_editor" src="' + settings.srcFileEmojis + unicode +  settings.imageExt + '" alt="' + fns.emojiChar(unicode) + '" data-name="' + name + '" draggable="false">'; 
                },
                /* return Value With HTML or TEXT stored database
                *********************************************************************************/
                "getValueText": function (ele) {
                    var value = ele.html().trim(),
                        hiddenDiv = $('.hiddendiv_editor').first();
                    if (!hiddenDiv.length) {
                        hiddenDiv = $('<div class="hiddendiv_editor" style="display: none"></div>');
                        ele.before(hiddenDiv);
                    }
                    hiddenDiv.html(value).find('.emojition_inside_editor').each(function () {
                        $(this).replaceWith(':' + $(this).attr('data-name') + ':');
                    });
                    return hiddenDiv.html().replace(vars.patternOpenDivP, '\n')
                                                 .replace(vars.patternBr, '\n')
                                                 .replace(vars.patternOpenAllTags, '')
                                                 .replace(vars.patternCloseAllTags, '')
                                                 .replace(/&nbsp;/g, ' ')
                                                 .replace(/ /g, '')
                                                 .replace(/ {1,}/g, ' ')
                                                 .replace(/\n\s{1,}/g, '\n').trim();
                },
                /* Create Elements Adding Emojis
                *********************************************************************************/
                "createAddingEmojis": function (wrapperAll) {
                    var wrapperEmojis = wrapperAll.find('.wrapper-emojis-editor').first(),
                        lang = wrapperAll.attr('data-lang');
                    if (!wrapperEmojis.length) {
                        wrapperEmojis = $('<div class="wrapper-emojis-editor"></div>');
                        wrapperAll.append(wrapperEmojis);
                        wrapperEmojis.append('<div class="content"><div class="table-emojis"></div></div><div class="footer"></div>');
                        wrapperEmojis.find('.footer').append('<button type="button" data-content-title="' + (lang === 'ar' ? 'تم الإرسال مؤخراً' : 'Recently Sent') + '" class="btn-category active" data-category="recentlySent" style="background-image: url(' + settings.srcFileEmojis + '1f554' + settings.imageExt + ')"></button>');
                        $.each(vars.categoryEmojis, function (key, cat) {
                            wrapperEmojis.find('.footer').append('<button type="button" data-content-title="' + (lang === 'ar' ? cat.aliasesAr : cat.aliasesEn) + '" class="btn-category" data-category="' + key + '" style="background-image: url(' + settings.srcFileEmojis + cat.unicodeImg + settings.imageExt + ')"></button>');
                        });
                    }
                },
                "addEnventEmojis": function (wrapperAll) {
                    wrapperAll.on('click', '.wrapper-emojis-editor', function (e) {
                        e.stopPropagation();
                    });
                    wrapperAll.on('click', '.wrapper-emojis-editor .footer .btn-category', function (e) {
                        e.stopPropagation();
                        $(this).addClass('active').siblings('.btn-category').removeClass('active');
                        var table = wrapperAll.find('.wrapper-emojis-editor .content .table-emojis'),
                            catClicked = $(this).attr('data-category');
                        
                        vars.currentCategory = settings.openCategory === 'auto' ? catClicked : settings.openCategory;
                        
                        if (table.attr('data-current-cat') != catClicked) {
                            table.attr('data-current-cat', catClicked);
                            table.find('*').remove();
                            $.each(vars.emojisJson, function (i, emoji) {
                                if (emoji.category.toLowerCase() === catClicked) {
                                    var btnEmoji = '<button type="button" class="btn-emoji"' +
                                        'style="background-image: url(' + settings.srcFileEmojis + emoji.unicode + settings.imageExt + ')"' +
                                        'title="' + emoji.description + '" data-unicode="' + emoji.unicode + '" data-name="' + emoji.aliases[0] + '"></button>';
                                    table.append(btnEmoji);
                                }
                            });
                            table.scrollTop(0);
                            if ($(this).attr('data-category') === 'recentlySent') {
                                $.each(vars.emojisSent, function (i, emoji) {
                                    var btnEmoji = '<button type="button" class="btn-emoji"' +
                                        'style="background-image: url(' + settings.srcFileEmojis + emoji.unicode + settings.imageExt + ')"' +
                                        'title="' + emoji.desc + '" data-unicode="' + emoji.unicode + '" data-name="' + emoji.name + '"></button>';
                                    table.append(btnEmoji);
                                });
                            }
                        }
                    }).on('mouseenter', '.wrapper-emojis-editor .footer .btn-category', function () {
                        var titleContent = $(this).attr('data-content-title'),
                            eleShowTitle = $(this).find('.show-content-title').first();
                        if (!eleShowTitle.length) {
                            eleShowTitle = $('<span class="show-content-title"></span>');
                            eleShowTitle.html(titleContent);
                            $(this).append(eleShowTitle);
                            var width = eleShowTitle.outerWidth() / 2;
                            eleShowTitle.css('margin-left', '-' + width + 'px');
                        }
                        eleShowTitle.fadeIn(200);
                    }).on('mouseleave', '.wrapper-emojis-editor .footer .btn-category', function () {
                        $(this).find('.show-content-title').first().fadeOut(200);
                    });
                    wrapperAll.on('click', '.wrapper-emojis-editor .content .table-emojis .btn-emoji', function (e) {
                        e.stopPropagation();
                        var unicode = $(this).attr('data-unicode'),
                            name = $(this).attr('data-name'),
                            desc = $(this).attr('title');
                        wrapperAll.find('.' + vars.classEditor).focus();
                        wrapperAll.find('.' + vars.classEditor).addClass('no-after');
                        var emojiSent = {"unicode": unicode, "name": name, "desc": desc},
                            keys = [];
                        if (vars.emojisSent.length) {
                            $.each(vars.emojisSent, function (i, obj) {
                                keys.push(obj.unicode);
                            });
                            keys = keys.filter(function (item, i, arr) {
                                return arr.indexOf(item) === i;
                            });
                            if (keys.indexOf(unicode) === -1) {
                                vars.emojisSent.unshift(emojiSent);
                            } else {
                                $.each(vars.emojisSent, function (i, emoji) {
                                    if (unicode === emoji.unicode) {
                                        vars.emojisSent.splice(i, 1);
                                        vars.emojisSent.unshift(emojiSent);
                                    }
                                });
                            }
                        } else {
                            vars.emojisSent.unshift(emojiSent);
                            $.each(vars.emojisSent, function (i, obj) {
                                keys.push(obj.unicode);
                            });
                        }
                        vars.emojisSent = vars.emojisSent.slice(0, 48);
                        if (settings.saveRecentlySent === true) {
                            window.localStorage.setItem(vars.nameStorage, JSON.stringify(vars.emojisSent));
                        }
                        fns.pasteHtmlAtCaret(fns.createImgEditor(unicode, name));
                    });
                },
                /* Set Position Section Emojis
                *********************************************************************************/
                "setPositionEmojis": function (btn, wrapperAll) {
                    /* elements */
                    var currentDirection = wrapperAll.find('.editor').attr('data-direction'),
                        otherDirection = currentDirection === 'rtl' ? 'ltr' : 'rtl',
                        sectionEmojis = wrapperAll.find('.wrapper-emojis-editor'),
                        widthSectionEmojis = sectionEmojis.outerWidth(),
                        arrowBefore = window.getComputedStyle(sectionEmojis[0], ':before');
                        
                    sectionEmojis.addClass(currentDirection).removeClass(otherDirection);
                    
                    /* dimensions */
                    var width = btn.clientWidth,
                        height = btn.clientHeight,
                        left = btn.getBoundingClientRect().left + window.scrollX,
                        right = btn.getBoundingClientRect().right + window.scrollX,
                        top = btn.getBoundingClientRect().top + window.scrollY,
                        heightBefore = parseFloat(arrowBefore.borderBottomWidth),
                        bLeftBefore = parseFloat(arrowBefore.borderLeftWidth),
                        bRightBefore = parseFloat(arrowBefore.borderRightWidth),
                        leftBefore = parseFloat(arrowBefore.left),
                        rightBefore = parseFloat(arrowBefore.right);
                    
                    if (currentDirection === 'rtl') {
                        sectionEmojis.css({
                            transform: 'translateX(' + ((left - leftBefore - (bRightBefore + bLeftBefore) / 2) + (width / 2)) + 'px) translateY(' + (top + height + heightBefore) + 'px)'
                        });
                    } else {
                        sectionEmojis.css({
                            transform: 'translateX(' + ((right - widthSectionEmojis) + rightBefore + ((bRightBefore + bLeftBefore) / 2) - (width / 2)) + 'px) translateY(' + (top + height + heightBefore) + 'px)'
                        });
                    }
                },
                /* show Adding Emojis
                *********************************************************************************/
                "showAddingEmojis": function (e, wrapperAll) {
                    e.stopPropagation();
                    var sectionEmojis = wrapperAll.find('.wrapper-emojis-editor');
                    vars.buttonShowEmojis = e.currentTarget;
                    
                    wrapperAll.find('.wrapper-emojis-editor .footer .btn-category[data-category="' + vars.currentCategory + '"]').click();
                    wrapperAll.find('.' + vars.classEditor).focus();
                    if (!sectionEmojis.is(':hidden')) {
                        sectionEmojis.fadeOut(300);
                        $(document).off('click');
                    } else {
                        sectionEmojis.fadeIn(300);
                        $(document).click(function () {
                            sectionEmojis.fadeOut(300);
                        });
                    }
                }
            };
        return this.each(function () {
            if ($(this).hasClass(vars.classWrapper) && $(this).find('.' + vars.classEditor).length) {
                // All var and functions
                
                var wrapper = $(this),
                    editor = $(this).find('.' + vars.classEditor);   
                if (!editor.attr('data-direction')) {
                    editor.attr('data-direction', 'ltr');
                }
                var defaultLang = editor.attr('data-direction'),
                    changeLangEditor = function(lang) {
                        lang === 'rtl' ? editor.attr('data-direction', 'rtl') : editor.attr('data-direction', 'ltr');
                    },
                    isArabicCharacters = function(text) {
                        return  /[\u0600-\u06FF\u0750-\u077F]/u.test(text.trim()[0]);
                    },
                    /* set Direction when write in editor
                    *********************************************************************************/
                    autoDirection = function (text) {
                        if (text.length > 0 && settings.autoDirection === true) {
                            if (isArabicCharacters(text)) {
                                changeLangEditor('rtl');
                            } else {
                                changeLangEditor('ltr');
                            }
                        } else {
                            changeLangEditor(defaultLang);
                        }
                    },
                    /* Check in all emoji character and replace character to image
                    *********************************************************************************/
                    convertEmojiToImgWhenPaste = function (ele) {
                        ele.find('.emojition_inside_editor').each(function () {
                            var emojiStr = $(this).attr('alt'),
                                replaceEmoji = emojiStr.replace(vars.patternEmojis, function (emo) {
                                    return fns.emojiUnicode(emo);
                                });
                            $(this).attr('alt', replaceEmoji);
                        });
                        var string = ele.html().trim();
                        var replacedEmojis = string.replace(vars.patternEmojis, function(emoji) {
                            for (let i = 0; i < vars.emojisJson.length; i++) {
                                if (vars.emojisJson[i].emoji === emoji) {
                                    return fns.createImgEditor(vars.emojisJson[i].unicode, vars.emojisJson[i].aliases[0]);
                                }
                            }
                        });
                        if (string != replacedEmojis) {
                            ele.html(replacedEmojis);
                        }
                        ele.find('.emojition_inside_editor').each(function () {
                            var emojiStr = $(this).attr('alt'),
                                replaceEmoji = emojiStr.replace(vars.patternEmojis, function (emo) {
                                    return fns.emojiUnicode(emo);
                                });
                            $(this).attr('alt', replaceEmoji);
                        });
                        ele.find('.emojition_inside_editor').each(function () {
                            var unicode = $(this).attr('alt');
                            $(this).attr('alt', fns.emojiChar(unicode));
                        });
                    },
                    /* Check in all name emoji and replace to image when view html
                    *********************************************************************************/
                    convertEmojisToImgView = function (string) {
                        var allEmojis = [];
                        $.each(vars.emojisJson, function (i, emoji) {
                            var pattern = RegExp(':' + emoji.aliases[0] + ':', 'g');
                            if (pattern.test(string)) {
                                allEmojis.push(':' + emoji.aliases[0] + ':');
                            }
                        });
                        if (allEmojis.length) {
                            return string.replace(RegExp(allEmojis.join('|'), 'g'), function (emojiName) {
                                var replacedName = emojiName.substr(1);
                                replacedName = replacedName.substring(0, replacedName.length - 1);
                                for (let i = 0; i < vars.emojisJson.length; i++) {
                                    if (vars.emojisJson[i].aliases[0] === replacedName) {
                                        return fns.createImgView(vars.emojisJson[i].unicode, vars.emojisJson[i].aliases[0]);
                                    }
                                }
                            });
                        } else {
                            return string;
                        }
                    };
                /* Start Code
                *********************************************************************************************/
                
                /* add attributes on editor
                *********************************************************************************/
                editor.attr('contenteditable', true);
                editor.attr('tabindex', 0);
                /* Run functions when run this events
                *********************************************************************************/
                editor.focus(function () {
                    var text  = $(this).text().trim();
                    $(this).addClass('no-after');
                    // change direction
                    autoDirection(text);
                }).blur(function () {
                    var text  = $(this).text().trim(),
                        emojis = $(this).find('.emojition_inside_editor');
                    if (text === '' && !emojis.length) {
                        $(this).removeClass('no-after');
                    }
                    // change direction
                    autoDirection(text);
                }).on('input', function () {
                    var text  = $(this).text().trim();
                    $(this).find('*').each(function () {
                        var attributes = $.map(this.attributes, function(item) {
                            return item.name;
                        }),
                            allElement = $(this);
                        if (!allElement.hasClass('emojition_inside_editor')) {
                            $.each(attributes, function (i, item) {
                                if (item != 'alt') {
                                    allElement.removeAttr(item);
                                }
                            });
                        }
                    });
                    // change direction
                    autoDirection(text);
                    if (vars.buttonShowEmojis) {
                        fns.setPositionEmojis(vars.buttonShowEmojis, wrapper);
                        
                    }
                }).on('paste', function (e) {
                    setTimeout(() => {
                        editor.find('*').not('.emojition_inside_editor, div').each(function (i, ele) {
                            if (ele.tagName === 'IMG') {
                                $(this).replaceWith($(this).attr('alt'));
                            } else {
                                $(this).replaceWith($(this).text());
                            }
                        });
                        convertEmojiToImgWhenPaste(editor);
                    }, 0);
                });
                if (settings.showBtnEmojis === true) {
                    fns.createAddingEmojis(wrapper);
                    fns.addEnventEmojis(wrapper);
                }
                $.fn.showEmojis = function (e) {
                    if (settings.showBtnEmojis === true) {
                        fns.showAddingEmojis(e, wrapper);
                        fns.setPositionEmojis(vars.buttonShowEmojis, wrapper);
                    }
                };
                $.fn.getData = function (typeData) {
                    if (typeData === 'text') {
                        return fns.getValueText(editor);
                    } else if (typeData === 'html') {
                        return convertEmojisToImgView(fns.getValueText(editor)).replace(/\n/g, '<br>');
                    } else {
                        return 'Please type parameter text or html';
                    }
                };
                $.fn.convertTextToHtml = function(str) {
                    return convertEmojisToImgView(str).replace(/\n/g, '<br>');
                };
                $.fn.getDir = function () {
                    var myEditor = wrapper.find('.' + vars.classEditor);
                    return isArabicCharacters(myEditor.text().trim()) ? 'rtl' : 'ltr';
                };
                
            } else {
                // if run by other class classEditor [editor-emoji]
                var msgError = 'Please add class this [ ' + vars.classWrapper + ' ] in your warpper element and add [ ' + vars.classEditor + ' ] in div editor for run plugins.';
                console.error(msgError);
                return msgError;
            }
        });
    };
}(jQuery));