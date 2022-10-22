-- Gerado por Oracle SQL Developer Data Modeler 22.2.0.165.1149
--   em:        2022-10-21 17:47:20 BRT
--   site:      Oracle Database 11g
--   tipo:      Oracle Database 11g



-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE
DROP TABLE T_SFJB_CANDIDATO;
DROP TABLE T_SFJB_PERFIL_CANDIDATO;
DROP TABLE T_SFJB_CURRICULO;
DROP TABLE T_SFJB_EXPERIENCIA_PRO;
DROP TABLE T_SFJB_GABARITO;
DROP TABLE T_SFJB_EMPRESA;
DROP TABLE T_SFJB_PERFIL_EMPRESA;
DROP TABLE T_SFJB_PERFIL_QUESTIONARIO;
DROP TABLE T_SFJB_PROVA;
DROP TABLE T_SFJB_QUESTAO;
DROP TABLE T_SFJB_VAGA;



CREATE TABLE t_sfjb_candidato (
    ide_candidato       NUMBER(6) NOT NULL,
    nom_candidato       VARCHAR2(60) NOT NULL,
    gen_candidato       CHAR(3) NOT NULL,
    eml_candidato       VARCHAR2(60) NOT NULL,
    snh_candidato       VARCHAR2(60) NOT NULL,
    cpf_candidato       VARCHAR2(14) NOT NULL,
    rg_candidato        VARCHAR2(14) NOT NULL,
    dat_nascimento      VARCHAR2(100) NOT NULL,
    tel_candidato       NUMBER(13) NOT NULL,
    nvl_escolaridade    VARCHAR2(100) NOT NULL,
    end_candidato       VARCHAR2(250) NOT NULL,
    est_civil_candidato VARCHAR2(100) NOT NULL
);

ALTER TABLE t_sfjb_candidato ADD CONSTRAINT t_sfjb_candidato_pk PRIMARY KEY ( ide_candidato );

CREATE TABLE t_sfjb_curriculo (
    ide_curriculo                  NUMBER(6) NOT NULL,
    cv_file                        VARCHAR2(220),
    t_sfjb_candidato_ide_candidato NUMBER(6) NOT NULL
);

CREATE UNIQUE INDEX t_sfjb_curriculo__idx ON
    t_sfjb_curriculo (
        t_sfjb_candidato_ide_candidato
    ASC );

ALTER TABLE t_sfjb_curriculo ADD CONSTRAINT t_sfjb_curriculo_pk PRIMARY KEY ( ide_curriculo );

CREATE TABLE t_sfjb_empresa (
    id_empresa   NUMBER(6) NOT NULL,
    cnpj_empresa VARCHAR(70) NOT NULL,
    nom_empresa  VARCHAR(200) NOT NULL,
    end_empresa  VARCHAR2(100) NOT NULL,
    eml_empresa  VARCHAR2(60) NOT NULL,
    snh_empresa  VARCHAR2(60) NOT NULL
);

ALTER TABLE t_sfjb_empresa ADD CONSTRAINT t_sfjb_empresa_pk PRIMARY KEY ( id_empresa );

CREATE TABLE t_sfjb_experiencia_pro (
    ide_exp_form                   NUMBER(6) NOT NULL,
    temp_atuacao                   VARCHAR2(20) NOT NULL,
    curso_cv                       VARCHAR2(200) NOT NULL,
    inst_academica                 VARCHAR2(200) NOT NULL,
    nom_empresa                    VARCHAR2(200),
    cargo_trabalho                 VARCHAR2(200),
    t_sfjb_candidato_ide_candidato NUMBER(6) NOT NULL
);

CREATE UNIQUE INDEX t_sfjb_experiencia_pro__idx ON
    t_sfjb_experiencia_pro (
        t_sfjb_candidato_ide_candidato
    ASC );

ALTER TABLE t_sfjb_experiencia_pro ADD CONSTRAINT t_sfjb_experiencia_pro_pk PRIMARY KEY ( ide_exp_form );

