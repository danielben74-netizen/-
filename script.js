// --- 1. נתוני המשפטים המנוקדים ותרגילי ההבנה (Quiz) ---
// כל המשפטים עברו ניקוד מלא ותיקון לפי הצורך.
const SENTENCES = {
    "קבוצה 1 – בסיסית מאוד (פתח וקמץ)": [
        { text: "אָבָּא אָכַל לֶחֶם.", question: "מָה אָכַל אָבָּא?", options: ["עוּגָה", "לֶחֶם", "תַּפּוּחַ"], correctIndex: 1 },
        { text: "אִמָּא אָפְתָה עוּגָה.", question: "מִי אָפְתָה עוּגָה?", options: ["אָבָּא", "אִמָּא", "דָּנִי"], correctIndex: 1 },
        { text: "דָּג שָׂחָה בַּיָּם.", question: "מָה עָשָׂה הַדָּג?", options: ["רָץ", "שָׁתָה", "שָׂחָה"], correctIndex: 2 },
        { text: "רָן יָשַׁב עַל כִּסֵּא.", question: "עַל מָה יָשַׁב רָן?", options: ["שֻׁלְחָן", "כִּסֵּא", "מִטָּה"], correctIndex: 1 },
        { text: "אִמָּא קָרְאָה סֵפֶר.", question: "מָה קָרְאָה אִמָּא?", options: ["מִכְתָּב", "עִתּוֹן", "סֵפֶר"], correctIndex: 2 },
        { text: "דָּנִי רָץ בַּגָּן.", question: "הֵיכָן רָץ דָּנִי?", options: ["בַּבַּיִת", "בַּגָּן", "בַּחָצֵר"], correctIndex: 1 },
        { text: "אֲנִי אָכַלְתִּי עוּגָה.", question: "מִי אָכַל עוּגָה?", options: ["אַתָּה", "אָבָּא", "אֲנִי"], correctIndex: 2 },
        { text: "אָבָּא אָכַל תַּפּוּחַ.", question: "מָה אָכַל אָבָּא?", options: ["עוּגָה", "תַּפּוּחַ", "לֶחֶם"], correctIndex: 1 },
        { text: "הַכֶּלֶב רָץ בַּחָצֵר.", question: "הֵיכָן רָץ הַכֶּלֶב?", options: ["בַּגָּן", "בַּחָצֵר", "בַּיָּם"], correctIndex: 1 },
        { text: "הַיֶּלֶד שָׁמַע סִפּוּר.", question: "מָה שָׁמַע הַיֶּלֶד?", options: ["שִׁיר", "סִפּוּר", "צִיּוּר"], correctIndex: 1 },
        { text: "סֵפֶר עַל הַשֻּׁלְחָן.", question: "הֵיכָן הַסֵּפֶר?", options: ["עַל הַמִּטָּה", "עַל הַשֻּׁלְחָן", "עַל הַכִּסֵּא"], correctIndex: 1 },
        { text: "דָּנָה נָמָה בַּמִּטָּה.", question: "מִי נָמָה בַּמִּטָּה?", options: ["דָּנִי", "אָבָּא", "דָּנָה"], correctIndex: 2 },
        { text: "הַכַּד עַל הַשֻּׁלְחָן.", question: "מָה עַל הַשֻּׁלְחָן?", options: ["סֵפֶר", "כַּד", "בָּנָנָה"], correctIndex: 1 },
        { text: "רוּת אָכְלָה עוּגִיָּה.", question: "מִי אָכְלָה עוּגִיָּה?", options: ["דָּנָה", "רוּת", "יָעֵל"], correctIndex: 1 },
        { text: "הַדָּג בַּמַּיִם.", question: "הֵיכָן הַדָּג?", options: ["בַּבָּרֵכָה", "בַּמַּיִם", "בַּגָּן"], correctIndex: 1 },
        { text: "הַיֶּלֶד בַּגָּן.", question: "הֵיכָן הַיֶּלֶד?", options: ["בַּבַּיִת", "בַּגָּן", "בַּמִּטָּה"], correctIndex: 1 },
        { text: "רָן אָכַל תַּפּוּחַ.", question: "מִי אָכַל תַּפּוּחַ?", options: ["רָן", "דָּנִי", "רוּת"], correctIndex: 0 },
        { text: "הַכַּד נִשְׁבַּר.", question: "מָה קָרָה לַכַּד?", options: ["נִשְׁבַּר", "קָפַץ", "עָמַד"], correctIndex: 0 },
        { text: "הַחָתוּל שָׁתָה חָלָב.", question: "מָה שָׁתָה הַחָתוּל?", options: ["מַיִם", "חָלָב", "מִיץ"], correctIndex: 1 },
        { text: "אִמָּא שָׁתְתָה מַיִם.", question: "מִי שָׁתְתָה מַיִם?", options: ["אָבָּא", "אִמָּא", "דָּנִי"], correctIndex: 1 },
        { text: "אָבָּא חָזָק וְגִבּוֹר.", question: "מָה אָבָּא?", options: ["שָׁר", "גִּבּוֹר", "יָשֵׁן"], correctIndex: 1 },
        { text: "רָן אָכַל בָּנָנָה.", question: "מָה אָכַל רָן?", options: ["תַּפּוּחַ", "לֶחֶם", "בָּנָנָה"], correctIndex: 2 },
        { text: "דָּנָה אָכְלָה עוּגָה.", question: "מִי אָכְלָה עוּגָה?", options: ["דָּנִי", "דָּנָה", "רָן"], correctIndex: 1 },
        { text: "יָעֵל רָאֲתָה כֶּלֶב.", question: "מָה רָאֲתָה יָעֵל?", options: ["חָתוּל", "צִפּוֹר", "כֶּלֶב"], correctIndex: 2 },
        { text: "אִמָּא קָנְתָה חָלָה.", question: "מָה קָנְתָה אִמָּא?", options: ["לֶחֶם", "חָלָה", "עוּגָה"], correctIndex: 1 },
        { text: "הַדֶּגֶל שֶׁלִּי כָּחֹל וְלָבָן.", question: "אֵיזֶה צֶבַע הַדֶּגֶל?", options: ["אָדֹם", "יָרֹק", "כָּחֹל וְלָבָן"], correctIndex: 2 },
        { text: "דָּנָה שִׁיחֲקָה בֶּחָצֵר.", question: "הֵיכָן שִׁיחֲקָה דָּנָה?", options: ["בַּבַּיִת", "בֶּחָצֵר", "בַּגָּן"], correctIndex: 1 },
        { text: "אָבָּא יָשַׁב עַל כִּסֵּא.", question: "עַל מָה יָשַׁב אָבָּא?", options: ["סֵפֶר", "שֻׁלְחָן", "כִּסֵּא"], correctIndex: 2 },
        { text: "הַשֶּׁמֶשׁ זָרְחָה בַּשָּׁמַיִם.", question: "הֵיכָן זָרְחָה הַשֶּׁמֶשׁ?", options: ["בַּמַּיִם", "בַּשָּׁמַיִם", "בַּגָּן"], correctIndex: 1 },
        { text: "הַדֶּגֶל יָפֶה מְאוֹד.", question: "אֵיךְ הַדֶּגֶל?", options: ["קָטָן", "יָפֶה", "חָזָק"], correctIndex: 1 }
    ],
    "קבוצה 2 – קלה (סגול, צרה)": [
        { text: "הַכֶּלֶב יָשֵׁן עַל הַמִּטָּה.", question: "מָה עָשָׂה הַכֶּלֶב?", options: ["רָץ", "יָשֵׁן", "אוֹכֵל"], correctIndex: 1 },
        { text: "יָעֵל קָרְאָה סֵפֶר יָפֶה.", question: "אֵיךְ הַסֵּפֶר שֶׁקָּרְאָה יָעֵל?", options: ["קָטָן", "יָפֶה", "מְשֻׁעֲמֵם"], correctIndex: 1 },
        { text: "דָּנִי אָכַל תַּפּוּז טָעִים.", question: "מָה אָכַל דָּנִי?", options: ["תַּפּוּחַ", "בָּנָנָה", "תַּפּוּז"], correctIndex: 2 },
        { text: "רָן מֵנִיף דֶּגֶל יִשְׂרָאֵל.", question: "אֵיזֶה דֶּגֶל מֵנִיף רָן?", options: ["אַמֶּרִיקָה", "יִשְׂרָאֵל", "צָרְפַת"], correctIndex: 1 },
        { text: "הַדָּג שָׂחָה בַּמַּיִם.", question: "מָה עוֹשֶׂה הַדָּג?", options: ["רָץ", "שָׂחָה", "עָף"], correctIndex: 1 },
        { text: "הַחָתוּל קָפַץ עַל הַכִּסֵּא.", question: "הֵיכָן קָפַץ הַחָתוּל?", options: ["עַל הַשֻּׁלְחָן", "עַל הַכִּסֵּא", "עַל הַמִּטָּה"], correctIndex: 1 },
        { text: "יָעֵל שָׁתְתָה מִיץ פֶּטֶל.", question: "אֵיזֶה מִשְׁקֶה שָׁתְתָה יָעֵל?", options: ["מַיִם", "חָלָב", "מִיץ פֶּטֶל"], correctIndex: 2 },
        { text: "הַיֶּלֶד נָתַן עֶצֶם לַכֶּלֶב.", question: "מָה נָתַן הַיֶּלֶד לַכֶּלֶב?", options: ["לֶחֶם", "עֶצֶם", "כַּדּוּר"], correctIndex: 1 },
        { text: "הַשֶּׁמֶשׁ זוֹרַחַת בַּשָּׁמַיִם.", question: "מָה זוֹרַחַת בַּשָּׁמַיִם?", options: ["הַיָּרֵחַ", "הַשֶּׁמֶשׁ", "הַכּוֹכָבִים"], correctIndex: 1 },
        { text: "הַצִּפּוֹר עָפָה רָחוֹק.", question: "אֵיךְ עָפָה הַצִּפּוֹר?", options: ["קָרוֹב", "לְמַטָּה", "רָחוֹק"], correctIndex: 2 },
        { text: "הַכַּד נָפַל מֵהַשֻּׁלְחָן וְנִשְׁבַּר.", question: "מָה קָרָה לַכַּד?", options: ["נִשְׁבַּר", "עָמַד", "רָץ"], correctIndex: 0 },
        { text: "דָּנָה רָקְדָה בַּגָּן.", question: "מִי רָקְדָה בַּגָּן?", options: ["דָּנִי", "אִמָּא", "דָּנָה"], correctIndex: 2 },
        { text: "הַכֶּלֶב אָכַל בָּשָׂר.", question: "מָה אָכַל הַכֶּלֶב?", options: ["עוּגָה", "לֶחֶם", "בָּשָׂר"], correctIndex: 2 },
        { text: "הַכֶּלֶב רָץ אַחֲרֵי הַחָתוּל.", question: "אַחֲרֵי מִי רָץ הַכֶּלֶב?", options: ["אַחֲרֵי דָּנִי", "אַחֲרֵי הַחָתוּל", "אַחֲרֵי הַצִּפּוֹר"], correctIndex: 1 },
        { text: "הַתַּפּוּחַ נָפַל עַל הָאֲדָמָה.", question: "מָה נָפַל עַל הָאֲדָמָה?", options: ["כַּדּוּר", "תַּפּוּחַ", "פֶּרַח"], correctIndex: 1 },
        { text: "יָעֵל קָרְאָה סֵפֶר מְרַתֵּק.", question: "אֵיךְ הָיָה הַסֵּפֶר?", options: ["מְרַתֵּק", "מְשַׁעֲמֵם", "מְצַחֵק"], correctIndex: 0 },
        { text: "דָּנִי כָּתַב עִם עֵט.", question: "עִם מָה כָּתַב דָּנִי?", options: ["עִם עִפָּרוֹן", "עִם עֵט", "עִם יָד"], correctIndex: 1 },
        { text: "הַדָּג קָפַץ מֵהַמַּיִם.", question: "מָה עָשָׂה הַדָּג?", options: ["שָׁכַב", "קָפַץ", "יָשַׁן"], correctIndex: 1 },
        { text: "הַצִּפּוֹר שָׁרָה בַּבֹּקֶר.", question: "מָתַי שָׁרָה הַצִּפּוֹר?", options: ["בַּבֹּקֶר", "בַּלַּיְלָה", "בַּצָּהֳרַיִם"], correctIndex: 0 },
        { text: "אָבָּא נָתַן פֶּרַח לְאִמָּא.", question: "לְמִי נָתַן אָבָּא פֶּרַח?", options: ["לְדָּנִי", "לְיָעֵל", "לְאִמָּא"], correctIndex: 2 },
        { text: "רוּת אָכְלָה גֶּזֶר.", question: "מָה אָכְלָה רוּת?", options: ["תַּפּוּחַ", "גֶּזֶר", "בָּנָנָה"], correctIndex: 1 },
        { text: "הַיֶּלֶד צָבַע צִיּוּר יָפֶה.", question: "מָה צָבַע הַיֶּלֶד?", options: ["סֵפֶר", "כַּד", "צִיּוּר"], correctIndex: 2 },
        { text: "הַכֶּלֶב יָשַׁן עַל הַשַּׁטִּיחַ.", question: "הֵיכָן יָשַׁן הַכֶּלֶב?", options: ["עַל הַמִּטָּה", "עַל הַשַּׁטִּיחַ", "בַּגָּן"], correctIndex: 1 },
        { text: "יָעֵל רָאֲתָה דָּג גָּדוֹל.", question: "מָה רָאֲתָה יָעֵל?", options: ["חָתוּל", "צִפּוֹר", "דָּג"], correctIndex: 2 },
        { text: "הַתַּפּוּז עָגֹל וְיָפֶה.", question: "אֵיךְ הַתַּפּוּז?", options: ["קָטָן", "עָגֹל וְיָפֶה", "חָמוּץ"], correctIndex: 1 },
        { text: "דָּנָה קָפְצָה בַּחוּץ.", question: "הֵיכָן קָפְצָה דָּנָה?", options: ["בַּבַּיִת", "בַּמִּטָּה", "בַּחוּץ"], correctIndex: 2 },
        { text: "רָן שִׂיחֵק עִם כַּדּוּר.", question: "עִם מָה שִׂיחֵק רָן?", options: ["בּוּבָּה", "כַּדּוּר", "סֵפֶר"], correctIndex: 1 },
        { text: "הַדֶּגֶל עָלָה עַל הַמַּטֶּה.", question: "מָה עָלָה עַל הַמַּטֶּה?", options: ["כַּדּוּר", "דֶּגֶל", "כֶּלֶב"], correctIndex: 1 },
        { text: "הַכֶּלֶב קָפַץ בַּגָּן.", question: "מָה עָשָׂה הַכֶּלֶב?", options: ["רָץ", "קָפַץ", "יָשַׁן"], correctIndex: 1 },
        { text: "הַצִּפּוֹר עָפָה בַּשָּׁמַיִם.", question: "הֵיכָן עָפָה הַצִּפּוֹר?", options: ["בַּיָּם", "בַּשָּׁמַיִם", "בַּגָּן"], correctIndex: 1 }
    ],
    "קבוצה 3 – בינונית (חולם, שורוק, קובוץ)": [
        { text: "הַדּוּב נִרְדַּם בַּיַּעַר.", question: "הֵיכָן נִרְדַּם הַדּוּב?", options: ["בַּמִּטָּה", "בַּיַּעַר", "בַּבַּיִת"], correctIndex: 1 },
        { text: "הַצִּפּוֹר עָפָה מֵעַל הָעֵץ.", question: "מֵעַל מָה עָפָה הַצִּפּוֹר?", options: ["מֵעַל הַגָּן", "מֵעַל הָעֵץ", "מֵעַל הַכַּד"], correctIndex: 1 },
        { text: "יָעֵל שָׁתְתָה מַיִם.", question: "מָה שָׁתְתָה יָעֵל?", options: ["מִיץ", "חָלָב", "מַיִם"], correctIndex: 2 },
        { text: "הַכֶּלֶב שָׁכַב בַּחוּץ.", question: "הֵיכָן שָׁכַב הַכֶּלֶב?", options: ["בַּבַּיִת", "בַּחוּץ", "בַּמִּטָּה"], correctIndex: 1 },
        { text: "אָבָּא קָנָה פְּרִי בַּשּׁוּק.", question: "מָה קָנָה אָבָּא?", options: ["סֵפֶר", "לֶחֶם", "פְּרִי"], correctIndex: 2 },
        { text: "רוּת קָרְאָה סֵפֶר חָדָשׁ.", question: "אֵיזֶה סֵפֶר קָרְאָה רוּת?", options: ["יָשָׁן", "חָדָשׁ", "מָרְתֵּק"], correctIndex: 1 },
        { text: "הַשֶּׁמֶשׁ זוֹרַחַת בַּבֹּקֶר.", question: "מָתַי זוֹרַחַת הַשֶּׁמֶשׁ?", options: ["בַּלַּיְלָה", "בַּבֹּקֶר", "בַּצָּהֳרַיִם"], correctIndex: 1 },
        { text: "דָּנָה קָפְצָה עַל הַמִּטָּה.", question: "מִי קָפְצָה עַל הַמִּטָּה?", options: ["אָבָּא", "דָּנִי", "דָּנָה"], correctIndex: 2 },
        { text: "הַתַּלְמִיד כָּתַב מִכְתָּב.", question: "מָה כָּתַב הַתַּלְמִיד?", options: ["סֵפֶר", "מִכְתָּב", "צִיּוּר"], correctIndex: 1 },
        { text: "הַסֵּפֶר עָמַד עַל הַשֻּׁלְחָן.", question: "עַל מָה עָמַד הַסֵּפֶר?", options: ["כִּסֵּא", "מִטָּה", "שֻּׁלְחָן"], correctIndex: 2 },
        { text: "דָּנִי נָתַן פֶּרַח לְאִמּוֹ.", question: "מָה נָתַן דָּנִי לְאִמּוֹ?", options: ["כַּדּוּר", "סֵפֶר", "פֶּרַח"], correctIndex: 2 },
        { text: "יָעֵל לָמְדָה עִבְרִית.", question: "מָה לָמְדָה יָעֵל?", options: ["מָתֶמָטִיקָה", "עִבְרִית", "אַנְגְּלִית"], correctIndex: 1 },
        { text: "רָן נִשְׁכַּב עַל הַמִּטָּה.", question: "הֵיכָן נִשְׁכַּב רָן?", options: ["עַל הַכִּסֵּא", "עַל הַשֻּׁלְחָן", "עַל הַמִּטָּה"], correctIndex: 2 },
        { text: "הַדָּג שָׂחָה בַּבָּרֵכָה.", question: "הֵיכָן שָׂחָה הַדָּג?", options: ["בַּיָּם", "בַּבָּרֵכָה", "בַּנָּהָר"], correctIndex: 1 },
        { text: "הַצִּפּוֹר עָפָה רָחוֹק בַּשָּׁמַיִם.", question: "אֵיךְ עָפָה הַצִּפּוֹר?", options: ["קָרוֹב", "לְמַטָּה", "רָחוֹק"], correctIndex: 2 },
        { text: "דָּנִי שָׁתָה כּוֹס מַיִם.", question: "מָה שָׁתָה דָּנִי?", options: ["מִיץ", "חָלָב", "מַיִם"], correctIndex: 2 },
        { text: "אָבָּא קָרָא עִתּוֹן.", question: "מָה קָרָא אָבָּא?", options: ["סֵפֶר", "מִכְתָּב", "עִתּוֹן"], correctIndex: 2 },
        { text: "דָּנָה כָּתְבָה בַּמַּחְבֶּרֶת.", question: "הֵיכָן כָּתְבָה דָּנָה?", options: ["בַּסֵּפֶר", "בַּמַּחְבֶּרֶת", "עַל הַדֶּגֶל"], correctIndex: 1 },
        { text: "רוּת שָׁתְתָה מִיץ פֶּטֶל.", question: "אֵיזֶה מִיץ שָׁתְתָה רוּת?", options: ["תַּפּוּז", "גֶּפֶן", "פֶּטֶל"], correctIndex: 2 },
        { text: "הַתַּלְמִיד שִׁיחֵק בְּכַדּוּר.", question: "עִם מָה שִׁיחֵק הַתַּלְמִיד?", options: ["בּוּבָּה", "סֵפֶר", "כַּדּוּר"], correctIndex: 2 },
        { text: "יָעֵל אָכְלָה תַּפּוּז.", question: "מִי אָכְלָה תַּפּוּז?", options: ["דָּנָה", "רוּת", "יָעֵל"], correctIndex: 2 },
        { text: "הַכֶּלֶב שָׁתָה מַיִם.", question: "מָה שָׁתָה הַכֶּלֶב?", options: ["חָלָב", "מִיץ", "מַיִם"], correctIndex: 2 },
        { text: "הַצִּפּוֹר נָחָה עַל הָעֵץ.", question: "הֵיכָן נָחָה הַצִּפּוֹר?", options: ["בַּבַּיִת", "עַל הָעֵץ", "בַּמִּטָּה"], correctIndex: 1 },
        { text: "רוּת לָבְשָׁה שִׂמְלָה.", question: "מָה לָבְשָׁה רוּת?", options: ["מִכְנָסַיִים", "שִׁמְלָה", "כּוֹבַע"], correctIndex: 1 },
        { text: "יָעֵל רָקְדָה בַּחוּץ.", question: "הֵיכָן רָקְדָה יָעֵל?", options: ["בַּבַּיִת", "בַּגָּן", "בַּחוּץ"], correctIndex: 2 },
        { text: "דָּנִי שָׂחָה בַּנָּהָר.", question: "הֵיכָן שָׂחָה דָּנִי?", options: ["בַּיָּם", "בַּנָּהָר", "בַּבָּרֵכָה"], correctIndex: 1 },
        { text: "רוּתִי חִבְּקָה דּוּבִּי.", question: "מָה חִבְּקָה רוּתִי?", options: ["כֶּלֶב", "חָתוּל", "דּוּבִּי"], correctIndex: 2 },
        { text: "דָּנָה רָצָה בַּחוּץ.", question: "מִי רָצָה בַּחוּץ?", options: ["דָּנִי", "אָבָּא", "דָּנָה"], correctIndex: 2 },
        { text: "לְיָעֵל יֵשׁ כֶּלֶב קָטָן.", question: "מָה יֵשׁ לְיָעֵל?", options: ["חָתוּל", "כֶּלֶב", "צִפּוֹר"], correctIndex: 1 },
        { text: "מַיִם קָרִים וּמְרַעֲנָנִים.", question: "אֵיךְ הַמַּיִם?", options: ["חַמִּים", "קָרִים וּמְרַעֲנָנִים", "מְלוּחִים"], correctIndex: 1 }
    ],
    "קבוצה 4 – גבוהה (סוף כיתה א׳)": [
        { text: "הַתַּלְמִיד כָּתַב מִכְתָּב יָפֶה.", question: "אֵיךְ הַמִּכְתָּב?", options: ["קָצָר", "יָפֶה", "מְרַתֵּק"], correctIndex: 1 },
        { text: "יָעֵל וְדָנִי שִׂיחֲקוּ בַּחָצֵר.", question: "מִי שִׂיחֲקוּ בַּחָצֵר?", options: ["אָבָּא וְאִמָּא", "יָעֵל וְדָנִי", "רוּת וְרָן"], correctIndex: 1 },
        { text: "אָבָּא הֵבִיא פֶּרַח לְאִמָּא.", question: "מָה הֵבִיא אָבָּא לְאִמָּא?", options: ["עוּגָה", "תַּפּוּחַ", "פֶּרַח"], correctIndex: 2 },
        { text: "צִפּוֹר עָפָה לַעֵץ גָּבוֹהַּ.", question: "אֵיזֶה עֵץ?", options: ["קָטָן", "גָּבוֹהַּ", "יָבֵשׁ"], correctIndex: 1 },
        { text: "יָעֵל טִיְּלָה עִם הַכֶּלֶב בַּגָּן.", question: "עִם מִי טִיְּלָה יָעֵל?", options: ["עִם אִמָּא", "עִם הַכֶּלֶב", "עִם רָן"], correctIndex: 1 },
        { text: "רָן נָתַן פֶּרַח לְדָנָה.", question: "מָה נָתַן רָן לְדָנָה?", options: ["כַּדּוּר", "פֶּרַח", "לֶחֶם"], correctIndex: 1 },
        { text: "יָעֵל צִיְּרָה בְּצֶבַע אָדֹם.", question: "אֵיזֶה צֶבַע?", options: ["כָּחֹל", "אָדֹם", "יָרֹק"], correctIndex: 1 },
        { text: "הַתַּלְמִידָה קָרְאָה סֵפֶר מְרַתֵּק.", question: "אֵיךְ הָיָה הַסֵּפֶר?", options: ["מְשַׁעֲמֵם", "מְרַתֵּק", "קָצָר"], correctIndex: 1 },
        { text: "הַחָתוּל יָשַׁב עַל הַכִּסֵּא.", question: "מִי יָשַׁב עַל הַכִּסֵּא?", options: ["הַכֶּלֶב", "הַחָתוּל", "הַתַּלְמִיד"], correctIndex: 1 },
        { text: "יֵשׁ בַּסֵּפֶר מִלִּים חֲדָשׁוֹת.", question: "אֵיזֶה מִלִּים יֵשׁ בַּסֵּפֶר?", options: ["יְשָׁנוֹת", "חֲדָשׁוֹת", "קָשׁוֹת"], correctIndex: 1 },
        { text: "רוּת הֵכִינָה עוּגָה.", question: "מָה הֵכִינָה רוּת?", options: ["לֶחֶם", "עוּגָה", "סָלָט"], correctIndex: 1 },
        { text: "הַתִּינוֹק שִׂיחֵק עִם הֶחָתוּל.", question: "עִם מִי שִׂיחֵק הַתִּינוֹק?", options: ["עִם כֶּלֶב", "עִם הֶחָתוּל", "עִם אָחִיו"], correctIndex: 1 },
        { text: "יָעֵל נָתְנָה פֶּרַח לְרוּת.", question: "לְמִי נָתְנָה יָעֵל פֶּרַח?", options: ["לְדָּנִי", "לְרוּת", "לְאִמָּא"], correctIndex: 1 },
        { text: "הַשֶּׁמֶשׁ זוֹרַחַת בַּבֹּקֶר.", question: "מָה זוֹרַחַת בַּבֹּקֶר?", options: ["הַיָּרֵחַ", "הַשֶּׁמֶשׁ", "הַכּוֹכָבִים"], correctIndex: 1 },
        { text: "דָּנִי הֵבִיא כַּד לְרוּת.", question: "מָה הֵבִיא דָּנִי?", options: ["סֵפֶר", "כַּדּוּר", "כַּד"], correctIndex: 2 },
        { text: "שָׂרָה שָׁרָה שִׁיר שָׂמֵחַ.", question: "אֵיךְ הַשִּׁיר שֶׁשָּׁרָה שָׂרָה?", options: ["עָצוּב", "שָׂמֵחַ", "רָגוּעַ"], correctIndex: 1 },
        { text: "הַצִּפּוֹר עָפָה מֵעַל הַיָּם.", question: "מֵעַל מָה עָפָה הַצִּפּוֹר?", options: ["מֵעַל הַגָּן", "מֵעַל הַיָּם", "מֵעַל הַבַּיִת"], correctIndex: 1 },
        { text: "בַּיָּם יֵשׁ גַּלִּים.", question: "מָה יֵשׁ בַּיָּם?", options: ["סִירוֹת", "דָּגִים", "גַּלִּים"], correctIndex: 2 },
        { text: "רוּת מָצְאָה כַּף בַּחוֹל.", question: "מָה מָצְאָה רוּת בַּחוֹל?", options: ["סֵפֶר", "כַּדּוּר", "כַּף"], correctIndex: 2 },
        { text: "יָעֵל לָמְדָה בַּכִּתָּה.", question: "הֵיכָן לָמְדָה יָעֵל?", options: ["בַּגָּן", "בַּכִּתָּה", "בַּמִּטָּה"], correctIndex: 1 },
        { text: "אָבָּא שָׂם סֵפֶר עַל הַשֻּׁלְחָן.", question: "מָה שָׂם אָבָּא עַל הַשֻּׁלְחָן?", options: ["כַּדּוּר", "כַּד", "סֵפֶר"], correctIndex: 2 },
        { text: "הַכֶּלֶב שָׁכַב בַּצֵּל.", question: "הֵיכָן שָׁכַב הַכֶּלֶב?", options: ["בַּשֶּׁמֶשׁ", "בַּצֵּל", "בַּמַּיִם"], correctIndex: 1 },
        { text: "הַיֶּלֶד כָּתַב בַּמַּחְבֶּרֶת.", question: "הֵיכָן כָּתַב הַיֶּלֶד?", options: ["בַּסֵּפֶר", "בַּדַּף", "בַּמַּחְבֶּרֶת"], correctIndex: 2 },
        { text: "הַצִּפּוֹר שָׁרָה.", question: "מָה עָשְׂתָה הַצִּפּוֹר?", options: ["עָפָה", "נָחָה", "שָׁרָה"], correctIndex: 2 },
        { text: "רוּת הֵבִיטָה עַל דֶּגֶל יִשְׂרָאֵל.", question: "עַל מָה הֵבִיטָה רוּת?", options: ["עַל חָתוּל", "עַל דֶּגֶל יִשְׂרָאֵל", "עַל כַּד"], correctIndex: 1 },
        { text: "צִפּוֹרִים עָפוֹת בַּשָּׁמַיִם.", question: "מָה עָפוֹת בַּשָּׁמַיִם?", options: ["כַּדּוּרִים", "דָּגִים", "צִפּוֹרִים"], correctIndex: 2 },
        { text: "הַתַּלְמִיד הֵרִים אֶת הַכַּד.", question: "מָה הֵרִים הַתַּלְמִיד?", options: ["הַסֵּפֶר", "הַדֶּגֶל", "הַכַּד"], correctIndex: 2 },
        { text: "הַכֶּלֶב שִׂיחֵק בַּחָצֵר.", question: "הֵיכָן שִׂיחֵק הַכֶּלֶב?", options: ["בַּבַּיִת", "בַּגָּן", "בַּחָצֵר"], correctIndex: 2 },
        { text: "הַתַּלְמִידָה כָּתְבָה מִלָּה חֲדָשָׁה.", question: "אֵיזוֹ מִלָּה כָּתְבָה?", options: ["יְשָׁנָה", "חֲדָשָׁה", "אֲרֻכָּה"], correctIndex: 1 },
        { text: "יָעֵל וְרוּת צָחֲקוּ בַּגָּן.", question: "מָה עָשׂוּ יָעֵל וְרוּת?", options: ["בָּכוּ", "קָרְאוּ", "צָחֲקוּ"], correctIndex: 2 }
    ]
};

