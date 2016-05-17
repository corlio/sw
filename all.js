//
// initialize the races
//
function init_races () {
    $.each([{
        "id":"swam",
        "title":"Amazones",
        "count":"6",
        "descro":"La valeur +4 indiqu&eacute;e sur la tuile Amazones signifie que vous prenez 4 pions suppl&eacute;mentaires (donc 10 en tout, auxquels il faut encore ajouter ceux du Pouvoir Sp&eacute;cial), mais ces 4 pions sont r&eacute;serv&eacute;s &agrave; l'attaque uniquement et ne servent pas en d&eacute;fense. Apr&egrave;s avoir red&eacute;ploy&eacute; vos troupes, retirez donc quatre pions Amazones du plateau et mettez-les de c&ocirc;t&eacute;, en prenant soin de laisser tout de m&ecirc;me 1 pion Amazone dans chaque r&eacute;gion occup&eacute;e, dans la mesure du possible. Reprenez vos 4 pions en main au d&eacute;but du prochain tour, au moment de pr&eacute;parer ses troupes."
    },{
        "id":"swel",
        "title":"Elfes",
        "count":"6",
        "descro":"Lorsque l'ennemi s'empare d'une de vos r&eacute;gions, vous reprenez en main tous les pions Elfes qui l'occupaient, sans devoir en d&eacute;fausser un. Red&eacute;ployez ces pions comme d'habitude lorsque l'adversaire a fini son tour."
    },{
        "id":"swge",
        "title":"G&eacute;ants",
        "count":"6",
        "descro":"Vos G&eacute;ants peuvent conqu&eacute;rir toute r&eacute;gion adjacente &agrave; une Montagne qu'ils occupent avec 1 pion de moins que n&eacute;cessaire, avec un minimum de 1 pion."
    },{
        "id":"swhr",
        "title":"Hommes-rats",
        "count":"8",
        "descro":"Pas de capacit&eacute; sp&eacute;cifique, ils sont d&eacute;j&agrave; bien assez nombreux !"
    },{
        "id":"swhu",
        "title":"Humains",
        "count":"5",
        "descro":"Tout Champ occup&eacute; par vos Humains rapporte 1 jeton de victoire suppl&eacute;mentaire en fin de tour."
    },{
        "id":"swmg",
        "title":"Mages",
        "count":"5",
        "descro":"Toute r&eacute;gion qui comporte une Source magique occup&eacute;e par vos Mages rapporte 1 jeton de victoire suppl&eacute;mentaire en fin de tour."
    },{
        "id":"swmp",
        "title":"Mi-portions",
        "count":"6",
        "descro":"Vos Mi-portions peuvent entrer sur le plateau par n'importe quelle r&eacute;gion, pas seulement par un bord de plateau. Placez une Tani&egrave;re dans les deux premi&egrave;res r&eacute;gions que vous prenez. Ces r&eacute;gions sont &agrave; pr&eacute;sent imprenables et immunis&eacute;es contre les capacit&eacute;s sp&eacute;cifiques et Pouvoirs Sp&eacute;ciaux des autres Peuples. Si une de ces r&eacute;gions est abandonn&eacute;e par les Mi-portions, la Tani&egrave;re qui s'y trouve est retir&eacute;e du plateau. En d&eacute;clin, les deux Tani&egrave;res disparaissent."
    },{
        "id":"swna",
        "title":"Nains",
        "count":"3",
        "descro":"Toute r&eacute;gion qui comporte une Mine occup&eacute;e par vos Nains rapporte 1 jeton de victoire suppl&eacute;mentaire en fin de tour. Ce pouvoir continue de s'appliquer m&ecirc;me s'ils sont en d&eacute;clin."
    },{
        "id":"swor",
        "title":"Orcs",
        "count":"5",
        "descro":"Toute r&eacute;gion non-vide conquise par vos Orcs durant ce tour rapporte 1 jeton de victoire suppl&eacute;mentaire en fin de tour."
    },{
        "id":"swso",
        "title":"Sorciers",
        "count":"5",
        "descro":"&Agrave; chaque tour, vos Sorciers peuvent remplacer un pion actif de chaque adversaire par un des leurs, pris dans le casier de rangement (sous r&eacute;serve qu'il en reste), pour conqu&eacute;rir une r&eacute;gion. Le pion en question doit &ecirc;tre le seul de son Peuple dans la r&eacute;gion (un Troll dans son Antre est consid&eacute;r&eacute; comme &eacute;tant tout seul; de m&ecirc;me, une Montagne ou une Forteresse ne prot&egrave;gent pas un pion contre ce genre de conqu&ecirc;te). Cette r&eacute;gion doit &ecirc;tre adjacente &agrave; une r&eacute;gion appartenant aux Sorciers. Le pion adverse remplac&eacute; est remis dans le casier de rangement : un Elfe converti ne revient pas dans la main de son possesseur !"
    },{
        "id":"swsq",
        "title":"Squelettes",
        "count":"6",
        "descro":"Lors du Red&eacute;ploiement de vos troupes, prenez 1 nouveau pion Squelette dans le casier de rangement (sous r&eacute;serve qu'il en reste) pour toute s&eacute;rie de 2 r&eacute;gions non-vides conquises par vos Squelettes lors de ce tour, et ajoutez ce pion &agrave; ceux que vous red&eacute;ployez &agrave; la fin de votre tour."
    },{
        "id":"swti",
        "title":"Tritons",
        "count":"6",
        "descro":"Vos Tritons peuvent conqu&eacute;rir toute r&eacute;gion c&ocirc;ti&egrave;re (adjacente aux mers ou au lac) avec 1 pion de moins que n&eacute;cessaire, avec un minimum de 1 pion."
    },{
        "id":"swto",
        "title":"Trolls",
        "count":"5",
        "descro":"Placez un Antre de Troll dans chaque r&eacute;gion occup&eacute;e par vos Trolls. L'Antre de Troll augmente la d&eacute;fense de la r&eacute;gion d'un point (comme si vous aviez un pion de Peuple suppl&eacute;mentaire) et reste dans la r&eacute;gion m&ecirc;me lorsque vos Trolls sont en d&eacute;clin. Si vous quittez la r&eacute;gion ou qu'un adversaire vous en chasse, retirez l'Antre de Troll."
    },{
        "id":"swzo",
        "title":"Zombies",
        "count":"5",
        "descro":"Lorsque vos Zombies passent en d&eacute;clin, tous leurs pions restent sur le plateau ! De plus, contrairement aux autres Peuples en d&eacute;clin, ils peuvent continuer &agrave; conqu&eacute;rir de nouvelles r&eacute;gions lors des prochains tours et se comportent exactement comme un Peuple actif (m&ecirc;me lorsqu'ils sont attaqu&eacute;s), mais leurs conqu&ecirc;tes doivent &ecirc;tre faites au d&eacute;but de votre tour, avant les conqu&ecirc;tes de votre Peuple actif. Un joueur a le droit d'attaquer son Peuple actif avec ses Zombies en d&eacute;clin."
    },{
        "id":"bnaba",
        "title":"Barbares",
        "count":"9",
        "descro":"Vos Barbares ne peuvent pas se red&eacute;ployer &agrave; la fin de leur tour. En cas d'&eacute;chec au d&eacute; lors de votre derni&egrave;re conqu&ecirc;te, vos Barbares non utilis&eacute;es doivent rester en dehors du plateau."
    },{
        "id":"bnafa",
        "title":"Farfadets",
        "count":"6",
        "descro":"Lors du Red&eacute;ploiement, vous pouvez placer un Chaudron par r&eacute;gion occup&eacute;e par vos Farfadets. Tout Chaudron vous rapporte 1 jeton de victoire s'il est toujours en place au d&eacute;but de votre prochain tour : placez alors le Chaudron parmi vos jetons de victoire. Si un adversaire prend une r&eacute;gion contenant un Chaudron, il le r&eacute;cup&egrave;re imm&eacute;diatement. Tant qu'il vous reste des Chaudrons, vous pouvez en placer lors de vos phases de Red&eacute;ploiement. Les Chaudrons non-utilis&eacute;s sont perdus lors du d&eacute;clin."
    },{
        "id":"bnafe",
        "title":"F&eacute;es",
        "count":"11",
        "descro":"Lors du Red&eacute;ploiement, vous ne devez laisser qu'une seule F&eacute;e par r&eacute;gion en votre possession. Toutes les autres restent en dehors du plateau jusqu'au prochain tour."
    },{
        "id":"bnaho",
        "title":"Homoncules",
        "count":"5",
        "descro":"&Agrave; chaque fois qu'un joueur choisit une combinaison plac&eacute;e plus bas que celle des Homoncules, il place un Homoncule sur leur combinaison en plus d'un jeton de victoire. Lorsque par la suite un joueur choisit les Homoncules, il r&eacute;cup&egrave;re les pions ainsi d&eacute;pos&eacute;s en plus des jetons de victoire et des pions auxquels il a normalement droit gr&acirc;ce &agrave; la combinaison (dans la limite de 15 pions)."
    },{
        "id":"bnapy",
        "title":"Pygm&eacute;es",
        "count":"6",
        "descro":"&Agrave; chaque fois que vous perdez un Pygm&eacute;e, lancez le d&eacute; de renforts et prenez autant de Pygm&eacute;es dans la r&eacute;serve que le r&eacute;sultat du d&eacute;, &agrave; condition qu'il en reste. D&eacute;ployez-les dans vos r&eacute;gions &agrave; la fin du tour du joueur attaquant.",
    }], function (undefined, entry) {
        Races[entry.id] = entry;
    });
}
//
// initialize the powers
//
function init_powers () {
    $.each([{
        "id":"swal",
        "title":"Alchimistes",
        "count":"4",
        "descro":"Tant que votre Peuple n'est pas en d&eacute;clin, prenez 2 jetons de victoire suppl&eacute;mentaires &agrave; la fin de chaque tour."
    },{
        "id":"swan",
        "title":"Ancestraux",
        "count":"5",
        "descro":"Lorsque votre Peuple ancestral est en d&eacute;clin, il ne compte plus dans la limite qui indique qu'un m&ecirc;me joueur ne peut avoir qu'un seul Peuple en d&eacute;clin &agrave; la fois. Vous pouvez donc avoir deux Peuples en d&eacute;clin &agrave; la fois, qui vous rapportent tous les deux des jetons de victoire. Si vous passez un troisi&egrave;me Peuple en d&eacute;clin, votre Peuple ancestral reste sur le plateau, mais votre autre Peuple en d&eacute;clin dispara&icirc;t, comme d'habitude. En fait, les pions de votre Peuple ancestral ne quittent le plateau que s'ils sont an&eacute;antis par l'ennemi."
    },{
        "id":"swar",
        "title":"Arm&eacute;s",
        "count":"4",
        "descro":"Toute r&eacute;gion peut &ecirc;tre conquise avec 1 pion de Peuple de moins que n&eacute;cessaire, avec un minimum de 1 pion."
    },{
        "id":"swah",
        "title":"Aux deux H&eacute;ros",
        "count":"5",
        "descro":"&Agrave; la fin de chacun de vos tours, choisissez deux r&eacute;gions que vous occupez et placez un H&eacute;ros dans chacune d'entre elles. Tant qu'ils y restent, ces r&eacute;gions sont imprenables et immunis&eacute;es aux capacit&eacute;s sp&eacute;cifiques et aux Pouvoirs Sp&eacute;ciaux des Peuples adverses. Les H&eacute;ros disparaissent lorsque vous passez en d&eacute;clin."
    },{
        "id":"swba",
        "title":"B&acirc;tisseurs",
        "count":"3",
        "descro":"Une fois par tour, placez 1 Forteresse dans une r&eacute;gion que vous occupez. Elle vous rapporte 1 jeton de victoire suppl&eacute;mentaire &agrave; la fin de chacun de vos tours, &agrave; moins que vous ne soyez ou ne passiez en d&eacute;clin. Toute Forteresse augmente la d&eacute;fense de la r&eacute;gion d'un point (comme si vous aviez un pion de Peuple suppl&eacute;mentaire), m&ecirc;me si vous &ecirc;tes ou passez en d&eacute;clin. Si vous quittez la r&eacute;gion ou qu'un adversaire vous en chasse, retirez la Forteresse. Il ne peut y avoir qu'une seule Forteresse par r&eacute;gion, et un maximum de 6 Forteresses sur le plateau."
    },{
        "id":"swbe",
        "title":"Berserks",
        "count":"4",
        "descro":"Vous pouvez utiliser le d&eacute; de renforts avant chaque conqu&ecirc;te, pas seulement avant la derni&egrave;re de votre tour ! &Agrave; la diff&eacute;rence d'un jet de d&eacute;s de renfort normal, lancez d'abord le d&eacute;, puis choisissez la r&eacute;gion que vous voulez prendre et placez les pions de Peuple n&eacute;cessaires (moins le r&eacute;sultat du d&eacute;) pour vous emparer de cette r&eacute;gion. Si vous n'avez plus assez de pions de Peuple, il s'agissait de votre derni&egrave;re conqu&ecirc;te ce tour-ci. Comme d'habitude, un minimum de 1 pion de Peuple est requis pour chaque conqu&ecirc;te."
    },{
        "id":"swca",
        "title":"Des Cavernes",
        "count":"5",
        "descro":"Toute r&eacute;gion qui comporte une Caverne peut &ecirc;tre conquise avec un pion de Peuple de moins que n&eacute;cessaire, avec un minimum de 1 pion.<br> De plus, pour vos conqu&ecirc;tes, toutes les r&eacute;gions qui comportent une Caverne sont consid&eacute;r&eacute;es comme adjacentes entre elles."
    },{
        "id":"swco",
        "title":"Des Collines",
        "count":"4",
        "descro":"Prenez 1 jeton de victoire suppl&eacute;mentaire pour chaque Colline que vous occupez en fin de tour."
    },{
        "id":"swfo",
        "title":"Des For&ecirc;ts",
        "count":"4",
        "descro":"Prenez 1 jeton de victoire suppl&eacute;mentaire pour chaque For&ecirc;t que vous occupez en fin de tour."
    },{
        "id":"swma",
        "title":"Des Marais",
        "count":"4",
        "descro":"Prenez 1 jeton de victoire suppl&eacute;mentaire pour chaque Marais que vous occupez en fin de tour."
    },{
        "id":"swdi",
        "title":"Diplomates",
        "count":"5",
        "descro":"&Agrave; la fin de votre tour, vous pouvez choisir un autre joueur qui devient aussit&ocirc;t votre alli&eacute;, &agrave; condition que vous n'ayez pas attaqu&eacute; son Peuple actif pendant ce tour. Vous &ecirc;tes &agrave; pr&eacute;sent en paix avec lui. Il ne pourra pas attaquer votre Peuple actif avant votre prochain tour. Vous pouvez changer d'alli&eacute; &agrave; chaque tour ou rester en paix avec le m&ecirc;me joueur. Les pions en d&eacute;clin ne sont pas concern&eacute;s par cet accord (par exemple, des Zombies en d&eacute;clin n'ont que faire de la paix et pourront vous attaquer) !"
    },{
        "id":"swdc",
        "title":"Durs &agrave; cuire",
        "count":"4",
        "descro":"Vous pouvez poursuivre votre expansion <b>et</b> passer en d&eacute;clin imm&eacute;diatement apr&egrave;s avoir pris vos jetons de victoire, ce qui vous &eacute;vite de perdre un tour pour passer en d&eacute;clin. Les r&egrave;gles du d&eacute;clin s'appliquent, mais vous ne marquez pas une seconde fois les points de victoire en fin de tour."
    },{
        "id":"swdr",
        "title":"Et leur Dragon",
        "count":"5",
        "descro":"Une fois par tour, vous pouvez conqu&eacute;rir une r&eacute;gion en utilisant un seul pion de Peuple, ind&eacute;pendamment du nombre de pions ennemis qui s'y trouve. Une fois conquise, placez votre Dragon dans cette r&eacute;gion. Cette r&eacute;gion est d&eacute;sormais imprenable et immunis&eacute;e aux capacit&eacute;s sp&eacute;cifiques et aux Pouvoirs Sp&eacute;ciaux des Peuples adverses, jusqu'&agrave; ce que votre Dragon parte capturer une nouvelle r&eacute;gion. &Agrave; chaque nouveau tour, vous pouvez d&eacute;placer votre Dragon vers une nouvelle r&eacute;gion pour vous en emparer.<br> Votre Dragon dispara&icirc;t lorsque vous passez en d&eacute;clin : retirez-le alors du plateau."
    },{
        "id":"swft",
        "title":"Fortun&eacute;s",
        "count":"4",
        "descro":"Prenez 7 jetons de victoire suppl&eacute;mentaires &agrave; la fin de votre premier tour d'expansion (donc une seule fois)."
    },{
        "id":"swmc",
        "title":"Marchands",
        "count":"2",
        "descro":"Prenez 1 jeton de victoire suppl&eacute;mentaire pour chaque r&eacute;gion que vous occupez en fin de tour."
    },{
        "id":"swmn",
        "title":"Marins",
        "count":"5",
        "descro":"Vous pouvez consid&eacute;rer les mers et le lac comme trois r&eacute;gions vides et les conqu&eacute;rir. Vous conservez ces r&eacute;gions m&ecirc;me en d&eacute;clin. Elles vous rapportent des jetons de victoire tant que vos pions y restent. Les mers et le lac ne peuvent &ecirc;tre occup&eacute;s que par un Peuple qui dispose de ce Pouvoir. Une mer occup&eacute;e par des Marins n'emp&ecirc;che pas les nouveaux Peuples d'arriver par cette mer lors de la premi&egrave;re conqu&ecirc;te."
    },{
        "id":"swmt",
        "title":"Mont&eacute;s",
        "count":"5",
        "descro":"Toute Colline et tout Champ peuvent &ecirc;tre conquis avec un pion de Peuple de moins que n&eacute;cessaire, avec un minimum de 1 pion."
    },{
        "id":"swpi",
        "title":"Pillards",
        "count":"5",
        "descro":"Toute r&eacute;gion non-vide conquise durant ce tour rapporte 1 jeton de victoire suppl&eacute;mentaire en fin de tour."
    },{
        "id":"swsc",
        "title":"Scouts",
        "count":"5",
        "descro":"Placez les 5 jetons de Campement dans la ou les r&eacute;gions que vous occupez, pendant la phase de Red&eacute;ploiement. Tout Campement compte comme un pion de Peuple suppl&eacute;mentaire et donc augmente la d&eacute;fense de la r&eacute;gion d'un point (cela le prot&egrave;ge &eacute;galement contre la capacit&eacute; sp&eacute;cifique du Sorcier). Il est possible de placer plusieurs Campements dans la m&ecirc;me r&eacute;gion pour augmenter sa d&eacute;fense. Les Campements peuvent &ecirc;tre r&eacute;partis &agrave; votre convenance dans les r&eacute;gions que vous occupez &agrave; chaque tour. Ils disparaissent lors du d&eacute;clin. Si un adversaire vous chasse d'une r&eacute;gion d&eacute;fendue par un Campement, red&eacute;ployez-le dans une de vos r&eacute;gions &agrave; la fin du tour de l'attaquant."
    },{
        "id":"swvo",
        "title":"Volants",
        "count":"5",
        "descro":"Vous pouvez conqu&eacute;rir n'importe quelle r&eacute;gion de la carte, m&ecirc;me si elle n'est pas adjacente &agrave; une des v&ocirc;tres. Les mers et le lac ne peuvent pas &ecirc;tre conquis."
    },{
        "id":"bnaca",
        "title":"Catapult&eacute;s",
        "count":"4",
        "descro":"Une fois par tour, vous pouvez placer la Catapulte dans une de vos r&eacute;gions pour faire une conqu&ecirc;te &agrave; distance en sautant par-dessus une r&eacute;gion (y compris le Lac, mais pas les Mers). La r&eacute;gion de d&eacute;part, qui contient la Catapulte, est imprenable et immunis&eacute;e aux capacit&eacute;s sp&eacute;cifiques et aux Pouvoirs Sp&eacute;ciaux des Peuples adverses. La Catapulte dispara&icirc;t lors du d&eacute;clin."
    },{
        "id":"bnaco",
        "title":"Corrompus",
        "count":"4",
        "descro":"Chaque fois qu'un adversaire s'empare d'une des r&eacute;gions occup&eacute;es par votre Peuple Corrompu, il vous donne 1 jeton de victoire."
    },{
        "id":"bnaim",
        "title":"Imp&eacute;riaux",
        "count":"4",
        "descro":"Si vous occupez plus de 3 r&eacute;gions avec votre Peuple Imp&eacute;rial &agrave; la fin de votre tour, vous gagnez 1 jeton de victoire en plus pour toute r&eacute;gion au-del&agrave; de cette limite (si vous occupez 5 r&eacute;gions, vous remportez donc 2 jetons de victoire suppl&eacute;mentaires)."
    },{
        "id":"bname",
        "title":"Mercenaires",
        "count":"4",
        "descro":"&Agrave; chaque fois que vous voulez conqu&eacute;rir une r&eacute;gion, vous pouvez payer 1 jeton de victoire pour faire baisser de 2 pions de Peuple le co&ucirc;t de la conqu&ecirc;te, sachant qu'une conqu&ecirc;te se fait toujours avec un minimum de 1 pion. S'il s'agit de votre derni&egrave;re conqu&ecirc;te, vous pouvez lancer le d&eacute; de renforts avant de d&eacute;cider de d&eacute;penser 1 jeton."
    },{
        "id":"bnare",
        "title":"Retranch&eacute;s",
        "count":"4",
        "descro":"Si votre Peuple Retranch&eacute; occupe 4 r&eacute;gions ou moins &agrave; la fin de votre tour, prenez 3 jetons de victoire suppl&eacute;mentaires."
    }], function (undefined, entry) {
        Powers[entry.id] = entry;
    });
}