CREATE TABLE t_sfjb_gabarito (
    ide_gabarito               NUMBER(6) NOT NULL,
    resp_qst1                  CHAR(2) NOT NULL,
    resp_qst2                  CHAR(2) NOT NULL,
    resp_qst3                  CHAR(2) NOT NULL,
    resp_qst4                  CHAR(2) NOT NULL,
    resp_qst5                  CHAR(2) NOT NULL,
    nota_final                 NUMBER(3, 2) NOT NULL,
    t_sfjb_questao_ide_questao NUMBER(6) NOT NULL
);

CREATE UNIQUE INDEX t_sfjb_gabarito__idx ON
    t_sfjb_gabarito (
        t_sfjb_questao_ide_questao
    ASC );

ALTER TABLE t_sfjb_gabarito ADD CONSTRAINT t_sfjb_gabarito_pk PRIMARY KEY ( ide_gabarito );

CREATE TABLE t_sfjb_perfil_candidato (
    ide_perfil                     NUMBER(6) NOT NULL,
    bio_candidato                  VARCHAR2(700 BYTE),
    hard_skills                    VARCHAR2(120 BYTE),
    soft_skills                    VARCHAR2(120 BYTE),
    img_perfil                     VARCHAR2(220 BYTE),
    t_sfjb_candidato_ide_candidato NUMBER(6) NOT NULL
);

CREATE UNIQUE INDEX t_sfjb_perfil_candidato__idx ON
    t_sfjb_perfil_candidato (
        t_sfjb_candidato_ide_candidato
    ASC );

ALTER TABLE t_sfjb_perfil_candidato ADD CONSTRAINT t_sfjb_perfil_candidato_pk PRIMARY KEY ( ide_perfil );

CREATE TABLE t_sfjb_perfil_empresa (
    ide_perfil_empresa        NUMBER(6) NOT NULL,
    bio_empresa               VARCHAR2(700),
    img_perfil                VARCHAR2(220),
    qtd_funcionarios          NUMBER(9),
    dat_fundacao              VARCHAR2(100),
    t_sfjb_empresa_id_empresa NUMBER(6) NOT NULL
);

CREATE UNIQUE INDEX t_sfjb_perfil_empresa__idx ON
    t_sfjb_perfil_empresa (
        t_sfjb_empresa_id_empresa
    ASC );

ALTER TABLE t_sfjb_perfil_empresa ADD CONSTRAINT t_sfjb_perfil_empresa_pk PRIMARY KEY ( ide_perfil_empresa );

CREATE TABLE t_sfjb_perfil_questionario (
    ide_perfil_social              NUMBER(6) NOT NULL,
    cla_perfil                     VARCHAR2(30 BYTE) NOT NULL,
    t_sfjb_candidato_ide_candidato NUMBER(6) NOT NULL,
    rsp_questionario               NUMBER(1, 2),
    dat_emissao                    VARCHAR2(200),
    dat_entrega                    VARCHAR2(200),
    per_questionario               VARCHAR2(100)
);

--  ERROR: Index name length exceeds maximum allowed length(30) 
CREATE UNIQUE INDEX t_sfjb_perfil_questionario_idx ON
    t_sfjb_perfil_questionario (
        t_sfjb_candidato_ide_candidato
    ASC );

ALTER TABLE t_sfjb_perfil_questionario ADD CONSTRAINT t_sfjb_perfil_questionario_pk PRIMARY KEY ( ide_perfil_social );

CREATE TABLE t_sfjb_prova (
    ide_prova            NUMBER(6) NOT NULL,
    t_sfjb_vaga_ide_vaga NUMBER(6) NOT NULL
);

CREATE UNIQUE INDEX t_sfjb_prova__idx ON
    t_sfjb_prova (
        t_sfjb_vaga_ide_vaga
    ASC );

ALTER TABLE t_sfjb_prova ADD CONSTRAINT t_sfjb_prova_pk PRIMARY KEY ( ide_prova );

CREATE TABLE t_sfjb_questao (
    ide_questao            NUMBER(6) NOT NULL,
    qst_prova              VARCHAR2(200) NOT NULL,
    alt_a                  VARCHAR2(200) NOT NULL,
    alt_b                  VARCHAR2(200) NOT NULL,
    alt_c                  VARCHAR2(200) NOT NULL,
    alt_d                  VARCHAR2(200) NOT NULL,
    rsp_selecionadas       CHAR(2),
    pnt_questao            NUMBER(3, 2),
    t_sfjb_prova_ide_prova NUMBER(6) NOT NULL
);