// --- 2. משתני מצב ואלמנטים ---
let currentLevelSentences = [];
let currentSentenceIndex = -1;
let currentLevelName = '';

// אלמנטים ראשיים
const mainMenuDiv = document.getElementById('main-menu');
const readingScreenDiv = document.getElementById('reading-screen');
const levelInfoDiv = document.getElementById('level-info');
const levelButtonsContainer = document.getElementById('level-buttons-container');
const backToMenuBtn = document.getElementById('back-to-menu-btn');
const progressBar = document.getElementById('progress-bar');

// אלמנטים של מצב 'קריאה'
const readingModeDiv = document.getElementById('reading-mode');
const currentSentenceP = document.getElementById('current-sentence');
const readAloudBtn = document.getElementById('read-aloud-btn');
const nextStepBtn = document.getElementById('next-step-btn');

// אלמנטים של מצב 'תרגיל'
const quizModeDiv = document.getElementById('quiz-mode');
const quizQuestionP = document.getElementById('quiz-question');
const quizOptionsDiv = document.getElementById('quiz-options');
const feedbackMessageP = document.getElementById('feedback-message');
const continueBtn = document.getElementById('continue-btn');

// --- 3. פונקציות עזר ---

function shuffleArray(array) {
    // מערבב את רשימת המשפטים
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateProgressBar() {
    // עדכון סרגל ההתקדמות באמצעות Custom CSS Property (כדי לעבוד עם ה-::after ב-CSS)
    const progress = (currentSentenceIndex / currentLevelSentences.length) * 100;
    const progressDisplay = Math.max(0, (currentSentenceIndex / currentLevelSentences.length) * 100);
    
    // מעדכן את המשתנה ב-CSS
    progressBar.style.setProperty('--progress-width', `${progressDisplay}%`);
}

function showMainMenu() {
    // מציג את מסך בחירת הרמה
    mainMenuDiv.style.display = 'block';
    readingScreenDiv.style.display = 'none';
    currentSentenceIndex = -1; // איפוס
    
    // איפוס סרגל ההתקדמות במעבר לתפריט ראשי
    progressBar.style.setProperty('--progress-width', '0%');
}

function readAloud() {
    // מפעיל קריאה קולית (Web Speech API)
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        
        const sentence = currentSentenceP.textContent;
        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.lang = 'he-IL'; // הגדרת שפה לעברית
        
        setTimeout(() => {
            speechSynthesis.speak(utterance);
        }, 100);
        
    } else {
        alert("הדפדפן שלך אינו תומך בקריאה קולית אוטומטית בעברית.");
    }
}

