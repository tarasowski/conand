import React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  CodePane,
  FlexBox,
  Box,
  FullScreen,
  Progress,
  Appear,
  Grid,
  Image,
  Notes,
} from 'spectacle';
import styled, { keyframes } from 'styled-components';
import { 
  Settings, 
  Palette, 
  Wrench, 
  Brain, 
  Network, 
  Bot, 
  TrendingUp,
  Target,
  Mail,
  Bullseye
} from 'lucide-react';

const pulse = keyframes`
  0% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.6; transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;


const slideIn = keyframes`
  0% { transform: translateX(-100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const BackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(132, 204, 22, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(132, 204, 22, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(132, 204, 22, 0.05) 0%, transparent 50%);
  animation: ${pulse} 6s ease-in-out infinite;
  z-index: 0;
`;

const FloatingDot = styled.div`
  position: absolute;
  width: ${props => props.size || 6}px;
  height: ${props => props.size || 6}px;
  background: #84cc16;
  border-radius: 50%;
  opacity: 0.4;
  animation: ${float} ${props => props.duration || 4}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  box-shadow: 0 0 10px rgba(132, 204, 22, 0.5);
`;

const AnimatedTitle = styled.div`
  animation: ${slideIn} 1s ease-out;
`;

const AnimatedSubtitle = styled.div`
  animation: ${fadeIn} 1s ease-out 0.5s both;
`;


const StyledButton = styled.button`
  background: #84cc16;
  color: #000;
  border: none;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(132, 204, 22, 0.3);
  }
`;

const theme = {
  colors: {
    primary: '#000000',
    secondary: '#84cc16', 
    tertiary: '#ffffff',
    quaternary: '#f3f4f6',
    quinary: '#666666',
    background: '#ffffff',
  },
  space: [0, 4, 8, 16, 32, 64],
  fonts: {
    header: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    text: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"SF Mono", "Monaco", "Consolas", "Courier New", monospace',
  },
  fontSizes: {
    h1: '72px',
    h2: '48px',
    h3: '32px',
    text: '24px',
  },
};

const codeTheme = {
  plain: {
    color: '#ffffff',
    backgroundColor: '#1a1a1a',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: { color: '#6b7280' },
    },
    {
      types: ['punctuation'],
      style: { color: '#a1a1aa' },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: { color: '#84cc16' },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: { color: '#10b981' },
    },
    {
      types: ['operator', 'entity', 'url', 'language-css', 'style'],
      style: { color: '#8b5cf6' },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: { color: '#3b82f6' },
    },
    {
      types: ['function', 'class-name'],
      style: { color: '#f59e0b' },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: { color: '#ef4444' },
    },
  ],
};


function Presentation() {
  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 4 + 4,
    duration: Math.random() * 2 + 3
  }));

  return (
    <Deck theme={theme} transition="fade" transitionDuration={500} backgroundColor="background">
      <Slide backgroundColor="background">
        <BackgroundEffect />
        {floatingElements.map(dot => (
          <FloatingDot 
            key={dot.id} 
            top={dot.top} 
            left={dot.left} 
            delay={dot.delay}
            size={dot.size}
            duration={dot.duration}
          />
        ))}
        <FlexBox height="100%" flexDirection="column" justifyContent="space-between" alignItems="center" style={{ position: 'relative', zIndex: 1 }}>
          <Box margin="20px 0 0 0" width="100%">
            <img 
              src="img/logos.png" 
              alt="Conference sponsors"
              style={{ 
                width: '100%', 
                height: 'auto', 
                opacity: 0.8
              }}
            />
          </Box>
          
          <FlexBox flexDirection="column" alignItems="center" style={{ flex: 1, justifyContent: 'center' }}>
            <AnimatedTitle>
              <Heading 
                fontSize="96px" 
                margin="0px" 
                color="primary"
                style={{ 
                  fontWeight: 900, 
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
              >
                2025 Is the End
              </Heading>
              <Heading 
                fontSize="96px" 
                margin="0px" 
                color="secondary"
                style={{ 
                  fontWeight: 900, 
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
              >
                of Coding
              </Heading>
            </AnimatedTitle>
            <AnimatedSubtitle>
              <Text 
                fontSize="text" 
                color="primary" 
                margin="40px 0 30px 0" 
                style={{ 
                  fontWeight: 700, 
                  letterSpacing: '0.02em',
                  opacity: 0.9,
                  textTransform: 'uppercase'
                }}
              >
                Software Architects Will Lead the Future
              </Text>
            </AnimatedSubtitle>
          </FlexBox>
          
          <Box margin="0 0 20px 0" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
              <Text 
                fontSize="20px" 
                color="quinary" 
                style={{ 
                  fontWeight: 600, 
                  letterSpacing: '0.02em'
                }}
              >
                Author: Dimitri Tarasowski
              </Text>
              <Text 
                fontSize="20px" 
                color="quinary" 
                style={{ 
                  fontWeight: 600, 
                  letterSpacing: '0.02em'
                }}
              >
                Date: 28.06.2025
              </Text>
            </Box>
            <Text 
              fontSize="18px" 
              color="secondary" 
              style={{ 
                fontWeight: 600, 
                letterSpacing: '0.02em'
              }}
            >
              conand.mvpfoundry.com
            </Text>
          </Box>
        </FlexBox>
        <Notes>
          Welcome slide with MVP Foundry-inspired design
        </Notes>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Box margin="0 0 40px 0" padding="40px" style={{ borderLeft: '4px solid #84cc16', maxWidth: '80%' }}>
            <Text fontSize="h2" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em', fontStyle: 'italic' }}>
              "AI will write most code in 12–18 months; fully replace human engineers"
            </Text>
            <Text fontSize="24px" color="quinary" margin="30px 0 0 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
              — Mark Zuckerberg, April 2025 (podcast)
            </Text>
          </Box>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Box margin="0 0 40px 0">
            <img 
              src="img/zuckerberg-meme.jpg" 
              alt="Mark Zuckerberg metaverse avatar meme"
              style={{ 
                width: '500px', 
                height: 'auto', 
                borderRadius: '8px',
                border: '2px solid #84cc16'
              }}
            />
          </Box>
          <Heading fontSize="h2" color="primary" margin="0 0 20px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            But why should you believe this guy?
          </Heading>
          <Text fontSize="text" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            Fair question. Let's look at the data instead.
          </Text>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize="h1" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            I have a secret to tell
          </Heading>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize="h2" color="secondary" margin="0 0 40px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            Real talk:
          </Heading>
          <Text fontSize="h1" color="primary" margin="20px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            500K+ lines of production code
          </Text>
          <Text fontSize="h1" color="primary" margin="20px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            100% AI-generated
          </Text>
          <Text fontSize="h1" color="primary" margin="20px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            0% human-written
          </Text>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading color="primary" fontSize="h2" margin="0 0 60px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            My AI Evolution Journey
          </Heading>
          <Grid gridTemplateColumns="1fr" gridGap={32}>
            <Appear>
              <FlexBox alignItems="center" padding="20px" style={{ border: '2px solid #84cc16', borderRadius: '8px' }}>
                <FlexBox flexDirection="column">
                  <Text fontSize="24px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>GitHub Copilot</Text>
                  <Text fontSize="18px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Started with autocompletions</Text>
                </FlexBox>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox alignItems="center" padding="20px" style={{ border: '2px solid #84cc16', borderRadius: '8px' }}>
                <FlexBox flexDirection="column">
                  <Text fontSize="24px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Cursor AI & Windsurf</Text>
                  <Text fontSize="18px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Leveled up with AI pair programming</Text>
                </FlexBox>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox alignItems="center" padding="20px" style={{ border: '2px solid #84cc16', borderRadius: '8px' }}>
                <FlexBox flexDirection="column">
                  <Text fontSize="24px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Bolt.new + Lovable.dev</Text>
                  <Text fontSize="18px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Full-stack generation</Text>
                </FlexBox>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox alignItems="center" padding="20px" style={{ border: '3px solid #ffd700', borderRadius: '8px', background: 'rgba(255, 215, 0, 0.1)' }}>
                <FlexBox flexDirection="column">
                  <Text fontSize="24px" color="#ffd700" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Big AHA moment!</Text>
                  <Text fontSize="18px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>I can build anything without coding</Text>
                </FlexBox>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox alignItems="center" padding="20px" style={{ border: '3px solid #84cc16', borderRadius: '8px', background: 'rgba(132, 204, 22, 0.1)' }}>
                <FlexBox flexDirection="column">
                  <Text fontSize="24px" color="secondary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Claude Code</Text>
                  <Text fontSize="18px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Game over. Never looked back.</Text>
                </FlexBox>
              </FlexBox>
            </Appear>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize="h2" color="primary" margin="0 0 40px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            Then This Happened
          </Heading>
          <Box margin="0 0 20px 0">
            <img 
              src="img/claude-code-max.jpg" 
              alt="Claude Code Max announcement"
              style={{ 
                width: '600px', 
                height: 'auto', 
                borderRadius: '8px',
                border: '2px solid #84cc16',
                boxShadow: '0 10px 30px rgba(132, 204, 22, 0.3)'
              }}
            />
          </Box>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize="h2" color="primary" margin="0 0 40px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            This is how it all started
          </Heading>
          <Box margin="0 0 20px 0">
            <img 
              src="img/claude-code.png" 
              alt="Claude Code costs screenshot"
              style={{ 
                width: '800px', 
                height: 'auto', 
                borderRadius: '8px',
                border: '2px solid #84cc16',
                boxShadow: '0 10px 30px rgba(132, 204, 22, 0.3)'
              }}
            />
          </Box>
          <Text fontSize="text" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            My Claude Code usage costs
          </Text>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize="h2" color="primary" margin="0 0 40px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            This is how it continued
          </Heading>
          <Box margin="0 0 20px 0">
            <img 
              src="img/claude-code2.png" 
              alt="Claude Code continued usage costs screenshot"
              style={{ 
                width: '800px', 
                height: 'auto', 
                borderRadius: '8px',
                border: '2px solid #84cc16',
                boxShadow: '0 10px 30px rgba(132, 204, 22, 0.3)'
              }}
            />
          </Box>
          <Text fontSize="text" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            My Claude Code usage costs - continued
          </Text>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize="h2" color="primary" margin="0 0 40px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            This is how it all ended
          </Heading>
          <Box margin="0 0 20px 0">
            <img 
              src="img/claude-code3.png" 
              alt="Claude Code final usage costs screenshot"
              style={{ 
                width: '800px', 
                height: 'auto', 
                borderRadius: '8px',
                border: '2px solid #84cc16',
                boxShadow: '0 10px 30px rgba(132, 204, 22, 0.3)'
              }}
            />
          </Box>
          <Text fontSize="text" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            My Claude Code usage costs - final
          </Text>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize="h2" color="primary" margin="0 0 40px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            Claude Code in Action
          </Heading>
          <Box margin="0 0 20px 0">
            <img 
              src="img/claude-code-real.png" 
              alt="Claude Code real usage screenshot"
              style={{ 
                width: '800px', 
                height: 'auto', 
                borderRadius: '8px',
                border: '2px solid #84cc16',
                boxShadow: '0 10px 30px rgba(132, 204, 22, 0.3)'
              }}
            />
          </Box>
          <Text fontSize="24px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            Just did some changes to the presentation 20 minutes ago
          </Text>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading color="primary" fontSize="h2" margin="0 0 60px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            What do I build with it?
          </Heading>
          <Grid gridTemplateColumns="1fr 1fr" gridGap={40}>
            <Appear>
              <FlexBox flexDirection="column" alignItems="flex-start">
                <Box width="100%" height="120px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Settings size={64} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="24px" color="secondary" margin="0 0 10px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>DevOps Tasks</Text>
                <Text fontSize="18px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Terraform • Ansible • Bash • K8s configs</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="flex-start">
                <Box width="100%" height="120px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Palette size={64} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="24px" color="secondary" margin="0 0 10px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Frontends</Text>
                <Text fontSize="18px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>React • Next.js • Vanilla JS</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="flex-start">
                <Box width="100%" height="120px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Wrench size={64} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="24px" color="secondary" margin="0 0 10px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Backends</Text>
                <Text fontSize="18px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Python • Node.js • Go</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="flex-start">
                <Box width="100%" height="120px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Brain size={64} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="24px" color="secondary" margin="0 0 10px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Algorithms</Text>
                <Text fontSize="18px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Diffing • Optimization • ML Classifiers</Text>
              </FlexBox>
            </Appear>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading color="primary" fontSize="h2" margin="0 0 30px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            My AI Workflow
          </Heading>
          <Grid gridTemplateColumns="1fr" gridGap={16} style={{ maxWidth: '80%' }}>
            <Appear>
              <FlexBox alignItems="center" padding="15px" style={{ border: '2px solid #84cc16', borderRadius: '8px', background: 'rgba(132, 204, 22, 0.05)' }}>
                <Box width="40px" height="40px" backgroundColor="secondary" borderRadius="50%" margin="0 15px 0 0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text fontSize="20px" style={{ fontWeight: 700 }}>🎯</Text>
                </Box>
                <FlexBox flexDirection="column" style={{ flex: 1 }}>
                  <Text fontSize="20px" color="secondary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Define smallest task possible</Text>
                </FlexBox>
              </FlexBox>
            </Appear>
            
            <FlexBox justifyContent="center">
              <Text fontSize="24px" color="secondary" style={{ fontWeight: 700 }}>↓</Text>
            </FlexBox>
            
            <Appear>
              <FlexBox alignItems="center" padding="15px" style={{ border: '2px solid #84cc16', borderRadius: '8px', background: 'rgba(132, 204, 22, 0.05)' }}>
                <Box width="40px" height="40px" backgroundColor="secondary" borderRadius="50%" margin="0 15px 0 0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text fontSize="20px" style={{ fontWeight: 700 }}>🤖</Text>
                </Box>
                <FlexBox flexDirection="column" style={{ flex: 1 }}>
                  <Text fontSize="20px" color="secondary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Claude Code returns the solution</Text>
                </FlexBox>
              </FlexBox>
            </Appear>
            
            <FlexBox justifyContent="center">
              <Text fontSize="24px" color="secondary" style={{ fontWeight: 700 }}>↓</Text>
            </FlexBox>
            
            <Appear>
              <FlexBox alignItems="center" padding="15px" style={{ border: '2px solid #84cc16', borderRadius: '8px', background: 'rgba(132, 204, 22, 0.05)' }}>
                <Box width="40px" height="40px" backgroundColor="secondary" borderRadius="50%" margin="0 15px 0 0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text fontSize="20px" style={{ fontWeight: 700 }}>✅</Text>
                </Box>
                <FlexBox flexDirection="column" style={{ flex: 1 }}>
                  <Text fontSize="20px" color="secondary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Manual approval (auto-approve mode)</Text>
                </FlexBox>
              </FlexBox>
            </Appear>
            
            <FlexBox justifyContent="center">
              <Text fontSize="24px" color="secondary" style={{ fontWeight: 700 }}>↓</Text>
            </FlexBox>
            
            <Appear>
              <FlexBox alignItems="center" padding="15px" style={{ border: '2px solid #84cc16', borderRadius: '8px', background: 'rgba(132, 204, 22, 0.1)' }}>
                <Box width="40px" height="40px" backgroundColor="secondary" borderRadius="50%" margin="0 15px 0 0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text fontSize="20px" style={{ fontWeight: 700 }}>🔄</Text>
                </Box>
                <FlexBox flexDirection="column" style={{ flex: 1 }}>
                  <Text fontSize="20px" color="secondary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Rinse and repeat</Text>
                </FlexBox>
              </FlexBox>
            </Appear>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading color="primary" fontSize="h2" margin="0 0 60px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            Perfect Tech Stack for Claude Code
          </Heading>
          <Grid gridTemplateColumns="1fr 1fr" gridGap={40}>
            <Appear>
              <FlexBox flexDirection="column" alignItems="flex-start">
                <Box width="100%" height="120px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Palette size={64} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="24px" color="secondary" margin="0 0 10px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Frontend</Text>
                <Text fontSize="18px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>React + TypeScript</Text>
                <Text fontSize="16px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Perfect for component generation</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="flex-start">
                <Box width="100%" height="120px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Wrench size={64} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="24px" color="secondary" margin="0 0 10px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Backend</Text>
                <Text fontSize="18px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Golang</Text>
                <Text fontSize="16px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Claude knows Go patterns well</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="flex-start">
                <Box width="100%" height="120px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Settings size={64} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="24px" color="secondary" margin="0 0 10px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Infrastructure</Text>
                <Text fontSize="18px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Terraform + Bash</Text>
                <Text fontSize="16px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Declarative and scriptable</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="flex-start">
                <Box width="100%" height="120px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Brain size={64} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="24px" color="secondary" margin="0 0 10px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Algorithms</Text>
                <Text fontSize="18px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Any Language</Text>
                <Text fontSize="16px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Claude excels at logic problems</Text>
              </FlexBox>
            </Appear>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading color="primary" fontSize="h2" margin="0 0 40px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            What was unexpected...
          </Heading>
          <Box margin="0 0 40px 0" padding="40px" style={{ borderLeft: '4px solid #84cc16', maxWidth: '85%', background: 'rgba(132, 204, 22, 0.05)' }}>
            <Text fontSize="h2" color="secondary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
              Claude Code excels at marketing & conversion content
            </Text>
            <Text fontSize="24px" color="primary" margin="30px 0 0 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
              Way stronger than anything from OpenAI or Google
            </Text>
          </Box>
          <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap={30}>
            <Appear>
              <FlexBox flexDirection="column" alignItems="center">
                <Text fontSize="36px" margin="0 0 10px 0">📈</Text>
                <Text fontSize="18px" color="secondary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Landing Pages</Text>
                <Text fontSize="14px" color="quinary" textAlign="center" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Conversion-focused copy</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="center">
                <Text fontSize="36px" margin="0 0 10px 0">✉️</Text>
                <Text fontSize="18px" color="secondary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Email Campaigns</Text>
                <Text fontSize="14px" color="quinary" textAlign="center" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Persuasive sequences</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="center">
                <Text fontSize="36px" margin="0 0 10px 0">🎯</Text>
                <Text fontSize="18px" color="secondary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Ad Copy</Text>
                <Text fontSize="14px" color="quinary" textAlign="center" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>High-converting ads</Text>
              </FlexBox>
            </Appear>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading color="primary" fontSize="h2" margin="0 0 50px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            What are the alternatives to Claude Code?
          </Heading>
          
          <Grid gridTemplateColumns="1fr 1fr" gridGap={40} margin="0 0 50px 0">
            <Appear>
              <FlexBox flexDirection="column" alignItems="center" padding="30px" style={{ border: '2px solid #666', borderRadius: '8px', opacity: 0.6 }}>
                <Text fontSize="32px" margin="0 0 15px 0">🤖</Text>
                <Text fontSize="20px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>OpenAI Codex</Text>
                <Text fontSize="16px" color="quinary" textAlign="center" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Limited context</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="center" padding="30px" style={{ border: '2px solid #666', borderRadius: '8px', opacity: 0.6 }}>
                <Text fontSize="32px" margin="0 0 15px 0">💎</Text>
                <Text fontSize="20px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Google Gemini CLI</Text>
                <Text fontSize="16px" color="quinary" textAlign="center" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Inconsistent results</Text>
              </FlexBox>
            </Appear>
          </Grid>

          <Appear>
            <FlexBox flexDirection="column" alignItems="center" margin="40px 0 40px 0">
              <Text fontSize="24px" color="primary" margin="0 0 20px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                + 10+ other alternatives
              </Text>
              <Text fontSize="18px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                GitHub Copilot, Tabnine, Replit, Amazon CodeWhisperer, etc.
              </Text>
            </FlexBox>
          </Appear>

          <Appear>
            <Box padding="30px" style={{ border: '3px solid #ff4444', borderRadius: '8px', background: 'rgba(255, 68, 68, 0.1)' }}>
              <Text fontSize="h2" color="#ff4444" textAlign="center" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                They are all crap
              </Text>
            </Box>
          </Appear>
        </FlexBox>
      </Slide>


      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" justifyContent="center">
          <Heading color="primary" fontSize="h2" margin="0 0 60px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
            The New Architect Skillset
          </Heading>
          <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap={40}>
            <Appear>
              <FlexBox flexDirection="column" alignItems="center">
                <Box width="100%" height="150px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Network size={80} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="20px" color="secondary" margin="20px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>System Design</Text>
                <Text fontSize="16px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Distributed • Scalable • Resilient</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="center">
                <Box width="100%" height="150px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={80} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="20px" color="secondary" margin="20px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>AI Integration</Text>
                <Text fontSize="16px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Prompt Engineering • Model Selection</Text>
              </FlexBox>
            </Appear>
            <Appear>
              <FlexBox flexDirection="column" alignItems="center">
                <Box width="100%" height="150px" backgroundColor="secondary" borderRadius="8px" style={{ opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={80} color="#000000" strokeWidth={2} />
                </Box>
                <Text fontSize="20px" color="secondary" margin="20px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Business Strategy</Text>
                <Text fontSize="16px" color="quinary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>Product Vision • Tech Leadership</Text>
              </FlexBox>
            </Appear>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide backgroundColor="background">
        <FlexBox height="100%" flexDirection="column" position="relative">
          <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
            <Text fontSize="h2" color="primary" margin="0 0 60px 0" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
              The future belongs to architects, not coders
            </Text>
            <FlexBox flexDirection="column" alignItems="center" gap={30}>
              <Text fontSize="28px" color="primary" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                Dimitri Tarasowski
              </Text>
              <Text fontSize="24px" color="secondary" style={{ fontWeight: 600, letterSpacing: '0.02em' }}>
                https://www.linkedin.com/in/tarasowski/
              </Text>
              <Text fontSize="24px" color="secondary" style={{ fontWeight: 600, letterSpacing: '0.02em' }}>
                dimitri@ext.mvpfoundry.com
              </Text>
              <Text fontSize="24px" color="secondary" style={{ fontWeight: 600, letterSpacing: '0.02em' }}>
                conand.mvpfoundry.com
              </Text>
            </FlexBox>
          </FlexBox>
          
          <Box width="100%" style={{ position: 'absolute', bottom: '20px', left: 0 }}>
            <img 
              src="img/logos.png" 
              alt="Conference sponsors"
              style={{ 
                width: '100%', 
                height: 'auto', 
                opacity: 0.8
              }}
            />
          </Box>
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default Presentation;