ALTER TABLE t_sfjb_questao ADD CONSTRAINT t_sfjb_questao_pk PRIMARY KEY ( ide_questao );

CREATE TABLE t_sfjb_vaga (
    ide_vaga                  NUMBER(6) NOT NULL,
    ttl_vaga                  VARCHAR2(20) NOT NULL,
    tip_vaga                  VARCHAR2(10) NOT NULL,
    ptr_salarial_vaga         NUMBER(7, 2) NOT NULL,
    des_vaga                  VARCHAR2(600) NOT NULL,
    per_vaga                  VARCHAR2(100) NOT NULL,
    t_sfjb_empresa_id_empresa NUMBER(6) NOT NULL
);

ALTER TABLE t_sfjb_vaga ADD CONSTRAINT t_sfjb_vaga_pk PRIMARY KEY ( ide_vaga );

--  ERROR: FK name length exceeds maximum allowed length(30) 
ALTER TABLE t_sfjb_curriculo
    ADD CONSTRAINT t_sfjb_curriculo_t_sfjb_candidato_fk FOREIGN KEY ( t_sfjb_candidato_ide_candidato )
        REFERENCES t_sfjb_candidato ( ide_candidato );

--  ERROR: FK name length exceeds maximum allowed length(30) 
ALTER TABLE t_sfjb_experiencia_pro
    ADD CONSTRAINT t_sfjb_experiencia_pro_t_sfjb_candidato_fk FOREIGN KEY ( t_sfjb_candidato_ide_candidato )
        REFERENCES t_sfjb_candidato ( ide_candidato );

--  ERROR: FK name length exceeds maximum allowed length(30) 
ALTER TABLE t_sfjb_gabarito
    ADD CONSTRAINT t_sfjb_gabarito_t_sfjb_questao_fk FOREIGN KEY ( t_sfjb_questao_ide_questao )
        REFERENCES t_sfjb_questao ( ide_questao );

--  ERROR: FK name length exceeds maximum allowed length(30) 
ALTER TABLE t_sfjb_perfil_candidato
    ADD CONSTRAINT t_sfjb_perfil_candidato_t_sfjb_candidato_fk FOREIGN KEY ( t_sfjb_candidato_ide_candidato )
        REFERENCES t_sfjb_candidato ( ide_candidato );

--  ERROR: FK name length exceeds maximum allowed length(30) 
ALTER TABLE t_sfjb_perfil_empresa
    ADD CONSTRAINT t_sfjb_perfil_empresa_t_sfjb_empresa_fk FOREIGN KEY ( t_sfjb_empresa_id_empresa )
        REFERENCES t_sfjb_empresa ( id_empresa );

--  ERROR: FK name length exceeds maximum allowed length(30) 
ALTER TABLE t_sfjb_perfil_questionario
    ADD CONSTRAINT t_sfjb_perfil_questionario_t_sfjb_candidato_fk FOREIGN KEY ( t_sfjb_candidato_ide_candidato )
        REFERENCES t_sfjb_candidato ( ide_candidato );

ALTER TABLE t_sfjb_prova
    ADD CONSTRAINT t_sfjb_prova_t_sfjb_vaga_fk FOREIGN KEY ( t_sfjb_vaga_ide_vaga )
        REFERENCES t_sfjb_vaga ( ide_vaga );

ALTER TABLE t_sfjb_questao
    ADD CONSTRAINT t_sfjb_questao_t_sfjb_prova_fk FOREIGN KEY ( t_sfjb_prova_ide_prova )
        REFERENCES t_sfjb_prova ( ide_prova );

ALTER TABLE t_sfjb_vaga
    ADD CONSTRAINT t_sfjb_vaga_t_sfjb_empresa_fk FOREIGN KEY ( t_sfjb_empresa_id_empresa )
        REFERENCES t_sfjb_empresa ( id_empresa );



-- Relatório do Resumo do Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                            11
-- CREATE INDEX                             7
-- ALTER TABLE                             20
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   8
-- WARNINGS                                 0