// --- 4. לוגיקה מרכזית (מעבר בין מצבים) ---

function startReading(levelName, levelNumber) {
    currentLevelName = levelName;
    currentLevelSentences = [...SENTENCES[levelName]]; 
    shuffleArray(currentLevelSentences);
    currentSentenceIndex = 0; // מתחילים מאינדקס 0
    
    levelInfoDiv.textContent = `רמה נוכחית: ${currentLevelName}`;
    mainMenuDiv.style.display = 'none';
    readingScreenDiv.style.display = 'block';

    // מתחילים במשפט הראשון
    showReadingMode();
    displayCurrentSentence();
}

function nextSentence() {
    currentSentenceIndex++;
    
    if (currentSentenceIndex < currentLevelSentences.length) {
        showReadingMode();
        displayCurrentSentence();
    } else {
        // סיום הרמה
        updateProgressBar(); // מציג 100%
        alert(`🎉 כל הכבוד! סיימת את כל המשפטים והתרגילים ברמה: ${currentLevelName}! 🎉`);
        showMainMenu();
    }
}

function displayCurrentSentence() {
    // פונקציה שמציגה את המשפט הנוכחי ועדכון ה-UI
    const currentItem = currentLevelSentences[currentSentenceIndex];
    if (currentItem) {
        currentSentenceP.textContent = currentItem.text;
        updateProgressBar();
    }
}


