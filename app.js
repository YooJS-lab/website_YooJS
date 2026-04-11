
(function(){
  function qsa(sel,root){root=root||document;return Array.from(root.querySelectorAll(sel));}
  function byId(id){return document.getElementById(id);}

  var LANG_KEY='lab_site_lang';
  var currentLang=(function(){
    try{return localStorage.getItem(LANG_KEY)||'ko';}catch(e){return 'ko';}
  })();

  var TEXT_MAP={
    '숙주-바이러스 면역동력학 연구실':'Host-Virus Immunodynamics Laboratory',
    '숙주 바이러스 면역동력학 연구실':'Host-Virus Immunodynamics Laboratory',
    '숙바면 아이콘':'Host-Virus Immunodynamics Laboratory icon',
    '관리 | 숙주-바이러스 면역동력학 연구실':'Admin | Host-Virus Immunodynamics Laboratory',
    '경북대학교 미래융합과학관 628호':'Room 628, Future Convergence Science Building, Kyungpook National University',
    '미래융합과학관 628호':'Room 628, Future Convergence Science Building',
    '교수님 사진 자리':'Professor portrait',
    '대표 연구 figure 목록':'Featured research figure list',
    'Publication 보기 →':'View Publications →',
    '바이러스-숙주 면역 상호작용과 면역 교란 기전 연구':'Research on host-virus immune interactions and mechanisms of immune dysregulation',
    '신·변종 바이러스 감염에서 나타나는 선천면역 신호전달, 항원제시 조절, 면역회피 전략의 교란 기전을 연구합니다. 폐 염증 반응과 질환 모델 연구를 함께 확장해 항바이러스 치료 전략과 면역조절 기반 응용으로 연결하고 있습니다.':'We investigate how innate immune signaling, antigen presentation control, and immune evasion are disrupted during emerging and re-emerging viral infections. We also extend this work into pulmonary inflammation and disease models to connect the findings to antiviral strategies and immune-modulatory applications.',
    '항바이러스 센서, IFN 유도, JAK-STAT 신호전달을 포함한 선천면역 반응 축을 요약한 대표 도식입니다.':'A representative schematic summarizing the innate immune response axis, including antiviral sensors, IFN induction, and JAK-STAT signaling.',
    '코로나바이러스, henipavirus, dengue virus, influenza virus, Zika virus 등 주요 신·변종 바이러스의 병원성, 숙주 상호작용, 면역회피 전략을 연구합니다.':'We study the pathogenicity, host interactions, and immune evasion strategies of major emerging and re-emerging viruses, including coronaviruses, henipaviruses, dengue virus, influenza virus, and Zika virus.',
    '폐 특이적 염증 신호전달과 염증성 분자의 기능을 분석하고, 감염성 폐렴 및 만성 기도질환의 병태생리를 규명합니다.':'We analyze lung-specific inflammatory signaling and the functions of inflammatory molecules to define the pathophysiology of infectious pneumonia and chronic airway diseases.',
    '항바이러스·항염증 후보물질을 스크리닝하고, 감염 및 폐 질환 모델에서 치료 전략의 작용 기전과 효능을 검증합니다.':'We screen antiviral and anti-inflammatory candidates and validate the mechanisms and efficacy of therapeutic strategies in infection and pulmonary disease models.',
    '관리자 로그인':'Administrator Login',
    '교수 계정과 관리자 계정만 로그인할 수 있습니다.':'Only professor and authorized administrator accounts can sign in.',
    '이메일':'Email',
    '비밀번호':'Password',
    '로그인':'Login',
    '로그인 중...':'Signing in...',
    '로그인 실패':'Login failed',
    '이메일과 비밀번호를 입력하세요.':'Enter your email and password.',
    '이메일 또는 비밀번호가 올바르지 않습니다.':'The email or password is incorrect.',
    '이메일 인증이 필요합니다. Supabase에서 이메일 인증 설정을 확인하세요.':'Email verification is required. Check the Supabase email confirmation settings.',
    '허용된 관리자 계정만 로그인할 수 있습니다.':'Only approved administrator accounts can sign in.',
    '멤버 정보를 불러오는 중...':'Loading member information...',
    '졸업생 정보를 불러오는 중...':'Loading alumni information...',
    '본 연구실은 바이러스 감염에 대한 숙주 면역반응과 바이러스의 면역회피 기전을 연구합니다. SARS-CoV-2, henipavirus, dengue virus, influenza virus 등 신·변종 바이러스의 병원성과 염증 유발 기전을 분석하고, 폐 염증 반응 및 관련 질환의 병태생리를 함께 규명합니다.':'Our laboratory studies host immune responses to viral infection and mechanisms of viral immune evasion. We analyze the pathogenicity and inflammation-inducing mechanisms of emerging and re-emerging viruses such as SARS-CoV-2, henipavirus, dengue virus, and influenza virus, while also defining the pathophysiology of pulmonary inflammation and related diseases.',
    '이를 바탕으로 항바이러스 치료 전략과 면역조절 기반 응용 연구를 수행하고 있습니다.':'Based on this work, we pursue antiviral therapeutic strategies and immune-modulatory applications.',
    '유지승 교수':'Prof. Ji-Seung Yoo',
    'Prof. Ji-Seung Yoo':'Prof. Ji-Seung Yoo',
    '연구 테마':'Research Themes',
    '아래 내용은 연구실 구조에 맞게 자유롭게 수정할 수 있습니다.':'The content below can be freely adjusted to match the laboratory structure.',
    '기술 혁신 방향':'Innovation Directions',
    '아래 내용은 예시이므로 연구실 방향에 맞게 자유롭게 수정하면 됩니다.':'The content below is an example and can be revised to match the laboratory direction.',
    '세포 기반 분석, 분자생물학 실험, 면역 반응 정량화 플랫폼을 정교화합니다.':'We refine cell-based assays, molecular biology workflows, and quantitative immune response platforms.',
    '이미지 분석, 오믹스 데이터, 바이러스-숙주 상호작용 정보를 정리하여 확장 가능한 분석 흐름을 구축합니다.':'We organize image analysis, omics data, and host-virus interaction information to build scalable analytical workflows.',
    '기전 연구를 실제 치료 전략 및 진단 가능성으로 연결할 수 있는 응용 방향을 제시합니다.':'We propose translational directions that connect mechanistic research to therapeutic strategies and diagnostic potential.',
    '논문 데이터베이스':'Publication Database',
    '검색':'Search',
    '제목, 저널, 요약 검색':'Search title, journal, or summary',
    '연도':'Year',
    '전체 연도':'All years',
    '저자 역할':'Author role',
    '전체 역할':'All roles',
    '정렬':'Sort',
    '최신순':'Newest first',
    '오래된순':'Oldest first',
    '총 0편':'0 total',
    '논문 DB를 불러오는 중...':'Loading publication database...',
    '논문 DB를 불러오지 못했습니다.':'Failed to load the publication database.',
    '조건에 맞는 논문이 없습니다.':'No publications match the selected filters.',
    '원문 보기':'View full text',
    'DOI / 원문 보기':'DOI / View full text',
    '선천면역 반응 및 항바이러스 신호전달 기전 연구':'Innate immune responses and antiviral signaling mechanisms',
    '선천면역 반응 및 항바이러스 신호전달 기전 연구 도식':'Diagram of innate immune responses and antiviral signaling mechanisms',
    '바이러스 병인성과 숙주 상호작용 연구':'Viral pathogenesis and host interaction research',
    '바이러스 병인성과 숙주 상호작용 연구 관련 그림':'Figure related to viral pathogenesis and host interaction research',
    '폐 염증 반응 및 질환 모델 연구':'Pulmonary inflammatory responses and disease models',
    '폐 염증 반응 및 질환 모델 연구 관련 그림':'Figure related to pulmonary inflammatory responses and disease models',
    '바이러스 감염 시 숙주는 RIG-I, MDA5, LGP2, TLR 과 같은 다양한 항바이러스 센서를 통해 병원체를 신속하게 인지합니다. 이 과정에서 유도되는 인터페론(IFN-α/β, IFN-γ) 및 다양한 염증성 사이토카인은 항바이러스 상태를 형성하는 핵심 인자입니다.':'During viral infection, the host rapidly senses pathogens through antiviral sensors such as RIG-I, MDA5, LGP2, and TLRs. The induced interferons (IFN-α/β, IFN-γ) and multiple inflammatory cytokines are key factors in establishing an antiviral state.',
    '본 연구실은 이러한 항바이러스 선천면역 센서 신호전달 경로의 활성화 과정과 조절 인자를 규명하고, 바이러스 감염에 따른 사이토카인 생성·신호전달의 세부 메커니즘을 밝히고 있습니다.':'Our laboratory defines the activation processes and regulatory factors of these antiviral innate immune sensor pathways and clarifies the detailed mechanisms of cytokine production and signaling during viral infection.',
    '또한, 선천면역 경로를 인위적으로 활성화하거나 억제하여 면역 반응을 조절할 수 있는 면역 증강 후보물질을 고속 스크리닝 플랫폼을 통해 탐색하고, 후보물질의 작용 기전과 항바이러스 효능을 체계적으로 검증하고 있습니다.':'We also use high-throughput screening platforms to identify immunostimulatory candidates that can modulate immune responses by activating or suppressing innate immune pathways, and we systematically validate their mechanisms of action and antiviral efficacy.',
    '다양한 바이러스는 숙주의 면역 방어 체계를 무력화시키기 위해 면역 회피(immune evasion) 전략을 진화시켜 왔습니다.':'Many viruses have evolved immune evasion strategies to undermine host immune defenses.',
    '본 연구실은 사스코로나바이러스, 니파바이러스, 인플루엔자 바이러스 등 고위험 병원체를 대상으로, 바이러스 단백질이 인터페론 생성 억제, JAK-STAT 신호전달 차단, 항바이러스 유전자 발현 억제 등 다양한 방식으로 면역 반응을 방해하는 분자 기전을 규명합니다.':'Our laboratory studies high-risk pathogens such as SARS coronaviruses, henipaviruses, and influenza viruses to define the molecular mechanisms by which viral proteins interfere with immune responses, including suppression of interferon production, blockade of JAK-STAT signaling, and inhibition of antiviral gene expression.',
    '이를 위해 다양한 리포터 시스템, CRISPR-Cas9 기반 유전자 편집, 단백질 상호작용 분석, 전사체 분석(RNA-seq) 등 첨단 분자생물학 기법을 활용하고 있습니다.':'To do this, we use advanced molecular biology approaches including reporter systems, CRISPR-Cas9-based gene editing, protein interaction analysis, and transcriptome analysis (RNA-seq).',
    '궁극적으로 신규 항바이러스 표적 발굴과 백신 개발을 목표로 연구에 매진하고 있습니다.':'Ultimately, we aim to identify new antiviral targets and contribute to vaccine development.',
    '폐는 외부 환경과 직접적으로 접촉하는 장기로, 감염성 및 비감염성 요인에 의해 다양한 염증 반응이 발생합니다.':'The lung is an organ in direct contact with the external environment, and diverse inflammatory responses can arise from both infectious and non-infectious factors.',
    '본 연구실은 감염에 의한 급성 폐 염증(예: 바이러스성 폐렴)뿐만 아니라, 천식과 특발성 폐섬유증(IPF)과 같은 만성 기도질환의 병태생리를 연구합니다. 이를 위해 폐 특이적 염증 신호전달 경로를 분자적 수준에서 분석하고, 마우스를 이용한 in vivo 질환 모델을 구축하여 병리 기전을 규명합니다.':'Our laboratory studies not only acute pulmonary inflammation caused by infection, such as viral pneumonia, but also the pathophysiology of chronic airway diseases including asthma and idiopathic pulmonary fibrosis (IPF). We analyze lung-specific inflammatory signaling pathways at the molecular level and establish in vivo mouse disease models to define pathogenic mechanisms.',
    '특히, 감염 모델에서는 병원체 감염 후 시간 경과에 따른 폐 조직 손상, 부종, 기도 폐색, 면역세포 침윤 등을 micro-CT 영상, 조직병리 분석, 면역형광염색 등을 통해 정량적으로 평가합니다.':'In infection models in particular, we quantitatively evaluate lung tissue damage, edema, airway obstruction, and immune cell infiltration over time after pathogen exposure using micro-CT imaging, histopathology, and immunofluorescence staining.',
    '또한, 이러한 모델을 활용하여 항바이러스제, 항염증제, 면역 조절제의 효능을 검증하고, 폐 질환 치료를 위한 새로운 후보물질을 발굴하는 연구를 수행하고 있습니다.':'We also use these models to evaluate the efficacy of antiviral, anti-inflammatory, and immune-modulatory agents and to identify new candidates for the treatment of pulmonary diseases.',
    '새 글 업로드':'Create New Post',
    '이미지, 영상, HEIC/HEIF 파일을 업로드할 수 있습니다. Board와 Gallery 게시물을 작성합니다.':'You can upload images, videos, and HEIC/HEIF files. Use this form to create Board and Gallery posts.',
    '업로드 위치':'Publish to',
    '하위 카테고리':'Subcategory',
    '제목':'Title',
    '연구실 소식 제목':'Lab update title',
    '내용':'Content',
    '소식 내용을 입력하세요.':'Enter the update content.',
    '미디어 업로드':'Upload media',
    '수정 모드입니다. 새 파일을 올리면 기존 미디어를 교체합니다.':'Edit mode. Uploading a new file will replace the existing media.',
    '업로드':'Upload',
    '수정 취소':'Cancel edit',
    'News 업로드':'Upload News',
    '메인 페이지 News 영역에 표시할 별도 소식을 작성합니다.':'Create a separate item for the News section on the home page.',
    '뉴스 제목':'News title',
    '뉴스 내용을 입력하세요.':'Enter the news content.',
    '링크 (선택)':'Link (optional)',
    '업로드된 글':'Uploaded Posts',
    '모든 관리자 계정이 글을 수정할 수 있고, 삭제는 업로드한 계정만 할 수 있습니다.':'All administrator accounts can edit posts, but only the account that uploaded a post can delete it.',
    '로딩 중...':'Loading...',
    '멤버 관리':'Member Management',
    '배경 이미지':'Background Images',
    '배경 이미지 지정':'Set Background Images',
    'Storage에 올라간 이미지를 선택해 페이지 배너 배경으로 지정할 수 있습니다.':'Choose an image uploaded to Storage and assign it as a page banner background.',
    '아직 업로드된 글이 없습니다.':'No posts have been uploaded yet.',
    '등록된 뉴스가 없습니다.':'No news items have been posted.',
    '수정':'Edit',
    '삭제':'Delete',
    '삭제할까요?':'Delete this item?',
    '게시물을 삭제했습니다.':'The post was deleted.',
    '뉴스 제목을 입력하세요.':'Enter a news title.',
    '뉴스를 업로드했습니다.':'The news item was uploaded.',
    '제목과 내용을 입력하세요.':'Enter both a title and content.',
    '수정 중...':'Saving changes...',
    '업로드 중...':'Uploading...',
    '게시물을 수정했습니다.':'The post was updated.',
    '업로드 완료!':'Upload complete!',
    '저장되었습니다.':'Saved.',
    'Supabase 연결이 필요합니다.':'A Supabase connection is required.',
    '불러오는 중...':'Loading...',
    '경북대학교 숙주 바이러스 면역동력학 연구실':'Host-Virus Immunodynamics Laboratory, Kyungpook National University',
    '석사과정생':'MS course',
    '박사과정생':'PhD course',
    '석박통합과정생':'Integrated MS-PhD course',
    '학부연구생':'Undergraduate Researcher',
    '박사후과정생':'Postdoctoral Researcher',
    '교신저자':'Corresponding author',
    '제1저자':'First author',
    '공동저자':'Co-author',
    '공동제1저자':'Co-first author',
    '이름 *':'Name *',
    '홍길동':'Hong Gil-dong',
    '구분':'Type',
    '역할':'Role',
    '미선택':'Not selected',
    '소속':'Affiliation',
    '현재 소속':'Current Affiliation',
    '졸업 연도':'Graduation Year',
    '순서':'Order',
    '소개':'Bio',
    '추가':'Add',
    '저장':'Save',
    '저장 중...':'Saving...',
    '저장됨 ✓':'Saved ✓',
    '이름을 입력하세요.':'Enter a name.',
    '컬럼이 필요합니다. zip 안의 SQL을 실행하세요.':'The required column is missing. Run the SQL included in the zip file.',
    '오류:':'Error:',
    '테이블을 확인하세요.':'Check the table.',
    '멤버 추가':'Add Member',
    '졸업생 추가':'Add Alumni',
    '등록된 멤버가 없습니다.':'No members have been registered.',
    '등록된 졸업생이 없습니다.':'No alumni have been registered.',
    '석사과정생':'MS course',
    '박사과정생':'PhD course',
    '박사후과정생':'Postdoctoral researcher',
    '학부연구생':'Undergraduate researcher',
    '학부연구원':'Undergraduate researcher',
    '졸업생':'Alumni',
    'Board':'Board',
    'Gallery':'Gallery',
    'News':'News',
    '게시판':'Board',
    '갤러리':'Gallery',
    '파일 열기':'Open file'
  };

  function tr(s){
    s=String(s==null?'':s);
    if(currentLang!=='en') return s;
    return Object.prototype.hasOwnProperty.call(TEXT_MAP,s) ? TEXT_MAP[s] : s;
  }
  function translateMaybeCount(s){
    s=String(s==null?'':s);
    if(currentLang!=='en') return s;
    var m=s.match(/^총\s+(\d+)편$/);
    if(m) return 'Total '+m[1]+' publications';
    return tr(s);
  }
  function setLang(lang){
    currentLang = (lang==='en') ? 'en' : 'ko';
    try{localStorage.setItem(LANG_KEY,currentLang);}catch(e){}
    document.documentElement.lang=currentLang;
    document.body && document.body.setAttribute('data-lang', currentLang);
    updateTranslateButtons();
    applyTranslations(document.body||document);
    try{
      if(byId('lab-member-grid')) renderLabMembers();
      if(byId('alumni-grid')) renderAlumni();
      if(byId('publication-db-list')) renderPublicationDB();
    }catch(_e){}
    window.dispatchEvent(new CustomEvent('lab-language-change',{detail:{lang:currentLang}}));
  }
  function updateTranslateButtons(){
    qsa('.lang-toggle').forEach(function(btn){
      btn.textContent = currentLang==='en' ? 'KOR' : 'ENG';
      btn.setAttribute('aria-label', currentLang==='en' ? 'Switch to Korean' : 'Switch to English');
      btn.setAttribute('title', currentLang==='en' ? 'Korean' : 'English');
    });
  }
  function applyDataLangText(root){
    (root && root.querySelectorAll ? root : document).querySelectorAll('[data-ko][data-en]').forEach(function(el){
      var value = currentLang==='en' ? el.getAttribute('data-en') : el.getAttribute('data-ko');
      if(value!=null) el.textContent = value;
    });
  }
  function injectTranslateToggle(){
    var nav = byId('main-nav');
    if(!nav || nav.querySelector('.lang-toggle')) return;
    var btn=document.createElement('button');
    btn.type='button';
    btn.className='nav-link lang-toggle';
    btn.addEventListener('click', function(){ setLang(currentLang==='en' ? 'ko' : 'en'); });
    nav.appendChild(btn);
    updateTranslateButtons();
  }
  function applyTranslations(root){
    root=root||document;
    if(!root) return;
    if(document.title){
      if(!document.documentElement.dataset.titleKo) document.documentElement.dataset.titleKo=document.title;
      document.title = currentLang==='en' ? tr(document.documentElement.dataset.titleKo) : document.documentElement.dataset.titleKo;
    }
    applyDataLangText(root);
    var walker=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode:function(node){
        if(!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p=node.parentNode;
        if(!p) return NodeFilter.FILTER_REJECT;
        var tag=(p.nodeName||'').toLowerCase();
        if(tag==='script'||tag==='style') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var textNodes=[], node;
    while((node=walker.nextNode())) textNodes.push(node);
    textNodes.forEach(function(n){
      if(typeof n.__i18nOriginal==='undefined') n.__i18nOriginal=n.nodeValue;
      var orig=n.__i18nOriginal;
      var trimmed=orig.trim();
      if(!trimmed) return;
      var translated = currentLang==='en' ? translateMaybeCount(trimmed) : trimmed;
      if(translated===trimmed && currentLang!=='en') {
        n.nodeValue=orig;
        return;
      }
      n.nodeValue = orig.replace(trimmed, translated);
    });
    qsa('*',root).forEach(function(el){
      ['placeholder','alt','title','aria-label'].forEach(function(attr){
        if(!el.hasAttribute || !el.hasAttribute(attr)) return;
        var k='i18nOrig'+attr.replace(/-([a-z])/g,function(m,c){return c.toUpperCase();}).charAt(0).toUpperCase()+attr.replace(/-([a-z])/g,function(m,c){return c.toUpperCase();}).slice(1);
        if(!el.dataset[k]) el.dataset[k]=el.getAttribute(attr);
        el.setAttribute(attr, currentLang==='en' ? tr(el.dataset[k]) : el.dataset[k]);
      });
    });
  }

  function fmtDate(v){if(!v)return'';var d=new Date(v);return isNaN(d)?'':d.toLocaleString(currentLang==='en'?'en-US':'ko-KR',{year:'numeric',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});}
  function setStatus(el,msg,type){if(!el)return;el.textContent=translateMaybeCount(msg||'');el.className='status'+(type?' '+type:'');el.classList.toggle('hidden',!msg);}
  function escapeHtml(s){return String(s==null?'':s).replace(/[&<>"']/g,function(m){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];});}
  function formatBodyHtml(s){return escapeHtml(String(s==null?'':s).trim()).replace(/\n{3,}/g,'<br><br>').replace(/\n/g,'<br>');}
  function localName(email){return (email||'').split('@')[0]||email||'';}
  function isAllowedAdmin(email){
    var allowed=(window.ADMIN_EMAILS||[]).map(function(v){return String(v||'').trim().toLowerCase();}).filter(Boolean);
    return !!email && allowed.indexOf(String(email).trim().toLowerCase())!==-1;
  }

  var BG_KEYS=[
    {key:'home',label:'Home'},
    {key:'publication',label:'Publication'},
    {key:'members',label:'Lab Member'},
    {key:'boards',label:'Boards'},
    {key:'gallery',label:tr('Gallery')}
  ];
  function getCategoryOptions(s){return s==='board'?['Notice','Seminar','Recruitment']:['General','Lab Life','Event','Poster'];}

  var navToggle=byId('nav-toggle'),mainNav=byId('main-nav');
  injectTranslateToggle();
  var forcedLang=((document.body&&document.body.getAttribute('data-force-lang'))||document.documentElement.getAttribute('data-force-lang')||'').trim();
  if(forcedLang){
    currentLang = forcedLang==='en' ? 'en' : 'ko';
    try{localStorage.setItem(LANG_KEY,currentLang);}catch(e){}
  }
  document.documentElement.lang=currentLang;
  document.body && document.body.setAttribute('data-lang', currentLang);
  if(navToggle&&mainNav)navToggle.addEventListener('click',function(){mainNav.classList.toggle('open');});
  qsa('.has-submenu > a').forEach(function(link){
    link.addEventListener('click',function(e){
      if(window.innerWidth<=920){
        var p=link.parentElement;
        if(p&&!p.classList.contains('open')){
          e.preventDefault();
          qsa('.has-submenu.open').forEach(function(el){if(el!==p)el.classList.remove('open');});
          p.classList.add('open');
        }
      }
    });
  });

  var SUPA_URL=window.SUPABASE_URL||'',SUPA_KEY=window.SUPABASE_ANON_KEY||'';
  var hasConfig=!!(SUPA_URL&&SUPA_KEY&&!SUPA_URL.includes('YOUR_SUPABASE'));
  var sb=(window.supabase&&hasConfig)?window.supabase.createClient(SUPA_URL,SUPA_KEY):null;
  var _session=null;

  async function signIn(email,pw){
    var r=await fetch(SUPA_URL+'/auth/v1/token?grant_type=password',{
      method:'POST',
      headers:{'Content-Type':'application/json','apikey':SUPA_KEY,'Authorization':'Bearer '+SUPA_KEY},
      body:JSON.stringify({email:email,password:pw})
    });
    var d=await r.json();
    if(!r.ok)return{error:{message:d.error_description||d.message||d.error||'로그인 실패'}};

    var userEmail=(d.user&&d.user.email)||email;
    if(!isAllowedAdmin(userEmail)){
      return {error:{message:'허용된 관리자 계정만 로그인할 수 있습니다.'}};
    }

    _session=d;
    if(sb)await sb.auth.setSession({access_token:d.access_token,refresh_token:d.refresh_token}).catch(function(){});
    return{data:d,error:null};
  }
  async function getSession(){
    if(_session&&_session.access_token){
      var em=(_session.user&&_session.user.email)||'';
      if(isAllowedAdmin(em)) return _session;
      _session=null;
    }
    if(!sb)return null;
    try{
      var r=await sb.auth.getSession();
      if(r.data&&r.data.session){
        var s=r.data.session,em=(s.user&&s.user.email)||'';
        if(isAllowedAdmin(em)){_session=s;return _session;}
        await sb.auth.signOut().catch(function(){});
      }
    }catch(e){}
    return null;
  }
  async function signOut(){_session=null;if(sb)await sb.auth.signOut().catch(function(){});}

  async function uploadFile(path,file){
    if(!sb)throw new Error('Supabase 미연결');
    var up=await sb.storage.from('lab-media').upload(path,file,{upsert:false});
    if(up.error)throw up.error;
    return sb.storage.from('lab-media').getPublicUrl(path).data.publicUrl;
  }
  async function getStorageImages(){
    if(!sb)return[];
    var r=await sb.storage.from('lab-media').list('posts',{limit:100,sortBy:{column:'created_at',order:'desc'}});
    if(r.error)return[];
    return(r.data||[]).filter(function(i){return i.name&&!i.name.endsWith('/');}).map(function(i){
      var p='posts/'+i.name;
      return{path:p,publicUrl:sb.storage.from('lab-media').getPublicUrl(p).data.publicUrl,name:i.name};
    });
  }
  async function loadBgMap(){
    if(!sb)return{};
    try{
      var r=await sb.from('site_backgrounds').select('page_key,image_url,image_path');
      if(r.error)return{};
      var m={};(r.data||[]).forEach(function(row){m[row.page_key]=row;});
      return m;
    }catch(e){return{};}
  }

  function inferMediaKind(post){
    var src=(post.image_url||post.image_path||'').toLowerCase();
    if(!src)return 'none';
    if(/\.(mp4|webm|ogg|mov|m4v)(\?|#|$)/.test(src)) return 'video';
    if(/\.(heic|heif)(\?|#|$)/.test(src)) return 'heic';
    if(/\.(zip|rar|7z|pdf|doc|docx|xls|xlsx|ppt|pptx)(\?|#|$)/.test(src)) return 'file';
    return 'image';
  }

  function parseStyledBody(raw){
    raw = raw || '';
    var meta = {};
    var m = raw.match(/^\[\[STYLE:(.*?)\]\]\n?/);
    if(m){
      try{ meta = JSON.parse(m[1]); }catch(e){ meta = {}; }
      raw = raw.replace(/^\[\[STYLE:.*?\]\]\n?/,'');
    }
    return { body: raw, meta: meta||{} };
  }
  function makeStyledBody(body, meta){
    meta = meta || {};
    var cleaned = String(body||'').replace(/^\[\[STYLE:.*?\]\]\n?/,'');
    var hasMeta = Object.keys(meta).some(function(k){
      return meta[k] !== '' && meta[k] !== null && meta[k] !== undefined && meta[k] !== false &&
             meta[k] !== 'normal' && meta[k] !== 'no' && meta[k] !== 'right' && meta[k] !== '#122033';
    });
    return hasMeta ? ('[[STYLE:'+JSON.stringify(meta)+']]\n'+cleaned) : cleaned;
  }

  function renderMedia(post){
    var url=post.image_url||'';
    if(!url) return '';
    var kind=inferMediaKind(post);
    if(kind==='video'){
      return '<div class="post-media-box"><video class="post-video" controls preload="metadata"><source src="'+escapeHtml(url)+'"></video></div>';
    }
    if(kind==='heic'){
      return '<div class="post-media-box heic-box"><div class="heic-note">HEIC / HEIF 파일</div><a href="'+escapeHtml(url)+'" target="_blank" rel="noopener" class="button">파일 열기</a></div>';
    }
    if(kind==='file'){
      return '<div class="post-media-box file-box"><div class="file-note">첨부 파일</div><a href="'+escapeHtml(url)+'" target="_blank" rel="noopener" class="button">파일 열기</a></div>';
    }
    return '<a href="'+escapeHtml(url)+'" target="_blank" rel="noopener" class="post-media-box post-img-link"><img src="'+escapeHtml(url)+'" class="post-img" loading="lazy" alt="'+escapeHtml(post.title||"media")+'"></a>';
  }
  function renderPostCard(post, canEdit, canDelete, mode){
    var parsed=parseStyledBody(post.body||'');
    var bodyText=parsed.body||'';
    var styleMeta=parsed.meta||{};
    var media=renderMedia(post);
    var hasMedia=!!media;
    var buttons='';
    if(canEdit){buttons += '<button class="button muted-button" data-edit="'+post.id+'">수정</button>';}
    if(canDelete){buttons += '<button class="button muted-button" data-delete="'+post.id+'">삭제</button>';}
    var actionHtml = buttons ? '<div class="post-action-row">'+buttons+'</div>' : '';
    var badgeHtml = styleMeta.isNew==='yes' ? '<span class="new-upload-badge">NEW</span>' : '';
    var layoutClass = styleMeta.imageAlign ? (' media-'+escapeHtml(styleMeta.imageAlign)) : '';
    var titleClass = styleMeta.titleSize ? (' title-'+escapeHtml(styleMeta.titleSize)) : '';
    var bodyClass = styleMeta.bodySize ? (' body-'+escapeHtml(styleMeta.bodySize)) : '';
    var titleStyle = styleMeta.titleColor ? ' style="color:'+escapeHtml(styleMeta.titleColor)+'"' : '';
    var categoryText = escapeHtml(post.category||'');
    var labelHtml = '<div class="post-label-row"><span class="badge">'+escapeHtml(post.section==='news'?tr('News'):(post.section==='gallery'?tr('Gallery'):tr('Board')))+'</span><span class="mini-tag">'+categoryText+'</span></div>';
    if(post.section==='gallery'){
      var galleryCategoryHtml = '<div class="gallery-category-inline">'+categoryText+'</div>';
      return '<article class="panel post-card section-gallery'+(hasMedia?' has-media':'')+'">'+
        '<div class="gallery-card-head">'+
          '<div class="gallery-card-title-row">'+galleryCategoryHtml+'<h3 class="post-title gallery-inline-title'+titleClass+'"'+titleStyle+'>'+escapeHtml(post.title||'')+'</h3></div>'+
          '<div class="gallery-card-meta-row"><span class="post-author">'+escapeHtml(post.author_name||'')+'</span><span class="post-date">'+fmtDate(post.created_at)+'</span></div>'+
        '</div>'+
        (hasMedia?'<div class="gallery-card-media">'+media+'</div>':'')+
        '<div class="post-body gallery-card-body'+bodyClass+'">'+formatBodyHtml(bodyText)+'</div>'+
        actionHtml+
      '</article>';
    }
    if(mode==='latest'){
      var latestCategoryHtml = '<div class="gallery-category-inline latest-category-inline">'+categoryText+'</div>';
      var latestMediaHtml = hasMedia ? '<div class="gallery-card-media latest-card-media">'+media+'</div>' : '';
      var latestBodyHtml = bodyText ? ('<div class="post-body gallery-card-body latest-card-body'+bodyClass+'">'+formatBodyHtml(bodyText)+'</div>') : '<div class="post-body gallery-card-body latest-card-body empty"></div>';
      return '<article class="panel post-card section-gallery latest-gallery-card '+escapeHtml(post.section||'board')+(hasMedia?' has-media':'')+'">'+
        '<div class="gallery-card-head latest-card-head">'+
          '<div class="gallery-card-title-row latest-card-title-row">'+latestCategoryHtml+'<h3 class="post-title gallery-inline-title latest-inline-title'+titleClass+'"'+titleStyle+'>'+escapeHtml(post.title||'')+'</h3></div>'+
          '<div class="gallery-card-meta-row latest-card-meta-row"><span class="post-author">'+escapeHtml(post.author_name||'')+'</span><span class="post-date">'+fmtDate(post.created_at)+'</span></div>'+
        '</div>'+
        latestMediaHtml+
        latestBodyHtml+
        actionHtml+
      '</article>';
    }
    return '<article class="panel post-card section-'+escapeHtml(post.section||'board')+(hasMedia?' has-media':'')+layoutClass+'">'+
      labelHtml+
      '<div class="post-layout">'+
        '<div class="post-content">'+badgeHtml+'<h3 class="post-title'+titleClass+'"'+titleStyle+'>'+escapeHtml(post.title||'')+'</h3><div class="post-meta"><span class="post-author">'+escapeHtml(post.author_name||'')+'</span><span class="post-date">'+fmtDate(post.created_at)+'</span></div><div class="post-body'+bodyClass+'">'+formatBodyHtml(bodyText)+'</div>'+actionHtml+'</div>'+(hasMedia?'<div class="post-side-media">'+media+'</div>':'')+'</div></article>';
  }

  function renderPosts(c,posts,empty,mode){
    if(!c)return;
    if(!posts.length){c.innerHTML='<article class="panel post-card"><p>'+escapeHtml(empty)+'</p></article>';return;}
    c.innerHTML=posts.map(function(p){return renderPostCard(p,false,false,mode);}).join('');
  }
  function renderLatestPosts(c, posts, empty){
    if(!c)return;
    if(!posts.length){
      c.innerHTML='<div class="latest-track"><article class="panel latest-card-v2 empty"><p>'+escapeHtml(empty)+'</p></article></div>';
      return;
    }
    function renderLatestMedia(post){
      var url=post.image_url||'';
      if(!url) return '';
      var kind=inferMediaKind(post);
      if(kind==='video'){
        return '<div class="latest-card-media-v2"><div class="latest-media-box-v2"><video class="latest-media-video-v2" controls preload="metadata"><source src="'+escapeHtml(url)+'"></video></div></div>';
      }
      if(kind==='heic'){
        return '<div class="latest-card-media-v2"><div class="latest-media-box-v2 latest-file-box-v2"><div class="heic-note">HEIC / HEIF 파일</div><a href="'+escapeHtml(url)+'" target="_blank" rel="noopener" class="button">파일 열기</a></div></div>';
      }
      if(kind==='file'){
        return '<div class="latest-card-media-v2"><div class="latest-media-box-v2 latest-file-box-v2"><div class="file-note">첨부 파일</div><a href="'+escapeHtml(url)+'" target="_blank" rel="noopener" class="button">파일 열기</a></div></div>';
      }
      return '<div class="latest-card-media-v2"><a href="'+escapeHtml(url)+'" target="_blank" rel="noopener" class="latest-media-link-v2"><img src="'+escapeHtml(url)+'" class="latest-media-img-v2" loading="lazy" alt="'+escapeHtml(post.title||"media")+'"></a></div>';
    }
    var cards = posts.slice(0,3).map(function(post){
      var parsed=parseStyledBody(post.body||'');
      var bodyText=parsed.body||'';
      var categoryText = escapeHtml(post.category||'');
      return '<article class="panel latest-card-v2 '+escapeHtml(post.section||'board')+'">'+
        '<div class="latest-card-head-v2">'+
          '<div class="latest-card-title-row-v2">'+
            '<div class="latest-category-inline-v2">'+categoryText+'</div>'+
            '<h3 class="latest-inline-title-v2">'+escapeHtml(post.title||'')+'</h3>'+
          '</div>'+
          '<div class="latest-card-meta-row-v2"><span class="post-author">'+escapeHtml(post.author_name||'')+'</span><span class="post-date">'+fmtDate(post.created_at)+'</span></div>'+
        '</div>'+
        renderLatestMedia(post)+
        '<div class="latest-card-body-v2">'+formatBodyHtml(bodyText)+'</div>'+
      '</article>';
    }).join('');
    c.innerHTML='<div class="latest-track">'+cards+'</div>';
  }
  function enableHorizontalDrag(el){
    if(!el||el.dataset.dragReady==='1')return;
    el.dataset.dragReady='1';
    var isDown=false,startX=0,scrollLeft=0;
    el.addEventListener('mousedown',function(e){isDown=true;el.classList.add('dragging');startX=e.pageX-el.offsetLeft;scrollLeft=el.scrollLeft;});
    window.addEventListener('mouseup',function(){isDown=false;el.classList.remove('dragging');});
    el.addEventListener('mouseleave',function(){isDown=false;el.classList.remove('dragging');});
    el.addEventListener('mousemove',function(e){if(!isDown)return;e.preventDefault();var x=e.pageX-el.offsetLeft;var walk=(x-startX)*1.2;el.scrollLeft=scrollLeft-walk;});
  }
  var POSTS_CACHE_KEY='lab_posts_cache';
  var NEWS_CACHE_KEY='lab_news_cache';
  var NEWS_PENDING_KEY='lab_news_pending';

  function normalizeTextValue(v){
    return String(v==null?'':v).trim();
  }
  function normalizeSectionValue(v){
    v=normalizeTextValue(v).toLowerCase();
    if(v==='boards') return 'board';
    return v;
  }
  function normalizeCategoryValue(v){
    return normalizeTextValue(v);
  }
  function normalizePostRecord(post){
    post=post||{};
    return {
      id:post.id,
      title:normalizeTextValue(post.title),
      body:normalizeTextValue(post.body),
      image_url:post.image_url||null,
      image_path:post.image_path||null,
      created_at:post.created_at||null,
      author_name:normalizeTextValue(post.author_name),
      user_id:post.user_id||null,
      section:normalizeSectionValue(post.section),
      category:normalizeCategoryValue(post.category)
    };
  }
  function postIdentity(post){
    post=normalizePostRecord(post);
    return post.id?('id:'+post.id):['title:'+post.title,'body:'+post.body,'section:'+post.section,'category:'+post.category,'created:'+post.created_at].join('|');
  }
  function mergePosts(){
    var map={};
    Array.prototype.slice.call(arguments).forEach(function(list){
      (list||[]).forEach(function(post){
        var normalized=normalizePostRecord(post);
        if(!normalized.title&&!normalized.body&&!normalized.section&&!normalized.id)return;
        map[postIdentity(normalized)]=normalized;
      });
    });
    return Object.keys(map).map(function(key){ return map[key]; }).sort(function(a,b){
      return new Date(b.created_at||0).getTime()-new Date(a.created_at||0).getTime();
    });
  }
  function cachePosts(posts){
    try{localStorage.setItem(POSTS_CACHE_KEY, JSON.stringify(mergePosts(posts||[])));}catch(e){}
  }
  function getCachedPosts(){
    try{return mergePosts(JSON.parse(localStorage.getItem(POSTS_CACHE_KEY)||'[]'));}catch(e){return [];}
  }
  function cacheNewsPosts(posts){
    try{localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify(mergePosts(posts||[]).filter(function(p){return normalizeSectionValue(p.section)==='news';})));}catch(e){}
  }
  function getCachedNewsPosts(){
    try{return mergePosts(JSON.parse(localStorage.getItem(NEWS_CACHE_KEY)||'[]'));}catch(e){return [];}
  }
  function savePendingNews(posts){
    try{localStorage.setItem(NEWS_PENDING_KEY, JSON.stringify(mergePosts(posts||[]).filter(function(p){return normalizeSectionValue(p.section)==='news';})));}catch(e){}
  }
  function getPendingNews(){
    try{return mergePosts(JSON.parse(localStorage.getItem(NEWS_PENDING_KEY)||'[]'));}catch(e){return [];}
  }
  function clearPendingNewsMatching(posts){
    var pending=getPendingNews();
    if(!pending.length)return;
    var resolved={};
    (posts||[]).forEach(function(post){ resolved[postIdentity(post)]=true; });
    savePendingNews(pending.filter(function(post){ return !resolved[postIdentity(post)]; }));
  }
  function cachePublicPosts(posts){
    var normalized=mergePosts(posts||[]);
    cachePosts(normalized);
    cacheNewsPosts(normalized);
    clearPendingNewsMatching(normalized.filter(function(p){return normalizeSectionValue(p.section)==='news';}));
  }
  function rememberNewsPost(post){
    var normalized=normalizePostRecord(post);
    if(normalizeSectionValue(normalized.section)!=='news')normalized.section='news';
    savePendingNews(mergePosts(getPendingNews(), [normalized]));
    cachePublicPosts(mergePosts(getCachedPosts(), [normalized]));
  }
  async function fetchPostsFlexible(){
    var baseSelect='id,title,body,image_url,image_path,created_at,author_name,user_id,section,category';
    var result={ all:[], latest:[], news:[], source:'cache', message:'' };
    if(!sb){
      var cachedOnly=mergePosts(getCachedPosts(), getCachedNewsPosts(), getPendingNews());
      result.all=cachedOnly;
      result.latest=cachedOnly.filter(function(p){return normalizeSectionValue(p.section)!=='news';}).slice(0,3);
      result.news=cachedOnly.filter(function(p){return normalizeSectionValue(p.section)==='news';}).slice(0,5);
      result.message='';
      return result;
    }
    var errors=[];
    try{
      var r=await sb.from('posts').select(baseSelect).order('created_at',{ascending:false});
      if(r.error) throw r.error;
      var all=mergePosts(r.data||[], getPendingNews());
      cachePublicPosts(all);
      result.all=all;
      result.latest=all.filter(function(p){return normalizeSectionValue(p.section)!=='news';}).slice(0,3);
      result.news=all.filter(function(p){return normalizeSectionValue(p.section)==='news';}).slice(0,5);
      result.source='remote-all';
      return result;
    }catch(err){ errors.push(err&&err.message?err.message:String(err)); }
    var cached=getCachedPosts();
    var newsMerged=mergePosts(getCachedNewsPosts(), getPendingNews());
    try{
      var newsRes=await sb.from('posts').select(baseSelect).eq('section','news').order('created_at',{ascending:false}).limit(5);
      if(newsRes.error) throw newsRes.error;
      var latestRes=await sb.from('posts').select(baseSelect).neq('section','news').order('created_at',{ascending:false}).limit(3);
      if(latestRes.error) throw latestRes.error;
      var merged=mergePosts(latestRes.data||[], newsRes.data||[], cached, getPendingNews());
      cachePublicPosts(merged);
      result.all=merged;
      result.latest=mergePosts(latestRes.data||[]).slice(0,3);
      result.news=mergePosts(newsRes.data||[], newsMerged).slice(0,5);
      result.source='remote-split';
      result.message='일부 조회 경로를 우회해 게시물을 표시했습니다.';
      return result;
    }catch(err2){ errors.push(err2&&err2.message?err2.message:String(err2)); }
    var fallback=mergePosts(cached, newsMerged);
    result.all=fallback;
    result.latest=fallback.filter(function(p){return normalizeSectionValue(p.section)!=='news';}).slice(0,3);
    result.news=fallback.filter(function(p){return normalizeSectionValue(p.section)==='news';}).slice(0,5);
    result.source='cache';
    result.message=result.news.length||result.latest.length?'온라인 게시물을 불러오지 못해 저장된 게시물을 표시합니다.':'온라인 게시물을 불러오지 못했습니다. '+errors.filter(Boolean).join(' / ');
    return result;
  }

  async function renderPublicPosts(){
    var c=byId('public-post-list'),n=byId('news-post-list'),st=byId('public-post-status');if(!c&&!n)return;
    var fetched=await fetchPostsFlexible();
    var latest=fetched.latest||[];
    var newsPosts=fetched.news||[];
    if(st){
      if(fetched.message)setStatus(st,fetched.message,fetched.source==='cache'?'error':'success');
      else setStatus(st,'');
    }
    if(c){
      renderLatestPosts(c,latest,'아직 업로드된 글이 없습니다.');
      c.classList.remove('latest-home-grid','latest-strip','post-strip','gallery-grid');
      c.classList.add('latest-carousel');
      enableHorizontalDrag(c);
    }
    applyTranslations(document.body||document);
    if(n){
      if(!newsPosts.length){n.innerHTML='<div class="news-item empty">등록된 뉴스가 없습니다.</div>';}
      else{
        n.innerHTML=newsPosts.map(function(post){
          var href=normalizeTextValue(post.body);
          var safeHref=/^https?:\/\//i.test(href)?href:'#';
          return '<a class="news-item" href="'+safeHref+'" target="_blank" rel="noopener noreferrer"><span class="news-title">'+escapeHtml(post.title||'Untitled')+'</span><span class="news-date">'+fmtDate(post.created_at)+'</span></a>';
        }).join('');
      }
    }
  }
  async function renderSectionPosts(){
    var containers=qsa('[data-section]');if(!containers.length)return;
    var st=byId('section-post-status');
    var cachedAll=getCachedPosts();
    var fallbackUsed=false;
    for(var i=0;i<containers.length;i++){
      var c=containers[i],sec=c.dataset.section,cat=c.dataset.category||'';
      var rows=[];
      if(sb){
        try{
          var q=sb.from('posts').select('id,title,body,image_url,image_path,created_at,author_name,section,category').eq('section',sec).order('created_at',{ascending:false});
          if(cat)q=q.eq('category',cat);
          var r=await q;
          if(r.error) throw r.error;
          rows=r.data||[];
        }catch(err){
          rows=cachedAll.filter(function(p){return normalizeSectionValue(p.section)===normalizeSectionValue(sec) && (!cat || normalizeCategoryValue(p.category)===normalizeCategoryValue(cat));});
          fallbackUsed=true;
          setStatus(st, rows.length ? '온라인 게시물을 불러오지 못해 저장된 게시물을 표시합니다.' : (err.message||'Failed to fetch'),'error');
        }
      }else{
        rows=cachedAll.filter(function(p){return normalizeSectionValue(p.section)===normalizeSectionValue(sec) && (!cat || normalizeCategoryValue(p.category)===normalizeCategoryValue(cat));});
        fallbackUsed=rows.length>0;
      }
      rows=mergePosts(rows);
      renderPosts(c,rows,cat?cat+' 글이 없습니다.':(normalizeSectionValue(sec)==='gallery'?tr('갤러리'):tr('게시판'))+' 글이 없습니다.');
      if(normalizeSectionValue(sec)==='gallery'){
        c.classList.remove('post-strip');
        c.classList.add('gallery-grid');
      }
    }
    if(!fallbackUsed) setStatus(st,'');
  }

  async function handleLogin(){
    var form=byId('login-form'),st=byId('login-status');if(!form)return;
    form.addEventListener('submit',async function(e){
      e.preventDefault();
      if(!hasConfig){setStatus(st,'config.js에 Supabase 정보를 넣어야 합니다.','error');return;}
      var email=byId('login-email').value.trim(),pw=byId('login-password').value;
      if(!email||!pw){setStatus(st,'이메일과 비밀번호를 입력하세요.','error');return;}
      setStatus(st,'로그인 중...');
      var r=await signIn(email,pw);
      if(r.error){
        var msg=r.error.message||'로그인 실패';
        if(msg.includes('Invalid login'))msg='이메일 또는 비밀번호가 올바르지 않습니다.';
        if(msg.includes('Email not confirmed'))msg='이메일 인증이 필요합니다. Supabase에서 이메일 인증 설정을 확인하세요.';
        setStatus(st,msg,'error');return;
      }
      window.location.href='dashboard.html';
    });
  }

  async function updateAuthUI(){
    var links=qsa('.auth-link');if(!links.length)return;
    var session=await getSession();
    if(session){
      links.forEach(function(link){
        link.textContent='Logout';
        link.setAttribute('href','#');
        link.onclick=async function(e){e.preventDefault();await signOut();window.location.href='index.html';};
      });
      injectAdminNav();
    }else{
      links.forEach(function(link){
        link.textContent='Login';
        link.setAttribute('href','login.html');
        link.onclick=null;
      });
      var ex=byId('admin-nav-item');if(ex)ex.remove();
    }
  }
  function injectAdminNav(){
    if(byId('admin-nav-item'))return;
    var nav=byId('main-nav');if(!nav)return;
    var item=document.createElement('div');
    item.className='nav-item has-submenu';item.id='admin-nav-item';
    item.innerHTML='<a href="dashboard.html" style="background:#1686d920;color:#0e5fa8">관리</a><div class="submenu"><a href="dashboard.html">게시물 업로드</a><a href="dashboard.html?tab=members">멤버 관리</a><a href="dashboard.html?tab=backgrounds">배경 이미지</a></div>';
    var authLink=nav.querySelector('.auth-link');
    if(authLink)nav.insertBefore(item,authLink);else nav.appendChild(item);
    item.querySelector('a').addEventListener('click',function(e){if(window.innerWidth<=920){e.preventDefault();item.classList.toggle('open');}});
  }

  async function applyBg(){
    var key=document.body&&document.body.dataset&&document.body.dataset.bgKey;
    var target=document.querySelector('[data-banner-target]');
    if(!key||!target)return;
    try{
      var cached=localStorage.getItem('bg_cache_'+key);
      if(cached) target.style.backgroundImage='url("'+cached+'")';
    }catch(_e){}
    if(!sb)return;
    try{
      var r=await sb.from('site_backgrounds').select('image_url').eq('page_key',key).maybeSingle();
      if(!r.error&&r.data&&r.data.image_url){
        target.style.backgroundImage='url("'+r.data.image_url+'")';
        try{localStorage.setItem('bg_cache_'+key,r.data.image_url);}catch(_e){}
      }
    }catch(e){}
  }

  function initDashboardTabs(){
    var tabs=qsa('.dash-tab'),panels=qsa('.dash-panel');if(!tabs.length)return;
    var loaded={};
    function switchTab(name){
      tabs.forEach(function(t){t.classList.toggle('active',t.dataset.tab===name);});
      panels.forEach(function(p){p.classList.toggle('active',p.dataset.panel===name);});
      if(!loaded[name]){
        loaded[name]=true;
        if(name==='members')renderInlineMembers();
      }
    }
    tabs.forEach(function(t){t.addEventListener('click',function(){switchTab(t.dataset.tab);});});
    var urlTab=new URLSearchParams(window.location.search).get('tab');
    if(urlTab && qsa('.dash-tab[data-tab="'+urlTab+'"]').length) switchTab(urlTab);
  }

  async function handleDashboard(){
    var wrapper=byId('dashboard-root');if(!wrapper)return;
    var authSt=byId('dashboard-status'),bgSt=byId('background-status');
    if(!sb){setStatus(authSt,'config.js에 Supabase 정보를 넣어야 합니다.','error');return;}
    var session=await getSession();
    if(!session){window.location.href='login.html';return;}
    var user=session.user||session;
    var secSel=byId('post-section'),catSel=byId('post-category'),form=byId('upload-form'),newsForm=byId('news-upload-form'),list=byId('dashboard-post-list'),fileInput=byId('post-image');
    var editId=byId('post-edit-id'), submitBtn=byId('post-submit-btn'), cancelBtn=byId('post-cancel-edit'), editHelp=byId('post-edit-help');
    var currentEditingPost=null;
    if(fileInput) fileInput.setAttribute('accept','image/*,video/*,.heic,.heif');
    function refillCat(){
      if(!secSel||!catSel)return;
      var cur=catSel.value,opts=getCategoryOptions(secSel.value);
      catSel.innerHTML=opts.map(function(v){return'<option value="'+v+'">'+v+'</option>';}).join('');
      if(opts.indexOf(cur)!==-1)catSel.value=cur;
    }
    function resetPostForm(){
      if(form)form.reset();
      if(editId)editId.value='';
      currentEditingPost=null;
      if(editHelp)editHelp.style.display='none';
      if(cancelBtn)cancelBtn.style.display='none';
      if(submitBtn)submitBtn.textContent='업로드';
      refillCat();
    }
    function enterEditMode(post){
      currentEditingPost=post||null;
      if(editId)editId.value=post.id||'';
      if(secSel)secSel.value=post.section||'board';
      refillCat();
      if(catSel)catSel.value=post.category||catSel.value;
      byId('post-title').value=post.title||'';
      var parsed=parseStyledBody(post.body||''); byId('post-body').value=parsed.body||post.body||'';
      if(fileInput)fileInput.value='';
      if(editHelp)editHelp.style.display='block';
      if(cancelBtn)cancelBtn.style.display='inline-flex';
      if(submitBtn)submitBtn.textContent='수정 저장';
      window.scrollTo({top:0,behavior:'smooth'});
    }
    if(secSel)secSel.addEventListener('change',refillCat);
    if(cancelBtn)cancelBtn.addEventListener('click',function(){resetPostForm();setStatus(authSt,'수정 모드를 취소했습니다.','success');});
    refillCat();
    async function loadPosts(){
      var r=await sb.from('posts').select('id,title,body,image_url,image_path,created_at,author_name,user_id,section,category').order('created_at',{ascending:false});
      if(r.error){setStatus(authSt,r.error.message,'error');return;}
      var uid=user.id||user.sub;
      var posts=r.data||[];
      posts=mergePosts(posts);
      cachePublicPosts(posts);
      list.innerHTML=posts.length?posts.map(function(p){return renderPostCard(p,true,String(p.user_id)===String(uid));}).join(''):'<article class="panel post-card"><p>아직 업로드된 글이 없습니다.</p></article>'; 
      qsa('[data-delete]',list).forEach(function(btn){
        btn.addEventListener('click',async function(){
          if(!confirm('삭제할까요?'))return;
          var del=await sb.from('posts').delete().eq('id',btn.dataset.delete).eq('user_id',uid);
          if(del.error){setStatus(authSt,del.error.message,'error');return;}
          if(editId&&editId.value===btn.dataset.delete)resetPostForm();
          setStatus(authSt,'게시물을 삭제했습니다.','success');
          await loadPosts();
        });
      });
      qsa('[data-edit]',list).forEach(function(btn){
        btn.addEventListener('click',function(){
          var post=posts.find(function(p){return String(p.id)===String(btn.dataset.edit);});
          if(post)enterEditMode(post);
        });
      });
    }
    if(newsForm)newsForm.addEventListener('submit',async function(e){
      e.preventDefault();
      var title=normalizeTextValue(byId('news-title').value);
      var link=normalizeTextValue(byId('news-link').value);
      if(!title){setStatus(authSt,'뉴스 제목을 입력하세요.','error');return;}
      if(!/^https?:\/\//i.test(link)){setStatus(authSt,'뉴스 링크를 입력하세요.','error');return;}
      var payload={
        title:title,
        body:link,
        author_name:(localName(user.email)||user.email||'admin'),
        user_id:user.id||user.sub,
        section:'news',
        category:'News'
      };
      try{
        setStatus(authSt,'뉴스 업로드 중...');
        var created=null;
        var res=await sb.from('posts').insert([payload]).select('id,title,body,image_url,image_path,created_at,author_name,user_id,section,category').single();
        if(res.error){
          var retry=await sb.from('posts').insert([payload]);
          if(retry.error) throw retry.error;
          var lookup=await sb.from('posts').select('id,title,body,image_url,image_path,created_at,author_name,user_id,section,category').eq('user_id',payload.user_id).eq('section','news').eq('title',payload.title).order('created_at',{ascending:false}).limit(1);
          if(!lookup.error&&lookup.data&&lookup.data.length) created=lookup.data[0];
          else created=Object.assign({created_at:new Date().toISOString()}, payload);
        }else{
          created=res.data||res;
        }
        created=normalizePostRecord(created||payload);
        created.section='news';
        rememberNewsPost(created);
        newsForm.reset();
        setStatus(authSt,'뉴스를 업로드했습니다.','success');
        await loadPosts();
        await renderPublicPosts();
      }catch(err){
        setStatus(authSt,(err&&err.message)||String(err),'error');
      }
    });
    await loadPosts();
    if(form)form.addEventListener('submit',async function(e){
      e.preventDefault();
      var title=byId('post-title').value.trim(),body=byId('post-body').value.trim(),sec=byId('post-section').value,cat=byId('post-category').value,file=fileInput&&fileInput.files[0],currentEditId=editId&&editId.value; var styleMeta={isNew:byId('post-is-new')?byId('post-is-new').value:'no',imageAlign:byId('post-image-align')?byId('post-image-align').value:'right',titleSize:byId('post-title-size')?byId('post-title-size').value:'normal',bodySize:byId('post-body-size')?byId('post-body-size').value:'normal',titleColor:byId('post-title-color')?byId('post-title-color').value:'#122033'}; body=makeStyledBody(body,styleMeta);
      if(!title||!body){setStatus(authSt,'제목과 내용을 입력하세요.','error');return;}
      setStatus(authSt,currentEditId?'수정 중...':'업로드 중...');
      try{
        var uid=user.id||user.sub;
        var payload={author_name:(currentEditingPost&&currentEditingPost.author_name)||(localName(user.email)||user.email||'admin'),title:title,body:body,section:sec,category:cat};
        if(currentEditingPost&&currentEditingPost.image_url){payload.image_url=currentEditingPost.image_url;}
        if(currentEditingPost&&currentEditingPost.image_path){payload.image_path=currentEditingPost.image_path;}
        if(file){var ext=(file.name.split('.').pop()||'bin').toLowerCase();var path='posts/'+Date.now()+'-'+Math.random().toString(36).slice(2)+'.'+ext;payload.image_url=await uploadFile(path,file);payload.image_path=path;}
        var res;
        if(currentEditId){res=await sb.from('posts').update(payload).eq('id',currentEditId);}else{payload.user_id=uid;res=await sb.from('posts').insert(payload);}
        if(res.error)throw res.error;
        resetPostForm();
        setStatus(authSt,currentEditId?'게시물을 수정했습니다.':'업로드 완료!','success');
        await loadPosts();
      }catch(err){setStatus(authSt,err.message||String(err),'error');}
    });
    var bgMgr=byId('background-manager');
    if(bgMgr){
      try{
        var res=await Promise.all([getStorageImages(),loadBgMap()]);
        var images=res[0],bgMap=res[1];
        bgMgr.innerHTML=BG_KEYS.map(function(item){
          var cur=bgMap[item.key]?bgMap[item.key].image_path:'';
          var opts=['<option value="">기본 배경 유지</option>'].concat(images.map(function(img){return'<option value="'+escapeHtml(img.path)+'"'+(img.path===cur?' selected':'')+'>'+escapeHtml(img.name)+'</option>';}));
          return'<div class="background-row panel"><label for="bg-'+item.key+'">'+item.label+'</label><select class="input background-select" id="bg-'+item.key+'" data-bg-key="'+item.key+'">'+opts.join('')+'</select></div>';
        }).join('');
        qsa('.background-select',bgMgr).forEach(function(sel){sel.addEventListener('change',async function(){var key=sel.dataset.bgKey,path=sel.value;try{var uid=user.id||user.sub;if(!path){await sb.from('site_backgrounds').delete().eq('page_key',key);try{localStorage.removeItem('bg_cache_'+key);}catch(_e){}} else {var img=images.find(function(i){return i.path===path;});await sb.from('site_backgrounds').upsert({page_key:key,image_path:path,image_url:img?img.publicUrl:'',updated_by:uid},{onConflict:'page_key'});try{if(img&&img.publicUrl)localStorage.setItem('bg_cache_'+key,img.publicUrl);}catch(_e){}}setStatus(bgSt,'저장되었습니다.','success');}catch(err){setStatus(bgSt,err.message,'error');}});});
      }catch(err){setStatus(bgSt,err.message,'error');}
    }
  }

  var MEMBER_LAB='경북대학교 숙주 바이러스 면역동력학 연구실';
  var ROLE_DEFS={
    member:[
      {value:'ms_course',ko:'석사과정생',en:'MS course'},
      {value:'phd_course',ko:'박사과정생',en:'PhD course'},
      {value:'integrated_course',ko:'석박통합과정생',en:'Integrated MS-PhD course'},
      {value:'ura',ko:'학부연구생',en:'Undergraduate Researcher'},
      {value:'postdoc',ko:'박사후과정생',en:'Postdoctoral Researcher'}
    ],
    alumni:[
      {value:'ms',ko:'석사',en:'MS'},
      {value:'phd',ko:'박사',en:'PhD'},
      {value:'ura',ko:'학부연구생',en:'Undergraduate Researcher'}
    ]
  };
  function normalizeRoleCode(role,kind){
    var raw=String(role||'').trim();
    var lower=raw.toLowerCase();
    var map={
      'ms_course':'ms_course','석사과정생':'ms_course','ms course':'ms_course','석사':'ms',
      'phd_course':'phd_course','박사과정생':'phd_course','phd course':'phd_course','박사':'phd',
      'integrated_course':'integrated_course','석박통합과정생':'integrated_course','integrated ms-phd course':'integrated_course','graduate':'integrated_course',
      'ura':'ura','학부연구생':'ura','학부연구원':'ura','undergraduate researcher':'ura','undergraduated researcher':'ura',
      'postdoc':'postdoc','박사후과정생':'postdoc','post doc':'postdoc','postdoctoral researcher':'postdoc'
    };
    var code=map[raw]||map[lower]||raw;
    if(kind==='alumni'){
      if(code==='ms_course') code='ms';
      if(code==='phd_course') code='phd';
      if(code==='integrated_course') code='ms';
      if(code==='postdoc') code='phd';
      if(['ms','phd','ura'].indexOf(code)===-1) code='ms';
    } else {
      if(code==='ms') code='ms_course';
      if(code==='phd') code='phd_course';
    }
    return code;
  }
  function roleOptions(kind){ return kind==='alumni'?ROLE_DEFS.alumni:ROLE_DEFS.member; }
  function inferMemberKind(row){
    row=row||{};
    var type=String(row.member_type||'').trim().toLowerCase();
    if(type==='member' || type==='alumni') return type;
    var rawRole=String(row.role||'').trim();
    var alumniRoleMap={
      'ms':1,'석사':1,'MS':1,
      'phd':1,'박사':1,'PhD':1,
      'ura':1,'학부연구생':1,'학부연구원':1,'URA':1,'Undergraduate Researcher':1,'Undergraduate researcher':1,'Undergraduated researcher':1
    };
    var memberRoleMap={
      'ms_course':1,'석사과정생':1,'MS course':1,
      'phd_course':1,'박사과정생':1,'PhD course':1,
      'integrated_course':1,'석박통합과정생':1,'Integrated MS-PhD course':1,
      'postdoc':1,'박사후과정생':1,'Postdoctoral Researcher':1,'Postdoctoral researcher':1,'Post Doc':1
    };
    if(memberRoleMap[rawRole]) return 'member';
    if(alumniRoleMap[rawRole]){
      if(String(row.graduation_year||'').trim()) return 'alumni';
      if(String(row.current_position||'').trim() && String(row.current_position||'').trim()!==MEMBER_LAB) return 'alumni';
      if(rawRole==='ura' || rawRole==='학부연구생' || rawRole==='URA' || rawRole==='Undergraduate Researcher' || rawRole==='Undergraduate researcher') return 'member';
      return 'alumni';
    }
    if(String(row.graduation_year||'').trim()) return 'alumni';
    return 'member';
  }
  function roleLabel(role,kind,lang){
    var finalKind=kind||'member';
    var code=normalizeRoleCode(role,finalKind);
    var defs=roleOptions(finalKind);
    for(var i=0;i<defs.length;i++){ if(defs[i].value===code) return lang==='en'?defs[i].en:defs[i].ko; }
    return role||'';
  }

  function renderInlineMembers(){
    var root=byId('inline-members-root');if(!root)return;
    if(!sb){root.innerHTML='<p style="color:var(--muted)">Supabase 연결이 필요합니다.</p>';return;}
    root.innerHTML='<p style="color:var(--muted)">불러오는 중...</p>';
    var CURRENT_YEAR=(new Date()).getFullYear();
    var YEAR_OPTIONS=[]; for(var y=CURRENT_YEAR+1;y>=2000;y--){YEAR_OPTIONS.push(String(y));}
    async function uploadPhoto(file){var ext=(file.name.split('.').pop()||'jpg').toLowerCase();var path='members/'+Date.now()+'-'+Math.random().toString(36).slice(2)+'.'+ext;return await uploadFile(path,file);}
    function optionHtml(items,selected,placeholder){var html=placeholder?'<option value="">'+placeholder+'</option>':'';return html+items.map(function(v){return '<option value="'+escapeHtml(v.value)+'"'+(String(selected||'')===String(v.value)?' selected':'')+'>'+escapeHtml(v.ko)+'</option>';}).join('');}
    function cardHtml(m,forcedType){m=m||{};var kind=forcedType||inferMemberKind(m);var isAlumni=kind==='alumni';var isNew=!m.id;var normalizedRole=normalizeRoleCode(m.role,kind);return '<div class="admin-member-card panel compact-admin-card" data-id="'+(m.id||'')+'" data-member-kind="'+kind+'"><div class="admin-member-top"><div class="admin-member-photo-col"><div class="admin-photo-preview admin-photo-preview-sm">'+(m.photo_url?'<img src="'+escapeHtml(m.photo_url)+'" style="width:100%;height:100%;object-fit:cover" alt="">':(m.name?escapeHtml(m.name[0]):'?'))+'</div><input type="file" accept="image/*" class="file-input admin-photo-input admin-photo-input-sm"></div><div class="admin-member-fields compact-admin-grid"><div class="admin-field-span"><label class="admin-label">이름 *</label><input type="text" class="input admin-name" value="'+escapeHtml(m.name||'')+'" placeholder="홍길동"></div><div><label class="admin-label">구분</label><input type="text" class="input" value="'+(isAlumni?'Alumni':'Member')+'" readonly></div><div><label class="admin-label">역할</label><select class="input admin-role">'+optionHtml(roleOptions(kind),normalizedRole||'', '미선택')+'</select></div><div><label class="admin-label">'+(isAlumni?'현재 소속':'소속')+'</label><input type="text" class="input admin-position" value="'+escapeHtml(isAlumni?(m.current_position||''):MEMBER_LAB)+'" '+(isAlumni?'':'readonly')+'></div>'+(isAlumni?'<div><label class="admin-label">졸업 연도</label><select class="input admin-grad-year">'+optionHtml(YEAR_OPTIONS.map(function(y){return {value:y,ko:y};}),m.graduation_year,'미선택')+'</select></div>':'<div><label class="admin-label">순서</label><input type="number" class="input admin-order" value="'+(m.display_order||0)+'"></div>')+(isAlumni?'<div><label class="admin-label">순서</label><input type="number" class="input admin-order" value="'+(m.display_order||0)+'"></div>':'')+'<div class="admin-field-span"><label class="admin-label">소개</label><textarea class="textarea admin-bio compact-admin-bio">'+escapeHtml(m.bio||'')+'</textarea></div></div></div><div class="admin-card-actions"><button class="button primary admin-save-btn" type="button">'+(isNew?'추가':'저장')+'</button>'+(isNew?'':'<button class="button admin-del-btn" style="border-color:#f0c4be;color:#a44236" type="button">삭제</button>')+'<span class="admin-card-status" style="font-size:.88rem;color:var(--muted)"></span></div></div>';}
    async function renderMgmt(){var r=await sb.from('lab_members').select('*').order('display_order');if(r.error){root.innerHTML='<div class="panel card"><p style="color:#a44236">오류: '+escapeHtml(r.error.message)+'</p><p style="color:var(--muted);margin-top:8px">lab_members 테이블을 확인하세요.</p></div>';return;}var all=r.data||[],members=all.filter(function(m){return inferMemberKind(m)!=='alumni';}),alumni=all.filter(function(m){return inferMemberKind(m)==='alumni';});root.innerHTML='<div class="section-header compact-admin-head" style="margin-bottom:10px"><h2>Members</h2></div><div id="imgt-member-list" class="admin-card-grid">'+members.map(function(m){return cardHtml(m,'member');}).join('')+'</div><div id="imgt-new-member" class="admin-card-grid" style="margin-top:10px"></div><div class="admin-add-row"><button class="button primary" id="imgt-add-member">+ 멤버 추가</button></div><hr class="soft" style="margin:20px 0"><div class="section-header compact-admin-head" style="margin-bottom:10px"><h2>Alumni</h2></div><div id="imgt-alumni-list" class="admin-card-grid">'+alumni.map(function(m){return cardHtml(m,'alumni');}).join('')+'</div><div id="imgt-new-alumni" class="admin-card-grid" style="margin-top:10px"></div><div class="admin-add-row"><button class="button primary" id="imgt-add-alumni">+ 졸업생 추가</button></div>';bind(root);byId('imgt-add-member')&&byId('imgt-add-member').addEventListener('click',function(){var s=byId('imgt-new-member');s.insertAdjacentHTML('beforeend',cardHtml({member_type:'member',role:'',current_position:MEMBER_LAB},'member'));var card=s.lastElementChild?s.lastElementChild:s;bind(card);card&&card.scrollIntoView({behavior:'smooth',block:'end'});});byId('imgt-add-alumni')&&byId('imgt-add-alumni').addEventListener('click',function(){var s=byId('imgt-new-alumni');s.insertAdjacentHTML('beforeend',cardHtml({member_type:'alumni',role:'ms'},'alumni'));var card=s.lastElementChild?s.lastElementChild:s;bind(card);card&&card.scrollIntoView({behavior:'smooth',block:'end'});});}
    function bind(scope){qsa('.admin-member-card',scope).forEach(function(card){var st=card.querySelector('.admin-card-status');card.querySelector('.admin-save-btn')&&card.querySelector('.admin-save-btn').addEventListener('click',async function(){var id=card.dataset.id,name=card.querySelector('.admin-name').value.trim(),kind=card.dataset.memberKind==='alumni'?'alumni':'member';if(!name){st.textContent='이름을 입력하세요.';st.style.color='#a44236';return;}st.textContent='저장 중...';st.style.color='var(--muted)';var photo_url=null,pf=card.querySelector('.admin-photo-input').files[0];if(pf){try{photo_url=await uploadPhoto(pf);}catch(e){st.textContent=e.message;st.style.color='#a44236';return;}}var payload={name:name,member_type:kind,role:normalizeRoleCode((card.querySelector('.admin-role').value||null),kind),current_position:kind==='alumni'?(card.querySelector('.admin-position').value.trim()||null):MEMBER_LAB,graduation_year:kind==='alumni'?((card.querySelector('.admin-grad-year')&&card.querySelector('.admin-grad-year').value)||null):null,bio:card.querySelector('.admin-bio').value.trim()||null,display_order:parseInt(card.querySelector('.admin-order').value)||0};if(photo_url)payload.photo_url=photo_url;var res=id?await sb.from('lab_members').update(payload).eq('id',id):await sb.from('lab_members').insert(payload);if(res.error){if(String(res.error.message||'').toLowerCase().indexOf('graduation_year')!==-1){st.textContent='graduation_year 컬럼이 필요합니다. zip 안의 SQL을 실행하세요.';st.style.color='#a44236';}else{st.textContent=res.error.message;st.style.color='#a44236';}}else{st.textContent='저장됨 ✓';st.style.color='#2f7a3f';await renderMgmt();}});card.querySelector('.admin-del-btn')&&card.querySelector('.admin-del-btn').addEventListener('click',async function(){if(!confirm('삭제할까요?'))return;await sb.from('lab_members').delete().eq('id',card.dataset.id);await renderMgmt();});var pi=card.querySelector('.admin-photo-input');if(pi)pi.addEventListener('change',function(e){var file=e.target.files[0];if(!file)return;var reader=new FileReader();reader.onload=function(ev){card.querySelector('.admin-photo-preview').innerHTML='<img src="'+ev.target.result+'" style="width:100%;height:100%;object-fit:cover" alt="">';};reader.readAsDataURL(file);});});}
    renderMgmt();
  }

  function normalizeMemberRole(role,kind){
    return roleLabel(role,kind||'member',currentLang==='en'?'en':'ko');
  }
  function memberCardHtml(m){
    var photoHtml=m.photo_url?'<div class="member-photo-wrap"><img src="'+escapeHtml(m.photo_url)+'" class="member-photo-img" alt="'+escapeHtml(m.name)+'"></div>':'<div class="member-photo-wrap member-photo-initial">'+escapeHtml((m.name||'?')[0])+'</div>';
    var isAlumni=inferMemberKind(m)==='alumni';
    var roleLabelText=normalizeMemberRole(m.role,isAlumni?'alumni':'member');
    var title=escapeHtml(m.name||'')+(roleLabelText?' <span class="member-role-inline">('+escapeHtml(roleLabelText)+')</span>':'');
    var yearChip=(isAlumni&&m.graduation_year)?'<p class="member-grad-year">Class of '+escapeHtml(String(m.graduation_year))+'</p>':'';
    var positionHtml=(isAlumni&&m.current_position)?'<p class="member-position">'+escapeHtml(m.current_position)+'</p>':'';
    return '<article class="panel member-card">'+photoHtml+'<div class="member-info"><h3>'+title+'</h3>'+positionHtml+yearChip+(m.bio?'<p class="member-bio">'+escapeHtml(m.bio)+'</p>':'')+'</div></article>';
  }
  function isAlumniRecord(m){
    return inferMemberKind(m)==='alumni';
  }
  async function fetchAllMemberRows(){
    try{
      return await sb.from('lab_members').select('*').order('display_order',{ascending:true});
    }catch(e){
      return { data: [], error: e };
    }
  }
  async function renderLabMembers(){
    var grid=byId('lab-member-grid');if(!grid)return;
    if(!sb){grid.innerHTML='<p style="color:var(--muted)">Supabase 연결이 필요합니다.</p>';return;}
    var r=await fetchAllMemberRows();
    if(r.error){grid.innerHTML='<p style="color:#a44236">'+escapeHtml(r.error.message||'멤버 정보를 불러오지 못했습니다.')+'</p>';return;}
    var rows=(r.data||[]).filter(function(m){ return !isAlumniRecord(m); });
    if(!rows.length){grid.innerHTML='<p style="color:var(--muted)">등록된 멤버가 없습니다.</p>';return;}
    grid.innerHTML=rows.map(function(m){
      return memberCardHtml(m);
    }).join('');
  }
  async function renderAlumni(){
    var grid=byId('alumni-grid');if(!grid)return;
    if(!sb){grid.innerHTML='<p style="color:var(--muted)">Supabase 연결이 필요합니다.</p>';return;}
    var r=await fetchAllMemberRows();
    if(r.error){grid.innerHTML='<p style="color:#a44236">'+escapeHtml(r.error.message||'멤버 정보를 불러오지 못했습니다.')+'</p>';return;}
    var rows=(r.data||[]).filter(isAlumniRecord).map(function(m){
      return m;
    });
    if(!rows.length){grid.innerHTML='<p style="color:var(--muted)">등록된 졸업생이 없습니다.</p>';return;}
    grid.innerHTML=rows.map(memberCardHtml).join('');
  }

  async function renderPublicationDB(){
    var list=byId('publication-db-list'); if(!list) return;
    var search=byId('publication-search'), yearSel=byId('publication-year'), roleSel=byId('publication-role'), sortSel=byId('publication-sort'), count=byId('publication-count');
    try{
      var papers=Array.isArray(window.PUBLICATION_DB)?window.PUBLICATION_DB:null;
      if(!papers){
        try{
          var res=await fetch('publication_db.json');
          papers=await res.json();
        }catch(fetchErr){
          papers=Array.isArray(window.PUBLICATION_DB)?window.PUBLICATION_DB:[];
        }
      }
      var years=[];
      var roles=[];
      papers.forEach(function(p){
        if(years.indexOf(String(p.year))===-1) years.push(String(p.year));
        if(roles.indexOf(String(p.author_role))===-1) roles.push(String(p.author_role));
      });
      years.sort(function(a,b){return Number(b)-Number(a);});
      roles.sort();
      if(yearSel) yearSel.innerHTML='<option value="">'+tr('전체 연도')+'</option>'+years.map(function(y){return '<option value="'+escapeHtml(y)+'">'+escapeHtml(y)+'</option>';}).join('');
      if(roleSel) roleSel.innerHTML='<option value="">'+tr('전체 역할')+'</option>'+roles.map(function(v){return '<option value="'+escapeHtml(v)+'">'+escapeHtml(tr(v))+'</option>';}).join('');

      function doiHref(v){
        v=String(v||'').trim();
        if(!v) return '';
        if(/^https?:\/\//i.test(v)){
          return v.replace('https://DOI: ','https://doi.org/').replace('http://DOI: ','http://doi.org/');
        }
        return 'https://doi.org/'+v.replace(/^doi:\s*/i,'');
      }
      function render(){
        var lang=currentLang==='en'?'en':'ko';
        var term=(search&&search.value||'').trim().toLowerCase();
        var year=(yearSel&&yearSel.value)||'';
        var role=(roleSel&&roleSel.value)||'';
        var sort=(sortSel&&sortSel.value)||'desc';
        var filtered=papers.filter(function(p){
          var hay=[p.title,p.journal,p.summary,p.summary_en,p.author_role,p.author_role_en,String(p.year)].join(' ').toLowerCase();
          return (!term||hay.indexOf(term)!==-1) && (!year||String(p.year)===year) && (!role||p.author_role===role);
        }).sort(function(a,b){
          return sort==='asc' ? a.year-b.year || a.no-b.no : b.year-a.year || a.no-b.no;
        });
        if(count) count.textContent=(lang==='en'?'Total ':'총 ')+filtered.length+(lang==='en'?' papers':'편');
        list.innerHTML=filtered.length ? filtered.map(function(p){
          var href=doiHref(p.doi);
          var summaryKo=(p.summary||'').trim();
          var summaryEn=(p.summary_en||'').trim();
          var summary=lang==='en' ? (summaryEn || summaryKo) : (summaryKo || summaryEn);
          var roleLabel=lang==='en'?(p.author_role_en||tr(p.author_role)||p.author_role):(p.author_role||p.author_role_en||'');
          return '<article class="panel pub-card"><div class="pub-top"><span class="badge">'+escapeHtml(String(p.year))+'</span><span class="mini-tag">'+escapeHtml(roleLabel)+'</span></div><h3>'+escapeHtml(p.title)+'</h3><div class="pub-meta">'+escapeHtml(p.journal)+'</div><p class="pub-summary" data-ko="'+escapeHtml(summaryKo||summaryEn)+'" data-en="'+escapeHtml(summaryEn||summaryKo)+'">'+escapeHtml(summary)+'</p>'+(href?'<div class="pub-actions"><a class="button" target="_blank" rel="noopener" href="'+escapeHtml(href)+'">'+(lang==='en'?'View DOI / Paper':'DOI / 원문 보기')+'</a></div>':'')+'</article>';
        }).join('') : '<article class="panel post-card"><p>'+(lang==='en'?'No papers match the selected conditions.':'조건에 맞는 논문이 없습니다.')+'</p></article>';
      }
      [search,yearSel,roleSel,sortSel].forEach(function(el){if(el)el.addEventListener('input',render); if(el)el.addEventListener('change',render);});
      window.addEventListener('lab-language-change', render);
      render();
    }catch(e){
      list.innerHTML='<article class="panel post-card"><p>논문 DB를 불러오지 못했습니다.</p></article>';
    }
  }

  document.addEventListener('DOMContentLoaded',async function(){
    initDashboardTabs();
    await handleLogin();
    await updateAuthUI();
    await handleDashboard();
    await renderPublicPosts();
    await renderSectionPosts();
    await renderLabMembers();
    await renderAlumni();
    await renderPublicationDB();
    await applyBg();
    window.addEventListener('lab-language-change', async function(){
      await renderLabMembers();
      await renderAlumni();
    });
  });
  applyTranslations(document.body||document);
})();