function showReadingMode() {
    // מציג את מסך הקריאה ומסתיר את התרגיל
    readingModeDiv.style.display = 'block';
    quizModeDiv.style.display = 'none';
    feedbackMessageP.textContent = '';
    continueBtn.style.display = 'none';

    // מפעיל מחדש את כפתור "המשך" ומחליף את הטקסט שלו
    nextStepBtn.textContent = 'המשך ➡️ (סיימתי לקרוא)';
    nextStepBtn.onclick = showQuizMode; 
    nextStepBtn.disabled = false;
}

function showQuizMode() {
    // מציג את תרגיל החשיבה
    readingModeDiv.style.display = 'none';
    quizModeDiv.style.display = 'block';
    
    const currentItem = currentLevelSentences[currentSentenceIndex];
    quizQuestionP.textContent = currentItem.question;
    feedbackMessageP.textContent = '';
    quizOptionsDiv.innerHTML = '';

    // יצירת כפתורי התשובות
    currentItem.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.textContent = optionText;
        button.className = 'quiz-option-btn';
        button.onclick = () => checkAnswer(index, currentItem.correctIndex, button);
        quizOptionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex, correctIndex, selectedButton) {
    // בודק את תשובת הילד
    const optionButtons = quizOptionsDiv.querySelectorAll('.quiz-option-btn');
    
    if (selectedIndex === correctIndex) {
        // תשובה נכונה
        feedbackMessageP.textContent = 'מעולה! כל הכבוד! 🎉';
        selectedButton.classList.add('correct');
        
        // מנטרל את כל הכפתורים
        optionButtons.forEach(btn => btn.disabled = true);
        
        // מציג כפתור להמשך
        continueBtn.style.display = 'block';
        continueBtn.onclick = nextSentence;

    } else {
        // תשובה שגויה
        feedbackMessageP.textContent = 'נסי שוב. קראי את המשפט שוב בעיון ובחרי תשובה אחרת.';
        selectedButton.classList.add('wrong');
        selectedButton.disabled = true; // מנטרל רק את הכפתור השגוי הנוכחי
    }
}


// --- 5. אתחול האפליקציה ---
function initializeApp() {
    // יצירת כפתורי הרמה במסך הראשי
    Object.keys(SENTENCES).forEach((levelName, index) => {
        const button = document.createElement('button');
        button.textContent = levelName;
        button.className = `level-btn level-${index + 1}`;
        button.onclick = () => startReading(levelName, index + 1);
        levelButtonsContainer.appendChild(button);
    });
    
    // הגדרת מאזינים לאירועים בכפתורים הכלליים
    readAloudBtn.onclick = readAloud;
    backToMenuBtn.onclick = showMainMenu;

    // מציג את המסך הראשי בהתחלה
    showMainMenu();
    
    // הוספת CSS Custom Property לטובת סרגל ההתקדמות (כדי לעבוד עם ה-::after ב-CSS)
    // אם לא קיים כבר ב-CSS, זה יבטיח שהנראות תקינה:
    if (!progressBar.style.getPropertyValue('--progress-width')) {
        progressBar.style.setProperty('--progress-width', '0%');
    }
}

// הפעלת פונקציית האתחול לאחר טעינת העמוד
window.onload = initializeApp;